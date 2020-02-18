/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user {
  readonly __typename: "User";
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: Role;
  readonly imageUrl: string;
  readonly createdAt: any;
  readonly updatedAt: any;
}

export interface GetUser {
  readonly user: GetUser_user;
}

export interface GetUserVariables {
  readonly id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWork
// ====================================================

export interface GetWork_work_likedBy {
  readonly __typename: "User";
  readonly id: string;
}

export interface GetWork_work_favouritedBy {
  readonly __typename: "User";
  readonly id: string;
}

export interface GetWork_work_category {
  readonly __typename: "Category";
  readonly id: string;
  readonly name: string;
}

export interface GetWork_work_user {
  readonly __typename: "User";
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: Role;
  readonly imageUrl: string;
  readonly createdAt: any;
  readonly updatedAt: any;
}

export interface GetWork_work_comments_user {
  readonly __typename: "User";
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
}

export interface GetWork_work_comments {
  readonly __typename: "Comment";
  readonly id: string;
  readonly content: string;
  readonly user: GetWork_work_comments_user;
  readonly createdAt: any;
}

export interface GetWork_work {
  readonly __typename: "Work";
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly visibility: boolean;
  readonly views: number;
  readonly usage: number;
  readonly likedBy: ReadonlyArray<GetWork_work_likedBy>;
  readonly favouritedBy: ReadonlyArray<GetWork_work_favouritedBy>;
  readonly category: GetWork_work_category;
  readonly user: GetWork_work_user;
  readonly comments: ReadonlyArray<GetWork_work_comments>;
  readonly imageUrl: string;
  readonly createdAt: any;
  readonly updatedAt: any;
}

export interface GetWork {
  readonly work: GetWork_work;
}

export interface GetWorkVariables {
  readonly id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  readonly __typename: "User";
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: Role;
}

export interface Login_login {
  readonly __typename: "AuthPayload";
  readonly token: string;
  readonly user: Login_login_user;
}

export interface Login {
  readonly login: Login_login;
}

export interface LoginVariables {
  readonly email: string;
  readonly password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Register
// ====================================================

export interface Register_signup_user {
  readonly __typename: "User";
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: Role;
}

export interface Register_signup {
  readonly __typename: "AuthPayload";
  readonly token: string;
  readonly user: Register_signup_user;
}

export interface Register {
  readonly signup: Register_signup;
}

export interface RegisterVariables {
  readonly email: string;
  readonly password: string;
  readonly name: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserList
// ====================================================

export interface GetUserList_users {
  readonly __typename: "User";
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: Role;
  readonly imageUrl: string;
  readonly createdAt: any;
  readonly updatedAt: any;
}

export interface GetUserList {
  readonly users: ReadonlyArray<(GetUserList_users)>;
}

export interface GetUserListVariables {
  readonly where?: UserWhereInput;
  readonly orderBy?: UserOrderByInput;
  readonly skip?: number;
  readonly after?: string;
  readonly before?: string;
  readonly first?: number;
  readonly last?: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWorkList
// ====================================================

export interface GetWorkList_works_user {
  readonly __typename: "User";
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly role: Role;
  readonly imageUrl: string;
  readonly createdAt: any;
  readonly updatedAt: any;
}

export interface GetWorkList_works_category {
  readonly __typename: "Category";
  readonly id: string;
  readonly name: string;
  readonly createdAt: any;
  readonly updatedAt: any;
}

export interface GetWorkList_works {
  readonly __typename: "Work";
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly visibility: boolean;
  readonly views: number;
  readonly usage: number;
  readonly imageUrl: string;
  readonly user: GetWorkList_works_user;
  readonly category: GetWorkList_works_category;
  readonly createdAt: any;
  readonly updatedAt: any;
}

export interface GetWorkList {
  readonly works: ReadonlyArray<(GetWorkList_works)>;
}

export interface GetWorkListVariables {
  readonly where?: WorkWhereInput;
  readonly orderBy?: WorkOrderByInput;
  readonly skip?: number;
  readonly after?: string;
  readonly before?: string;
  readonly first?: number;
  readonly last?: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IsFollowing
// ====================================================

export interface IsFollowing_usersConnection_aggregate {
  readonly __typename: "AggregateUser";
  readonly count: number;
}

export interface IsFollowing_usersConnection {
  readonly __typename: "UserConnection";
  readonly aggregate: IsFollowing_usersConnection_aggregate;
}

export interface IsFollowing {
  readonly usersConnection: IsFollowing_usersConnection;
}

export interface IsFollowingVariables {
  readonly me?: string;
  readonly target?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: FollowUser
// ====================================================

export interface FollowUser_updateUser {
  readonly __typename: "User";
  readonly id: string;
}

export interface FollowUser {
  readonly updateUser: FollowUser_updateUser;
}

export interface FollowUserVariables {
  readonly me?: string;
  readonly target?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnfollowUser
// ====================================================

export interface UnfollowUser_updateUser {
  readonly __typename: "User";
  readonly id: string;
}

export interface UnfollowUser {
  readonly updateUser: UnfollowUser_updateUser;
}

export interface UnfollowUserVariables {
  readonly me?: string;
  readonly target?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IsLiked
// ====================================================

export interface IsLiked_usersConnection_aggregate {
  readonly __typename: "AggregateUser";
  readonly count: number;
}

export interface IsLiked_usersConnection {
  readonly __typename: "UserConnection";
  readonly aggregate: IsLiked_usersConnection_aggregate;
}

export interface IsLiked {
  readonly usersConnection: IsLiked_usersConnection;
}

export interface IsLikedVariables {
  readonly me?: string;
  readonly target?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LikeWork
// ====================================================

export interface LikeWork_updateUser {
  readonly __typename: "User";
  readonly id: string;
}

export interface LikeWork {
  readonly updateUser: LikeWork_updateUser;
}

export interface LikeWorkVariables {
  readonly me?: string;
  readonly target?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnlikeWork
// ====================================================

export interface UnlikeWork_updateUser {
  readonly __typename: "User";
  readonly id: string;
}

export interface UnlikeWork {
  readonly updateUser: UnlikeWork_updateUser;
}

export interface UnlikeWorkVariables {
  readonly me?: string;
  readonly target?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IsFavourited
// ====================================================

export interface IsFavourited_usersConnection_aggregate {
  readonly __typename: "AggregateUser";
  readonly count: number;
}

export interface IsFavourited_usersConnection {
  readonly __typename: "UserConnection";
  readonly aggregate: IsFavourited_usersConnection_aggregate;
}

export interface IsFavourited {
  readonly usersConnection: IsFavourited_usersConnection;
}

export interface IsFavouritedVariables {
  readonly me?: string;
  readonly target?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: FavouriteWork
// ====================================================

export interface FavouriteWork_updateUser {
  readonly __typename: "User";
  readonly id: string;
}

export interface FavouriteWork {
  readonly updateUser: FavouriteWork_updateUser;
}

export interface FavouriteWorkVariables {
  readonly me?: string;
  readonly target?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnfavouriteWork
// ====================================================

export interface UnfavouriteWork_updateUser {
  readonly __typename: "User";
  readonly id: string;
}

export interface UnfavouriteWork {
  readonly updateUser: UnfavouriteWork_updateUser;
}

export interface UnfavouriteWorkVariables {
  readonly me?: string;
  readonly target?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CommentWork
// ====================================================

export interface CommentWork_createComment {
  readonly __typename: "Comment";
  readonly id: string;
}

export interface CommentWork {
  readonly createComment: CommentWork_createComment;
}

export interface CommentWorkVariables {
  readonly user?: string;
  readonly work?: string;
  readonly content: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFollowings
// ====================================================

export interface GetFollowings_user_following {
  readonly __typename: "User";
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly createdAt: any;
}

export interface GetFollowings_user {
  readonly __typename: "User";
  readonly following: ReadonlyArray<GetFollowings_user_following>;
}

export interface GetFollowings {
  readonly user: GetFollowings_user;
}

export interface GetFollowingsVariables {
  readonly id?: string;
  readonly filter?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserNameAndImageUrl
// ====================================================

export interface GetUserNameAndImageUrl_user {
  readonly __typename: "User";
  readonly name: string;
  readonly imageUrl: string;
}

export interface GetUserNameAndImageUrl {
  readonly user: GetUserNameAndImageUrl_user;
}

export interface GetUserNameAndImageUrlVariables {
  readonly id?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateUserNameAndImageUrl
// ====================================================

export interface UpdateUserNameAndImageUrl_updateUser {
  readonly __typename: "User";
  readonly id: string;
}

export interface UpdateUserNameAndImageUrl {
  readonly updateUser: UpdateUserNameAndImageUrl_updateUser;
}

export interface UpdateUserNameAndImageUrlVariables {
  readonly id?: string;
  readonly name?: string;
  readonly imageUrl?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWorkForEditing
// ====================================================

export interface GetWorkForEditing_work_category {
  readonly __typename: "Category";
  readonly id: string;
}

export interface GetWorkForEditing_work {
  readonly __typename: "Work";
  readonly name: string;
  readonly description: string;
  readonly category: GetWorkForEditing_work_category;
  readonly imageUrl: string;
  readonly visibility: boolean;
}

export interface GetWorkForEditing_categories {
  readonly __typename: "Category";
  readonly id: string;
  readonly name: string;
}

export interface GetWorkForEditing {
  readonly work: GetWorkForEditing_work;
  readonly categories: ReadonlyArray<(GetWorkForEditing_categories)>;
}

export interface GetWorkForEditingVariables {
  readonly id?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateWork
// ====================================================

export interface UpdateWork_updateWork {
  readonly __typename: "Work";
  readonly id: string;
}

export interface UpdateWork {
  readonly updateWork: UpdateWork_updateWork;
}

export interface UpdateWorkVariables {
  readonly id?: string;
  readonly name?: string;
  readonly description?: string;
  readonly visibility?: boolean;
  readonly imageUrl?: string;
  readonly categoryId?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categories {
  readonly __typename: "Category";
  readonly id: string;
  readonly name: string;
}

export interface GetCategories {
  readonly categories: ReadonlyArray<(GetCategories_categories)>;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateWork
// ====================================================

export interface CreateWork_createWork {
  readonly __typename: "Work";
  readonly id: string;
}

export interface CreateWork {
  readonly createWork: CreateWork_createWork;
}

export interface CreateWorkVariables {
  readonly id?: string;
  readonly name: string;
  readonly description: string;
  readonly visibility: boolean;
  readonly imageUrl: string;
  readonly categoryId?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetImageData
// ====================================================

export interface GetImageData_work_imageDatas {
  readonly __typename: "ImageData";
  readonly id: string;
  readonly fileUrl: string;
  readonly createdAt: any;
}

export interface GetImageData_work {
  readonly __typename: "Work";
  readonly imageDatas: ReadonlyArray<GetImageData_work_imageDatas>;
}

export interface GetImageData {
  readonly work: GetImageData_work;
}

export interface GetImageDataVariables {
  readonly id?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateImageData
// ====================================================

export interface CreateImageData_createImageData {
  readonly __typename: "ImageData";
  readonly id: string;
}

export interface CreateImageData {
  readonly createImageData: CreateImageData_createImageData;
}

export interface CreateImageDataVariables {
  readonly workId?: string;
  readonly fileUrl: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteImageData
// ====================================================

export interface DeleteImageData_deleteImageData {
  readonly __typename: "ImageData";
  readonly id: string;
}

export interface DeleteImageData {
  readonly deleteImageData: DeleteImageData_deleteImageData;
}

export interface DeleteImageDataVariables {
  readonly id?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetVoiceData
// ====================================================

export interface GetVoiceData_work_voiceDatas {
  readonly __typename: "VoiceData";
  readonly id: string;
  readonly fileUrl: string;
  readonly createdAt: any;
}

export interface GetVoiceData_work {
  readonly __typename: "Work";
  readonly voiceDatas: ReadonlyArray<GetVoiceData_work_voiceDatas>;
}

export interface GetVoiceData {
  readonly work: GetVoiceData_work;
}

export interface GetVoiceDataVariables {
  readonly id?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateVoiceData
// ====================================================

export interface CreateVoiceData_createVoiceData {
  readonly __typename: "VoiceData";
  readonly id: string;
}

export interface CreateVoiceData {
  readonly createVoiceData: CreateVoiceData_createVoiceData;
}

export interface CreateVoiceDataVariables {
  readonly workId?: string;
  readonly fileUrl: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteVoiceData
// ====================================================

export interface DeleteVoiceData_deleteVoiceData {
  readonly __typename: "VoiceData";
  readonly id: string;
}

export interface DeleteVoiceData {
  readonly deleteVoiceData: DeleteVoiceData_deleteVoiceData;
}

export interface DeleteVoiceDataVariables {
  readonly id?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ReportWork
// ====================================================

export interface ReportWork_createReport {
  readonly __typename: "Report";
  readonly id: string;
}

export interface ReportWork {
  readonly createReport: ReportWork_createReport;
}

export interface ReportWorkVariables {
  readonly user?: string;
  readonly work?: string;
  readonly reason: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  ADMIN = "ADMIN",
  CARETAKER = "CARETAKER",
}

export enum UserOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  email_ASC = "email_ASC",
  email_DESC = "email_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  imageUrl_ASC = "imageUrl_ASC",
  imageUrl_DESC = "imageUrl_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  password_ASC = "password_ASC",
  password_DESC = "password_DESC",
  role_ASC = "role_ASC",
  role_DESC = "role_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
}

export enum WorkOrderByInput {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  imageUrl_ASC = "imageUrl_ASC",
  imageUrl_DESC = "imageUrl_DESC",
  name_ASC = "name_ASC",
  name_DESC = "name_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  usage_ASC = "usage_ASC",
  usage_DESC = "usage_DESC",
  views_ASC = "views_ASC",
  views_DESC = "views_DESC",
  visibility_ASC = "visibility_ASC",
  visibility_DESC = "visibility_DESC",
}

export interface CategoryWhereInput {
  readonly id?: string;
  readonly id_not?: string;
  readonly id_in?: ReadonlyArray<string>;
  readonly id_not_in?: ReadonlyArray<string>;
  readonly id_lt?: string;
  readonly id_lte?: string;
  readonly id_gt?: string;
  readonly id_gte?: string;
  readonly id_contains?: string;
  readonly id_not_contains?: string;
  readonly id_starts_with?: string;
  readonly id_not_starts_with?: string;
  readonly id_ends_with?: string;
  readonly id_not_ends_with?: string;
  readonly name?: string;
  readonly name_not?: string;
  readonly name_in?: ReadonlyArray<string>;
  readonly name_not_in?: ReadonlyArray<string>;
  readonly name_lt?: string;
  readonly name_lte?: string;
  readonly name_gt?: string;
  readonly name_gte?: string;
  readonly name_contains?: string;
  readonly name_not_contains?: string;
  readonly name_starts_with?: string;
  readonly name_not_starts_with?: string;
  readonly name_ends_with?: string;
  readonly name_not_ends_with?: string;
  readonly works_every?: WorkWhereInput;
  readonly works_some?: WorkWhereInput;
  readonly works_none?: WorkWhereInput;
  readonly createdAt?: any;
  readonly createdAt_not?: any;
  readonly createdAt_in?: ReadonlyArray<any>;
  readonly createdAt_not_in?: ReadonlyArray<any>;
  readonly createdAt_lt?: any;
  readonly createdAt_lte?: any;
  readonly createdAt_gt?: any;
  readonly createdAt_gte?: any;
  readonly updatedAt?: any;
  readonly updatedAt_not?: any;
  readonly updatedAt_in?: ReadonlyArray<any>;
  readonly updatedAt_not_in?: ReadonlyArray<any>;
  readonly updatedAt_lt?: any;
  readonly updatedAt_lte?: any;
  readonly updatedAt_gt?: any;
  readonly updatedAt_gte?: any;
  readonly AND?: ReadonlyArray<CategoryWhereInput>;
  readonly OR?: ReadonlyArray<CategoryWhereInput>;
  readonly NOT?: ReadonlyArray<CategoryWhereInput>;
}

export interface CommentWhereInput {
  readonly id?: string;
  readonly id_not?: string;
  readonly id_in?: ReadonlyArray<string>;
  readonly id_not_in?: ReadonlyArray<string>;
  readonly id_lt?: string;
  readonly id_lte?: string;
  readonly id_gt?: string;
  readonly id_gte?: string;
  readonly id_contains?: string;
  readonly id_not_contains?: string;
  readonly id_starts_with?: string;
  readonly id_not_starts_with?: string;
  readonly id_ends_with?: string;
  readonly id_not_ends_with?: string;
  readonly content?: string;
  readonly content_not?: string;
  readonly content_in?: ReadonlyArray<string>;
  readonly content_not_in?: ReadonlyArray<string>;
  readonly content_lt?: string;
  readonly content_lte?: string;
  readonly content_gt?: string;
  readonly content_gte?: string;
  readonly content_contains?: string;
  readonly content_not_contains?: string;
  readonly content_starts_with?: string;
  readonly content_not_starts_with?: string;
  readonly content_ends_with?: string;
  readonly content_not_ends_with?: string;
  readonly user?: UserWhereInput;
  readonly work?: WorkWhereInput;
  readonly createdAt?: any;
  readonly createdAt_not?: any;
  readonly createdAt_in?: ReadonlyArray<any>;
  readonly createdAt_not_in?: ReadonlyArray<any>;
  readonly createdAt_lt?: any;
  readonly createdAt_lte?: any;
  readonly createdAt_gt?: any;
  readonly createdAt_gte?: any;
  readonly updatedAt?: any;
  readonly updatedAt_not?: any;
  readonly updatedAt_in?: ReadonlyArray<any>;
  readonly updatedAt_not_in?: ReadonlyArray<any>;
  readonly updatedAt_lt?: any;
  readonly updatedAt_lte?: any;
  readonly updatedAt_gt?: any;
  readonly updatedAt_gte?: any;
  readonly AND?: ReadonlyArray<CommentWhereInput>;
  readonly OR?: ReadonlyArray<CommentWhereInput>;
  readonly NOT?: ReadonlyArray<CommentWhereInput>;
}

export interface ImageDataWhereInput {
  readonly id?: string;
  readonly id_not?: string;
  readonly id_in?: ReadonlyArray<string>;
  readonly id_not_in?: ReadonlyArray<string>;
  readonly id_lt?: string;
  readonly id_lte?: string;
  readonly id_gt?: string;
  readonly id_gte?: string;
  readonly id_contains?: string;
  readonly id_not_contains?: string;
  readonly id_starts_with?: string;
  readonly id_not_starts_with?: string;
  readonly id_ends_with?: string;
  readonly id_not_ends_with?: string;
  readonly fileUrl?: string;
  readonly fileUrl_not?: string;
  readonly fileUrl_in?: ReadonlyArray<string>;
  readonly fileUrl_not_in?: ReadonlyArray<string>;
  readonly fileUrl_lt?: string;
  readonly fileUrl_lte?: string;
  readonly fileUrl_gt?: string;
  readonly fileUrl_gte?: string;
  readonly fileUrl_contains?: string;
  readonly fileUrl_not_contains?: string;
  readonly fileUrl_starts_with?: string;
  readonly fileUrl_not_starts_with?: string;
  readonly fileUrl_ends_with?: string;
  readonly fileUrl_not_ends_with?: string;
  readonly work?: WorkWhereInput;
  readonly createdAt?: any;
  readonly createdAt_not?: any;
  readonly createdAt_in?: ReadonlyArray<any>;
  readonly createdAt_not_in?: ReadonlyArray<any>;
  readonly createdAt_lt?: any;
  readonly createdAt_lte?: any;
  readonly createdAt_gt?: any;
  readonly createdAt_gte?: any;
  readonly updatedAt?: any;
  readonly updatedAt_not?: any;
  readonly updatedAt_in?: ReadonlyArray<any>;
  readonly updatedAt_not_in?: ReadonlyArray<any>;
  readonly updatedAt_lt?: any;
  readonly updatedAt_lte?: any;
  readonly updatedAt_gt?: any;
  readonly updatedAt_gte?: any;
  readonly AND?: ReadonlyArray<ImageDataWhereInput>;
  readonly OR?: ReadonlyArray<ImageDataWhereInput>;
  readonly NOT?: ReadonlyArray<ImageDataWhereInput>;
}

export interface ReportWhereInput {
  readonly id?: string;
  readonly id_not?: string;
  readonly id_in?: ReadonlyArray<string>;
  readonly id_not_in?: ReadonlyArray<string>;
  readonly id_lt?: string;
  readonly id_lte?: string;
  readonly id_gt?: string;
  readonly id_gte?: string;
  readonly id_contains?: string;
  readonly id_not_contains?: string;
  readonly id_starts_with?: string;
  readonly id_not_starts_with?: string;
  readonly id_ends_with?: string;
  readonly id_not_ends_with?: string;
  readonly reason?: string;
  readonly reason_not?: string;
  readonly reason_in?: ReadonlyArray<string>;
  readonly reason_not_in?: ReadonlyArray<string>;
  readonly reason_lt?: string;
  readonly reason_lte?: string;
  readonly reason_gt?: string;
  readonly reason_gte?: string;
  readonly reason_contains?: string;
  readonly reason_not_contains?: string;
  readonly reason_starts_with?: string;
  readonly reason_not_starts_with?: string;
  readonly reason_ends_with?: string;
  readonly reason_not_ends_with?: string;
  readonly user?: UserWhereInput;
  readonly work?: WorkWhereInput;
  readonly createdAt?: any;
  readonly createdAt_not?: any;
  readonly createdAt_in?: ReadonlyArray<any>;
  readonly createdAt_not_in?: ReadonlyArray<any>;
  readonly createdAt_lt?: any;
  readonly createdAt_lte?: any;
  readonly createdAt_gt?: any;
  readonly createdAt_gte?: any;
  readonly updatedAt?: any;
  readonly updatedAt_not?: any;
  readonly updatedAt_in?: ReadonlyArray<any>;
  readonly updatedAt_not_in?: ReadonlyArray<any>;
  readonly updatedAt_lt?: any;
  readonly updatedAt_lte?: any;
  readonly updatedAt_gt?: any;
  readonly updatedAt_gte?: any;
  readonly AND?: ReadonlyArray<ReportWhereInput>;
  readonly OR?: ReadonlyArray<ReportWhereInput>;
  readonly NOT?: ReadonlyArray<ReportWhereInput>;
}

export interface UserWhereInput {
  readonly id?: string;
  readonly id_not?: string;
  readonly id_in?: ReadonlyArray<string>;
  readonly id_not_in?: ReadonlyArray<string>;
  readonly id_lt?: string;
  readonly id_lte?: string;
  readonly id_gt?: string;
  readonly id_gte?: string;
  readonly id_contains?: string;
  readonly id_not_contains?: string;
  readonly id_starts_with?: string;
  readonly id_not_starts_with?: string;
  readonly id_ends_with?: string;
  readonly id_not_ends_with?: string;
  readonly name?: string;
  readonly name_not?: string;
  readonly name_in?: ReadonlyArray<string>;
  readonly name_not_in?: ReadonlyArray<string>;
  readonly name_lt?: string;
  readonly name_lte?: string;
  readonly name_gt?: string;
  readonly name_gte?: string;
  readonly name_contains?: string;
  readonly name_not_contains?: string;
  readonly name_starts_with?: string;
  readonly name_not_starts_with?: string;
  readonly name_ends_with?: string;
  readonly name_not_ends_with?: string;
  readonly email?: string;
  readonly email_not?: string;
  readonly email_in?: ReadonlyArray<string>;
  readonly email_not_in?: ReadonlyArray<string>;
  readonly email_lt?: string;
  readonly email_lte?: string;
  readonly email_gt?: string;
  readonly email_gte?: string;
  readonly email_contains?: string;
  readonly email_not_contains?: string;
  readonly email_starts_with?: string;
  readonly email_not_starts_with?: string;
  readonly email_ends_with?: string;
  readonly email_not_ends_with?: string;
  readonly password?: string;
  readonly password_not?: string;
  readonly password_in?: ReadonlyArray<string>;
  readonly password_not_in?: ReadonlyArray<string>;
  readonly password_lt?: string;
  readonly password_lte?: string;
  readonly password_gt?: string;
  readonly password_gte?: string;
  readonly password_contains?: string;
  readonly password_not_contains?: string;
  readonly password_starts_with?: string;
  readonly password_not_starts_with?: string;
  readonly password_ends_with?: string;
  readonly password_not_ends_with?: string;
  readonly imageUrl?: string;
  readonly imageUrl_not?: string;
  readonly imageUrl_in?: ReadonlyArray<string>;
  readonly imageUrl_not_in?: ReadonlyArray<string>;
  readonly imageUrl_lt?: string;
  readonly imageUrl_lte?: string;
  readonly imageUrl_gt?: string;
  readonly imageUrl_gte?: string;
  readonly imageUrl_contains?: string;
  readonly imageUrl_not_contains?: string;
  readonly imageUrl_starts_with?: string;
  readonly imageUrl_not_starts_with?: string;
  readonly imageUrl_ends_with?: string;
  readonly imageUrl_not_ends_with?: string;
  readonly role?: Role;
  readonly role_not?: Role;
  readonly role_in?: ReadonlyArray<Role>;
  readonly role_not_in?: ReadonlyArray<Role>;
  readonly works_every?: WorkWhereInput;
  readonly works_some?: WorkWhereInput;
  readonly works_none?: WorkWhereInput;
  readonly liked_every?: WorkWhereInput;
  readonly liked_some?: WorkWhereInput;
  readonly liked_none?: WorkWhereInput;
  readonly favourited_every?: WorkWhereInput;
  readonly favourited_some?: WorkWhereInput;
  readonly favourited_none?: WorkWhereInput;
  readonly reports_every?: ReportWhereInput;
  readonly reports_some?: ReportWhereInput;
  readonly reports_none?: ReportWhereInput;
  readonly comments_every?: CommentWhereInput;
  readonly comments_some?: CommentWhereInput;
  readonly comments_none?: CommentWhereInput;
  readonly following_every?: UserWhereInput;
  readonly following_some?: UserWhereInput;
  readonly following_none?: UserWhereInput;
  readonly createdAt?: any;
  readonly createdAt_not?: any;
  readonly createdAt_in?: ReadonlyArray<any>;
  readonly createdAt_not_in?: ReadonlyArray<any>;
  readonly createdAt_lt?: any;
  readonly createdAt_lte?: any;
  readonly createdAt_gt?: any;
  readonly createdAt_gte?: any;
  readonly updatedAt?: any;
  readonly updatedAt_not?: any;
  readonly updatedAt_in?: ReadonlyArray<any>;
  readonly updatedAt_not_in?: ReadonlyArray<any>;
  readonly updatedAt_lt?: any;
  readonly updatedAt_lte?: any;
  readonly updatedAt_gt?: any;
  readonly updatedAt_gte?: any;
  readonly AND?: ReadonlyArray<UserWhereInput>;
  readonly OR?: ReadonlyArray<UserWhereInput>;
  readonly NOT?: ReadonlyArray<UserWhereInput>;
}

export interface VoiceDataWhereInput {
  readonly id?: string;
  readonly id_not?: string;
  readonly id_in?: ReadonlyArray<string>;
  readonly id_not_in?: ReadonlyArray<string>;
  readonly id_lt?: string;
  readonly id_lte?: string;
  readonly id_gt?: string;
  readonly id_gte?: string;
  readonly id_contains?: string;
  readonly id_not_contains?: string;
  readonly id_starts_with?: string;
  readonly id_not_starts_with?: string;
  readonly id_ends_with?: string;
  readonly id_not_ends_with?: string;
  readonly fileUrl?: string;
  readonly fileUrl_not?: string;
  readonly fileUrl_in?: ReadonlyArray<string>;
  readonly fileUrl_not_in?: ReadonlyArray<string>;
  readonly fileUrl_lt?: string;
  readonly fileUrl_lte?: string;
  readonly fileUrl_gt?: string;
  readonly fileUrl_gte?: string;
  readonly fileUrl_contains?: string;
  readonly fileUrl_not_contains?: string;
  readonly fileUrl_starts_with?: string;
  readonly fileUrl_not_starts_with?: string;
  readonly fileUrl_ends_with?: string;
  readonly fileUrl_not_ends_with?: string;
  readonly work?: WorkWhereInput;
  readonly createdAt?: any;
  readonly createdAt_not?: any;
  readonly createdAt_in?: ReadonlyArray<any>;
  readonly createdAt_not_in?: ReadonlyArray<any>;
  readonly createdAt_lt?: any;
  readonly createdAt_lte?: any;
  readonly createdAt_gt?: any;
  readonly createdAt_gte?: any;
  readonly updatedAt?: any;
  readonly updatedAt_not?: any;
  readonly updatedAt_in?: ReadonlyArray<any>;
  readonly updatedAt_not_in?: ReadonlyArray<any>;
  readonly updatedAt_lt?: any;
  readonly updatedAt_lte?: any;
  readonly updatedAt_gt?: any;
  readonly updatedAt_gte?: any;
  readonly AND?: ReadonlyArray<VoiceDataWhereInput>;
  readonly OR?: ReadonlyArray<VoiceDataWhereInput>;
  readonly NOT?: ReadonlyArray<VoiceDataWhereInput>;
}

export interface WorkWhereInput {
  readonly id?: string;
  readonly id_not?: string;
  readonly id_in?: ReadonlyArray<string>;
  readonly id_not_in?: ReadonlyArray<string>;
  readonly id_lt?: string;
  readonly id_lte?: string;
  readonly id_gt?: string;
  readonly id_gte?: string;
  readonly id_contains?: string;
  readonly id_not_contains?: string;
  readonly id_starts_with?: string;
  readonly id_not_starts_with?: string;
  readonly id_ends_with?: string;
  readonly id_not_ends_with?: string;
  readonly name?: string;
  readonly name_not?: string;
  readonly name_in?: ReadonlyArray<string>;
  readonly name_not_in?: ReadonlyArray<string>;
  readonly name_lt?: string;
  readonly name_lte?: string;
  readonly name_gt?: string;
  readonly name_gte?: string;
  readonly name_contains?: string;
  readonly name_not_contains?: string;
  readonly name_starts_with?: string;
  readonly name_not_starts_with?: string;
  readonly name_ends_with?: string;
  readonly name_not_ends_with?: string;
  readonly description?: string;
  readonly description_not?: string;
  readonly description_in?: ReadonlyArray<string>;
  readonly description_not_in?: ReadonlyArray<string>;
  readonly description_lt?: string;
  readonly description_lte?: string;
  readonly description_gt?: string;
  readonly description_gte?: string;
  readonly description_contains?: string;
  readonly description_not_contains?: string;
  readonly description_starts_with?: string;
  readonly description_not_starts_with?: string;
  readonly description_ends_with?: string;
  readonly description_not_ends_with?: string;
  readonly visibility?: boolean;
  readonly visibility_not?: boolean;
  readonly views?: number;
  readonly views_not?: number;
  readonly views_in?: ReadonlyArray<number>;
  readonly views_not_in?: ReadonlyArray<number>;
  readonly views_lt?: number;
  readonly views_lte?: number;
  readonly views_gt?: number;
  readonly views_gte?: number;
  readonly usage?: number;
  readonly usage_not?: number;
  readonly usage_in?: ReadonlyArray<number>;
  readonly usage_not_in?: ReadonlyArray<number>;
  readonly usage_lt?: number;
  readonly usage_lte?: number;
  readonly usage_gt?: number;
  readonly usage_gte?: number;
  readonly imageUrl?: string;
  readonly imageUrl_not?: string;
  readonly imageUrl_in?: ReadonlyArray<string>;
  readonly imageUrl_not_in?: ReadonlyArray<string>;
  readonly imageUrl_lt?: string;
  readonly imageUrl_lte?: string;
  readonly imageUrl_gt?: string;
  readonly imageUrl_gte?: string;
  readonly imageUrl_contains?: string;
  readonly imageUrl_not_contains?: string;
  readonly imageUrl_starts_with?: string;
  readonly imageUrl_not_starts_with?: string;
  readonly imageUrl_ends_with?: string;
  readonly imageUrl_not_ends_with?: string;
  readonly user?: UserWhereInput;
  readonly category?: CategoryWhereInput;
  readonly imageDatas_every?: ImageDataWhereInput;
  readonly imageDatas_some?: ImageDataWhereInput;
  readonly imageDatas_none?: ImageDataWhereInput;
  readonly voiceDatas_every?: VoiceDataWhereInput;
  readonly voiceDatas_some?: VoiceDataWhereInput;
  readonly voiceDatas_none?: VoiceDataWhereInput;
  readonly likedBy_every?: UserWhereInput;
  readonly likedBy_some?: UserWhereInput;
  readonly likedBy_none?: UserWhereInput;
  readonly favouritedBy_every?: UserWhereInput;
  readonly favouritedBy_some?: UserWhereInput;
  readonly favouritedBy_none?: UserWhereInput;
  readonly reports_every?: ReportWhereInput;
  readonly reports_some?: ReportWhereInput;
  readonly reports_none?: ReportWhereInput;
  readonly comments_every?: CommentWhereInput;
  readonly comments_some?: CommentWhereInput;
  readonly comments_none?: CommentWhereInput;
  readonly createdAt?: any;
  readonly createdAt_not?: any;
  readonly createdAt_in?: ReadonlyArray<any>;
  readonly createdAt_not_in?: ReadonlyArray<any>;
  readonly createdAt_lt?: any;
  readonly createdAt_lte?: any;
  readonly createdAt_gt?: any;
  readonly createdAt_gte?: any;
  readonly updatedAt?: any;
  readonly updatedAt_not?: any;
  readonly updatedAt_in?: ReadonlyArray<any>;
  readonly updatedAt_not_in?: ReadonlyArray<any>;
  readonly updatedAt_lt?: any;
  readonly updatedAt_lte?: any;
  readonly updatedAt_gt?: any;
  readonly updatedAt_gte?: any;
  readonly AND?: ReadonlyArray<WorkWhereInput>;
  readonly OR?: ReadonlyArray<WorkWhereInput>;
  readonly NOT?: ReadonlyArray<WorkWhereInput>;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
