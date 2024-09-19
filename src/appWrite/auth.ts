import {
  Client,
  Account,
  ID,
  Databases,
  Query,
  Avatars,
  OAuthProvider,
} from 'appwrite';
import { appwriteConfig } from './appConfig';
class AuthService {
  private client = new Client();
  private account;
  private database;
  private avatars;
  constructor() {
    this.client
      .setEndpoint(appwriteConfig.appWriteEndPoint)
      .setProject(appwriteConfig.appWriteProject);
    this.account = new Account(this.client);
    this.database = new Databases(this.client);
    this.avatars = new Avatars(this.client);
  }
  async loginWithEmailAndPassord({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const user = await this.getUser();
      if (user?.email) {
        console.log('already logged in');
        return await this.getUserByEmailAddress(user?.email);
      }
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      if (session) {
        return await this.getUserByEmailAddress(email);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getUserByEmailAddress(email: string) {
    try {
      const user = await this.database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        [Query.equal('email', email), Query.limit(1)]
      );
      return user.documents[0];
    } catch (error: unknown) {
      throw new Error(error);
    }
  }
  async loginWithOAuthProvider(provider: OAuthProvider) {
    try {
      const account = this.account.createOAuth2Session(provider);
      console.log(account);
    } catch (error) {
      console.log(error);
    }
  }

  // async loginWithPhone(userID: string, phone: number) {
  //   try {
  //     const account = await this.account.createPhoneSession(userID, phone);
  //     console.log(account);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async logout() {
    await this.account.deleteSessions();
    console.log('logged out');
    try {
    } catch (error) {
      console.log(error);
    }
  }
  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  async createAccount(user: {
    email: string;
    password: string;
    username: string;
  }) {
    try {
      const { email, password, username } = user;
      const account = await this.account.create(
        ID.unique(),
        email,
        password,
        username
      );
      const avatar = this.avatars.getInitials(username);
      if (account) {
        await this.database.createDocument(
          appwriteConfig.appWriteDatabase,
          appwriteConfig.appWriteUsersCollectionID,
          ID.unique(),
          { username, email, avatar }
        );
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export const authService: AuthService = new AuthService();
