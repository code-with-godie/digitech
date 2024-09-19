import { appwriteConfiguration } from '@/typings/typing';
export const appwriteConfig: appwriteConfiguration = {
  appWriteEndPoint: 'https://cloud.appwrite.io/v1',
  appWriteProject: '66ec158e0028c15d7ff9',
  appWriteBucket: '66ec1749003306f626fa',
  appWriteDatabase: '66ec16e3003977d00cab',
  appWriteProductCollectionID: '66ec17660019fd49a901',
  appWriteUsersCollectionID: '66ec1776000b088d1dc9',
  appWriteCategoryCollectionID: '66ec17890000d4ff8afe',
};
//local db
// export const appwriteConfig: appwriteConfiguration = {
//   appWriteEndPoint: 'http://localhost/v1',
//   appWriteProject: '66ea93a300185760d209',
//   appWriteBucket: '66ea94460012dafdc5ae',
//   appWriteDatabase: '66ea9403003544b0e1a2',
//   appWriteProductCollectionID: '66ea942b002d6c0b84a9',
//   appWriteUsersCollectionID: '66ea941700165956f7e4',
//   appWriteCategoryCollectionID: '66ea946b0029287ddd08',
// };
// export const appwriteConfig: appwriteConfiguration = {
//   appWriteEndPoint: String(process.env.PUBLIC_APPWRITE_END_POINT),
//   appWriteProject: String(process.env.PUBLIC_APPWRITE_PROJECT),
//   appWriteBucket: String(process.env.PUBLIC_APPWRITE_BUCKET),
//   appWriteDatabase: String(process.env.PUBLIC_APPWRITE_DATABASE),
//   appWriteProductCollectionID: String(
//     process.env.PUBLIC_APPWRITE_PRODUCT_COLLECTION_ID
//   ),
//   appWriteUsersCollectionID: String(
//     process.env.PUBLIC_APPWRITE_USERS_COLLECTION_ID
//   ),
//   appWriteCategoryCollectionID: String(
//     process.env.PUBLIC_APPWRITE_CATEGORY_COLLECTION_ID
//   ),
// };
