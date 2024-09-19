import { Client, Databases, Query } from 'appwrite';
import { appwriteConfig } from './appConfig';

class AppWriteService {
  private client = new Client();
  private database;
  constructor() {
    this.client
      .setEndpoint(appwriteConfig.appWriteEndPoint)
      .setProject(appwriteConfig.appWriteProject);
    this.database = new Databases(this.client);
  }
  async getCategories() {
    try {
      const res = await this.database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteCategoryCollectionID
      );
      return res.documents;
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
  async getSingleProduct(productId: string) {
    try {
      return await this.database.getDocument(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        productId
      );
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
  async getAllProducts() {
    try {
      const res = await this.database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID
      );
      return res.documents;
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
  async getCategoryProducts(category?: string | string[] | undefined | null) {
    try {
      if (!category) {
        console.log('no category');

        const res = await this.database.listDocuments(
          appwriteConfig.appWriteDatabase,
          appwriteConfig.appWriteProductCollectionID,
          [Query.limit(30)]
        );
        console.log('res', res.documents);
        return res.documents;
      }
      console.log('found a category');

      const res = await this.database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.equal('category', category)]
      );
      return res.documents;
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
  async getNewArrivals() {
    try {
      const res = await this.database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.orderDesc('$createdAt')]
      );
      return res.documents;
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
}

export const appwriteService: AppWriteService = new AppWriteService();
