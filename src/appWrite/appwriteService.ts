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
  async search(searchTerm: string) {
    try {
      const res = await this.database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.search('title', searchTerm)]
      );
      return res.documents;
    } catch (error) {
      // Narrowing down `error` to something that has a message
      if (error instanceof Error) {
        console.log(error.message);
        throw new Error(`Failed to search: ${error.message}`);
      } else {
        throw new Error('Failed to search due to an unknown error');
      }
    }
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
  async saveProduct(email: string, productID: string) {
    try {
      const user = await this.getUserByEmailAddress(email);
      if (!user) {
        return null;
      }
      let saved = [...user?.saved];
      if (saved?.includes(productID)) {
        console.log('product already saved,removing the item');
        saved = saved.filter(item => item !== productID);
      } else {
        console.log('saving the products');
        saved.unshift(productID);
      }
      const newUser = await this.database.updateDocument(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteUsersCollectionID,
        user.$id,
        {
          saved,
        }
      );
      return newUser;
    } catch (error) {
      // Narrowing down `error` to something that has a message
      if (error instanceof Error) {
        console.log(error.message);
        throw new Error(`Failed to get save product: ${error.message}`);
      } else {
        throw new Error('Failed to save product due to an unknown error');
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
  async getSingCategory(name: string | undefined | null) {
    try {
      if (!name) return;
      const cats = await this.database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteCategoryCollectionID,
        [Query.equal('name', name)]
      );
      return cats.documents[0];
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
  async getCategoryProducts({
    category,
    sort,
    searchTerm,
  }: {
    category?: string | undefined | null;
    sort: string | undefined | null;
    searchTerm?: string;
  }) {
    let query: string = Query.orderDesc('$createdAt');
    if (sort === 'oldest') {
      query = Query.orderAsc('$createdAt');
    }
    if (searchTerm) {
      return this.search(searchTerm);
    }
    try {
      if (!category) {
        // console.log('no category');
        const res = await this.database.listDocuments(
          appwriteConfig.appWriteDatabase,
          appwriteConfig.appWriteProductCollectionID,
          [Query.limit(30), query]
        );
        return res.documents;
      } else {
        // console.log('found a category', category);
        if (category.includes('&')) {
          // console.log('its an array');
          const tempCat = category.split('&');
          // console.log('there', tempCat);
          const res = await this.database.listDocuments(
            appwriteConfig.appWriteDatabase,
            appwriteConfig.appWriteProductCollectionID,
            [Query.equal('category', tempCat), query]
          );
          return res.documents;
        }
        // console.log('its not an aray');

        const res = await this.database.listDocuments(
          appwriteConfig.appWriteDatabase,
          appwriteConfig.appWriteProductCollectionID,
          [Query.equal('category', category), query]
        );
        return res.documents;
      }
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
        console.log(error);
        throw new Error(`Failed to get new arrivals: ${error.message}`);
      } else {
        console.log(error);
        throw new Error('Failed to get new arrivals due to an unknown error');
      }
    }
  }
  async getRelatedProducts(id: string, category: string) {
    try {
      const res = await this.database.listDocuments(
        appwriteConfig.appWriteDatabase,
        appwriteConfig.appWriteProductCollectionID,
        [Query.equal('category', category), Query.notEqual('$id', id)]
      );
      return res.documents;
    } catch (error) {
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
}

export const appwriteService: AppWriteService = new AppWriteService();
