import {
  Client,
  Account,
  ID,
  Databases,
  Query,
  Avatars,
  OAuthProvider,
  Models,
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
      console.log('called');

      // const user: Models.Preferences = await this.getUser();
      // console.log('found', user);

      // if (user?.email) {
      //   console.log('already logged in');
      //   return await this.getUserByEmailAddress(user?.email);
      // }
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
  async getUserByAccountId(accountId: string) {
    try {
      const user = await this.database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        [Query.equal('accountId', accountId)]
      );
      return user.documents[0];
    } catch (error: unknown) {
      // Narrowing down `error` to something that has a message
      if (error instanceof Error) {
        console.log(error.message);
        throw new Error(`Failed to get new arrivals: ${error.message}`);
      } else {
        throw new Error('Failed to get new arrivals due to an unknown error');
      }
    }
  }
  async getUserByEmailAddress(email: string) {
    try {
      const user = await this.database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        [Query.equal('email', email)]
      );
      return user.documents[0];
    } catch (error: unknown) {
      // Narrowing down `error` to something that has a message
      if (error instanceof Error) {
        console.log(error.message);
        throw new Error(`Failed to get new arrivals: ${error.message}`);
      } else {
        throw new Error('Failed to get new arrivals due to an unknown error');
      }
    }
  }
  async loginWithOAuthProvider(provider: OAuthProvider) {
    try {
      const account = this.account.createOAuth2Session(provider);
      console.log(account);
    } catch (error) {
      // Narrowing down `error` to something that has a message
      if (error instanceof Error) {
        console.log(error.message);
        throw new Error(`Failed to get new arrivals: ${error.message}`);
      } else {
        throw new Error('Failed to get new arrivals due to an unknown error');
      }
    }
  }

  async logout() {
    await this.account.deleteSessions();
    console.log('logged out');
    try {
    } catch (error) {
      // Narrowing down `error` to something that has a message
      if (error instanceof Error) {
        console.log(error.message);
        throw new Error(`Failed to get new arrivals: ${error.message}`);
      } else {
        throw new Error('Failed to get new arrivals due to an unknown error');
      }
    }
  }
  async getUser() {
    try {
      console.log('getting user');
      const account = await this.account.get();
      if (account.$id) {
        const user = await this.getUserByAccountId(account.$id);
        return user;
      }
      return null;
    } catch (error) {
      console.log(error);
      // Narrowing down `error` to something that has a message
      if (error instanceof Error) {
        console.log(error);
        throw new Error(`Failed to get user: ${error.message}`);
      } else {
        console.log(error);
        throw new Error('Failed to get user due to an unknown error');
      }
    }
  }
  async updateUser() {
    try {
      // const account = await this.account.updateName(user.username)
      // const account2 = await this.account.updateEmail(user.username,)
    } catch (error) {
      console.log(error);
      // Narrowing down `error` to something that has a message
      if (error instanceof Error) {
        console.log(error);
        throw new Error(`Failed to get new arrivals: ${error.message}`);
      } else {
        console.log(error);
        throw new Error('Failed to get new arrivals due to an unknown error');
      }
    }
  }
  async createAccount(user: {
    email: string;
    password: string;
    username: string;
  }) {
    try {
      const { email, password, username } = user;
      const account: Models.Preferences = await this.account.create(
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
          { username, email, avatar, accountId: account.$id }
        );
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      // Narrowing down `error` to something that has a message
      if (error instanceof Error) {
        console.log(error.message);
        throw new Error(`Failed to get new arrivals: ${error.message}`);
      } else {
        throw new Error('Failed to get new arrivals due to an unknown error');
      }
    }
  }
}

export const authService: AuthService = new AuthService();
