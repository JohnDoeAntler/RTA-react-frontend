/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Comment
// ====================================================

export interface Comment_insert_comments_returning {
  readonly __typename: "comments";
  readonly id: any;
}

export interface Comment_insert_comments {
  readonly __typename: "comments_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  readonly returning: ReadonlyArray<Comment_insert_comments_returning>;
}

export interface Comment {
  /**
   * insert data into the table: "comments"
   */
  readonly insert_comments: Comment_insert_comments;
}

export interface CommentVariables {
  readonly workId: any;
  readonly content: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIsFavourited
// ====================================================

export interface GetIsFavourited_works_by_pk_favourites {
  readonly __typename: "favourites";
  readonly userId: string;
}

export interface GetIsFavourited_works_by_pk {
  readonly __typename: "works";
  /**
   * An array relationship
   */
  readonly favourites: ReadonlyArray<GetIsFavourited_works_by_pk_favourites>;
}

export interface GetIsFavourited {
  /**
   * fetch data from the table: "works" using primary key columns
   */
  readonly works_by_pk: GetIsFavourited_works_by_pk;
}

export interface GetIsFavouritedVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Favourite
// ====================================================

export interface Favourite_insert_favourites {
  readonly __typename: "favourites_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  readonly affected_rows: number;
}

export interface Favourite {
  /**
   * insert data into the table: "favourites"
   */
  readonly insert_favourites: Favourite_insert_favourites;
}

export interface FavouriteVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Unfavourite
// ====================================================

export interface Unfavourite_delete_favourites {
  readonly __typename: "favourites_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  readonly affected_rows: number;
}

export interface Unfavourite {
  /**
   * delete data from the table: "favourites"
   */
  readonly delete_favourites: Unfavourite_delete_favourites;
}

export interface UnfavouriteVariables {
  readonly userId: string;
  readonly workId: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIsFollowed
// ====================================================

export interface GetIsFollowed_followings {
  readonly __typename: "followings";
  readonly followingId: string;
}

export interface GetIsFollowed {
  /**
   * fetch data from the table: "followings"
   */
  readonly followings: ReadonlyArray<GetIsFollowed_followings>;
}

export interface GetIsFollowedVariables {
  readonly followerId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Follow
// ====================================================

export interface Follow_insert_followings {
  readonly __typename: "followings_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  readonly affected_rows: number;
}

export interface Follow {
  /**
   * insert data into the table: "followings"
   */
  readonly insert_followings: Follow_insert_followings;
}

export interface FollowVariables {
  readonly followingId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnFollow
// ====================================================

export interface UnFollow_delete_followings {
  readonly __typename: "followings_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  readonly affected_rows: number;
}

export interface UnFollow {
  /**
   * delete data from the table: "followings"
   */
  readonly delete_followings: UnFollow_delete_followings;
}

export interface UnFollowVariables {
  readonly followerId: string;
  readonly followingId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIsLiked
// ====================================================

export interface GetIsLiked_works_by_pk_likes {
  readonly __typename: "likes";
  readonly userId: string;
}

export interface GetIsLiked_works_by_pk {
  readonly __typename: "works";
  /**
   * An array relationship
   */
  readonly likes: ReadonlyArray<GetIsLiked_works_by_pk_likes>;
}

export interface GetIsLiked {
  /**
   * fetch data from the table: "works" using primary key columns
   */
  readonly works_by_pk: GetIsLiked_works_by_pk;
}

export interface GetIsLikedVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Like
// ====================================================

export interface Like_insert_likes {
  readonly __typename: "likes_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  readonly affected_rows: number;
}

export interface Like {
  /**
   * insert data into the table: "likes"
   */
  readonly insert_likes: Like_insert_likes;
}

export interface LikeVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Unlike
// ====================================================

export interface Unlike_delete_likes {
  readonly __typename: "likes_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  readonly affected_rows: number;
}

export interface Unlike {
  /**
   * delete data from the table: "likes"
   */
  readonly delete_likes: Unlike_delete_likes;
}

export interface UnlikeVariables {
  readonly userId: string;
  readonly workId: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Report
// ====================================================

export interface Report_insert_reports_returning {
  readonly __typename: "reports";
  readonly id: any;
}

export interface Report_insert_reports {
  readonly __typename: "reports_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  readonly returning: ReadonlyArray<Report_insert_reports_returning>;
}

export interface Report {
  /**
   * insert data into the table: "reports"
   */
  readonly insert_reports: Report_insert_reports;
}

export interface ReportVariables {
  readonly workId: any;
  readonly reason: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFavourites
// ====================================================

export interface GetFavourites_favourites_work_likes_aggregate_aggregate {
  readonly __typename: "likes_aggregate_fields";
  readonly count: number;
}

export interface GetFavourites_favourites_work_likes_aggregate {
  readonly __typename: "likes_aggregate";
  readonly aggregate: GetFavourites_favourites_work_likes_aggregate_aggregate;
}

export interface GetFavourites_favourites_work_favourites_aggregate_aggregate {
  readonly __typename: "favourites_aggregate_fields";
  readonly count: number;
}

export interface GetFavourites_favourites_work_favourites_aggregate {
  readonly __typename: "favourites_aggregate";
  readonly aggregate: GetFavourites_favourites_work_favourites_aggregate_aggregate;
}

export interface GetFavourites_favourites_work {
  readonly __typename: "works";
  readonly id: any;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  /**
   * An aggregated array relationship
   */
  readonly likes_aggregate: GetFavourites_favourites_work_likes_aggregate;
  /**
   * An aggregated array relationship
   */
  readonly favourites_aggregate: GetFavourites_favourites_work_favourites_aggregate;
  readonly views: number;
  readonly usage: number;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetFavourites_favourites {
  readonly __typename: "favourites";
  /**
   * An object relationship
   */
  readonly work: GetFavourites_favourites_work;
}

export interface GetFavourites {
  /**
   * fetch data from the table: "favourites"
   */
  readonly favourites: ReadonlyArray<GetFavourites_favourites>;
}

export interface GetFavouritesVariables {
  readonly id: string;
  readonly filter: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFollowings
// ====================================================

export interface GetFollowings_users_followers_aggregate_aggregate {
  readonly __typename: "followings_aggregate_fields";
  readonly count: number;
}

export interface GetFollowings_users_followers_aggregate {
  readonly __typename: "followings_aggregate";
  readonly aggregate: GetFollowings_users_followers_aggregate_aggregate;
}

export interface GetFollowings_users_followings_aggregate_aggregate {
  readonly __typename: "followings_aggregate_fields";
  readonly count: number;
}

export interface GetFollowings_users_followings_aggregate {
  readonly __typename: "followings_aggregate";
  readonly aggregate: GetFollowings_users_followings_aggregate_aggregate;
}

export interface GetFollowings_users_works_aggregate_aggregate {
  readonly __typename: "works_aggregate_fields";
  readonly count: number;
}

export interface GetFollowings_users_works_aggregate {
  readonly __typename: "works_aggregate";
  readonly aggregate: GetFollowings_users_works_aggregate_aggregate;
}

export interface GetFollowings_users {
  readonly __typename: "users";
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  /**
   * An aggregated array relationship
   */
  readonly followers_aggregate: GetFollowings_users_followers_aggregate;
  /**
   * An aggregated array relationship
   */
  readonly followings_aggregate: GetFollowings_users_followings_aggregate;
  /**
   * An aggregated array relationship
   */
  readonly works_aggregate: GetFollowings_users_works_aggregate;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetFollowings {
  /**
   * fetch data from the table: "users"
   */
  readonly users: ReadonlyArray<GetFollowings_users>;
}

export interface GetFollowingsVariables {
  readonly id: string;
  readonly filter: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetNotifications
// ====================================================

export interface GetNotifications_notifications {
  readonly __typename: "notifications";
  readonly id: any;
  readonly content: string;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetNotifications {
  /**
   * fetch data from the table: "notifications"
   */
  readonly notifications: ReadonlyArray<GetNotifications_notifications>;
}

export interface GetNotificationsVariables {
  readonly id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProgresses
// ====================================================

export interface GetProgresses_progresses_work_likes_aggregate_aggregate {
  readonly __typename: "likes_aggregate_fields";
  readonly count: number;
}

export interface GetProgresses_progresses_work_likes_aggregate {
  readonly __typename: "likes_aggregate";
  readonly aggregate: GetProgresses_progresses_work_likes_aggregate_aggregate;
}

export interface GetProgresses_progresses_work_favourites_aggregate_aggregate {
  readonly __typename: "favourites_aggregate_fields";
  readonly count: number;
}

export interface GetProgresses_progresses_work_favourites_aggregate {
  readonly __typename: "favourites_aggregate";
  readonly aggregate: GetProgresses_progresses_work_favourites_aggregate_aggregate;
}

export interface GetProgresses_progresses_work {
  readonly __typename: "works";
  readonly id: any;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  /**
   * An aggregated array relationship
   */
  readonly likes_aggregate: GetProgresses_progresses_work_likes_aggregate;
  /**
   * An aggregated array relationship
   */
  readonly favourites_aggregate: GetProgresses_progresses_work_favourites_aggregate;
  readonly views: number;
  readonly usage: number;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetProgresses_progresses {
  readonly __typename: "progresses";
  readonly progress: string;
  readonly drivingVideoUrl: string;
  /**
   * An object relationship
   */
  readonly work: GetProgresses_progresses_work;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetProgresses {
  /**
   * fetch data from the table: "progresses"
   */
  readonly progresses: ReadonlyArray<GetProgresses_progresses>;
}

export interface GetProgressesVariables {
  readonly id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ProgressNew
// ====================================================

export interface ProgressNew_insert_progresses_returning {
  readonly __typename: "progresses";
  readonly id: any;
}

export interface ProgressNew_insert_progresses {
  readonly __typename: "progresses_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  readonly returning: ReadonlyArray<ProgressNew_insert_progresses_returning>;
}

export interface ProgressNew {
  /**
   * insert data into the table: "progresses"
   */
  readonly insert_progresses: ProgressNew_insert_progresses;
}

export interface ProgressNewVariables {
  readonly drivingVideoUrl: string;
  readonly workId: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_users_followers_aggregate_aggregate {
  readonly __typename: "followings_aggregate_fields";
  readonly count: number;
}

export interface GetUsers_users_followers_aggregate {
  readonly __typename: "followings_aggregate";
  readonly aggregate: GetUsers_users_followers_aggregate_aggregate;
}

export interface GetUsers_users_followings_aggregate_aggregate {
  readonly __typename: "followings_aggregate_fields";
  readonly count: number;
}

export interface GetUsers_users_followings_aggregate {
  readonly __typename: "followings_aggregate";
  readonly aggregate: GetUsers_users_followings_aggregate_aggregate;
}

export interface GetUsers_users_works_aggregate_aggregate {
  readonly __typename: "works_aggregate_fields";
  readonly count: number;
}

export interface GetUsers_users_works_aggregate {
  readonly __typename: "works_aggregate";
  readonly aggregate: GetUsers_users_works_aggregate_aggregate;
}

export interface GetUsers_users {
  readonly __typename: "users";
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  /**
   * An aggregated array relationship
   */
  readonly followers_aggregate: GetUsers_users_followers_aggregate;
  /**
   * An aggregated array relationship
   */
  readonly followings_aggregate: GetUsers_users_followings_aggregate;
  /**
   * An aggregated array relationship
   */
  readonly works_aggregate: GetUsers_users_works_aggregate;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetUsers {
  /**
   * fetch data from the table: "users"
   */
  readonly users: ReadonlyArray<GetUsers_users>;
}

export interface GetUsersVariables {
  readonly filter?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserDetail
// ====================================================

export interface GetUserDetail_users_by_pk_followers_aggregate_aggregate {
  readonly __typename: "followings_aggregate_fields";
  readonly count: number;
}

export interface GetUserDetail_users_by_pk_followers_aggregate {
  readonly __typename: "followings_aggregate";
  readonly aggregate: GetUserDetail_users_by_pk_followers_aggregate_aggregate;
}

export interface GetUserDetail_users_by_pk_followings_aggregate_aggregate {
  readonly __typename: "followings_aggregate_fields";
  readonly count: number;
}

export interface GetUserDetail_users_by_pk_followings_aggregate {
  readonly __typename: "followings_aggregate";
  readonly aggregate: GetUserDetail_users_by_pk_followings_aggregate_aggregate;
}

export interface GetUserDetail_users_by_pk_works {
  readonly __typename: "works";
  readonly id: any;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly views: number;
  readonly usage: number;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetUserDetail_users_by_pk {
  readonly __typename: "users";
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly created_at: any;
  readonly updated_at: any;
  /**
   * An aggregated array relationship
   */
  readonly followers_aggregate: GetUserDetail_users_by_pk_followers_aggregate;
  /**
   * An aggregated array relationship
   */
  readonly followings_aggregate: GetUserDetail_users_by_pk_followings_aggregate;
  /**
   * An array relationship
   */
  readonly works: ReadonlyArray<GetUserDetail_users_by_pk_works>;
}

export interface GetUserDetail {
  /**
   * fetch data from the table: "users" using primary key columns
   */
  readonly users_by_pk: GetUserDetail_users_by_pk;
}

export interface GetUserDetailVariables {
  readonly id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserEdit
// ====================================================

export interface GetUserEdit_users_by_pk {
  readonly __typename: "users";
  readonly name: string;
  readonly imageUrl: string;
}

export interface GetUserEdit {
  /**
   * fetch data from the table: "users" using primary key columns
   */
  readonly users_by_pk: GetUserEdit_users_by_pk;
}

export interface GetUserEditVariables {
  readonly id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UserEdit
// ====================================================

export interface UserEdit_update_users_returning {
  readonly __typename: "users";
  readonly id: string;
}

export interface UserEdit_update_users {
  readonly __typename: "users_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  readonly returning: ReadonlyArray<UserEdit_update_users_returning>;
}

export interface UserEdit {
  /**
   * update data of the table: "users"
   */
  readonly update_users: UserEdit_update_users;
}

export interface UserEditVariables {
  readonly id: string;
  readonly name?: string;
  readonly imageUrl?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWorks
// ====================================================

export interface GetWorks_works_likes_aggregate_aggregate {
  readonly __typename: "likes_aggregate_fields";
  readonly count: number;
}

export interface GetWorks_works_likes_aggregate {
  readonly __typename: "likes_aggregate";
  readonly aggregate: GetWorks_works_likes_aggregate_aggregate;
}

export interface GetWorks_works_favourites_aggregate_aggregate {
  readonly __typename: "favourites_aggregate_fields";
  readonly count: number;
}

export interface GetWorks_works_favourites_aggregate {
  readonly __typename: "favourites_aggregate";
  readonly aggregate: GetWorks_works_favourites_aggregate_aggregate;
}

export interface GetWorks_works {
  readonly __typename: "works";
  readonly id: any;
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  /**
   * An aggregated array relationship
   */
  readonly likes_aggregate: GetWorks_works_likes_aggregate;
  /**
   * An aggregated array relationship
   */
  readonly favourites_aggregate: GetWorks_works_favourites_aggregate;
  readonly views: number;
  readonly usage: number;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetWorks {
  /**
   * fetch data from the table: "works"
   */
  readonly works: ReadonlyArray<GetWorks_works>;
}

export interface GetWorksVariables {
  readonly filter?: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWork
// ====================================================

export interface GetWork_works_by_pk_likes_aggregate_aggregate {
  readonly __typename: "likes_aggregate_fields";
  readonly count: number;
}

export interface GetWork_works_by_pk_likes_aggregate {
  readonly __typename: "likes_aggregate";
  readonly aggregate: GetWork_works_by_pk_likes_aggregate_aggregate;
}

export interface GetWork_works_by_pk_favourites_aggregate_aggregate {
  readonly __typename: "favourites_aggregate_fields";
  readonly count: number;
}

export interface GetWork_works_by_pk_favourites_aggregate {
  readonly __typename: "favourites_aggregate";
  readonly aggregate: GetWork_works_by_pk_favourites_aggregate_aggregate;
}

export interface GetWork_works_by_pk_comments_user {
  readonly __typename: "users";
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetWork_works_by_pk_comments {
  readonly __typename: "comments";
  readonly id: any;
  readonly content: string;
  /**
   * An object relationship
   */
  readonly user: GetWork_works_by_pk_comments_user;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetWork_works_by_pk_user {
  readonly __typename: "users";
  readonly id: string;
  readonly name: string;
  readonly imageUrl: string;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetWork_works_by_pk {
  readonly __typename: "works";
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly visibility: boolean;
  /**
   * An aggregated array relationship
   */
  readonly likes_aggregate: GetWork_works_by_pk_likes_aggregate;
  /**
   * An aggregated array relationship
   */
  readonly favourites_aggregate: GetWork_works_by_pk_favourites_aggregate;
  readonly views: number;
  readonly usage: number;
  readonly created_at: any;
  readonly updated_at: any;
  /**
   * An array relationship
   */
  readonly comments: ReadonlyArray<GetWork_works_by_pk_comments>;
  /**
   * An object relationship
   */
  readonly user: GetWork_works_by_pk_user;
}

export interface GetWork {
  /**
   * fetch data from the table: "works" using primary key columns
   */
  readonly works_by_pk: GetWork_works_by_pk;
}

export interface GetWorkVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: WorkNew
// ====================================================

export interface WorkNew_insert_works_returning {
  readonly __typename: "works";
  readonly id: any;
}

export interface WorkNew_insert_works {
  readonly __typename: "works_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  readonly returning: ReadonlyArray<WorkNew_insert_works_returning>;
}

export interface WorkNew {
  /**
   * insert data into the table: "works"
   */
  readonly insert_works: WorkNew_insert_works;
}

export interface WorkNewVariables {
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly visibility: boolean;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetWorkEdit
// ====================================================

export interface GetWorkEdit_works_by_pk {
  readonly __typename: "works";
  readonly name: string;
  readonly description: string;
  readonly imageUrl: string;
  readonly visibility: boolean;
}

export interface GetWorkEdit {
  /**
   * fetch data from the table: "works" using primary key columns
   */
  readonly works_by_pk: GetWorkEdit_works_by_pk;
}

export interface GetWorkEditVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: WorkEdit
// ====================================================

export interface WorkEdit_update_works_returning {
  readonly __typename: "works";
  readonly id: any;
}

export interface WorkEdit_update_works {
  readonly __typename: "works_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  readonly returning: ReadonlyArray<WorkEdit_update_works_returning>;
}

export interface WorkEdit {
  /**
   * update data of the table: "works"
   */
  readonly update_works: WorkEdit_update_works;
}

export interface WorkEditVariables {
  readonly id: any;
  readonly name?: string;
  readonly description?: string;
  readonly imageUrl?: string;
  readonly visibility?: boolean;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetImageDatas
// ====================================================

export interface GetImageDatas_image_datas {
  readonly __typename: "image_datas";
  readonly id: any;
  readonly fileUrl: string;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetImageDatas {
  /**
   * fetch data from the table: "image_datas"
   */
  readonly image_datas: ReadonlyArray<GetImageDatas_image_datas>;
}

export interface GetImageDatasVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ImageDataDelete
// ====================================================

export interface ImageDataDelete_delete_image_datas {
  readonly __typename: "image_datas_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  readonly affected_rows: number;
}

export interface ImageDataDelete {
  /**
   * delete data from the table: "image_datas"
   */
  readonly delete_image_datas: ImageDataDelete_delete_image_datas;
}

export interface ImageDataDeleteVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAudioDatas
// ====================================================

export interface GetAudioDatas_audio_datas {
  readonly __typename: "audio_datas";
  readonly id: any;
  readonly fileUrl: string;
  readonly created_at: any;
  readonly updated_at: any;
}

export interface GetAudioDatas {
  /**
   * fetch data from the table: "audio_datas"
   */
  readonly audio_datas: ReadonlyArray<GetAudioDatas_audio_datas>;
}

export interface GetAudioDatasVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AudioDataDelete
// ====================================================

export interface AudioDataDelete_delete_audio_datas {
  readonly __typename: "audio_datas_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  readonly affected_rows: number;
}

export interface AudioDataDelete {
  /**
   * delete data from the table: "audio_datas"
   */
  readonly delete_audio_datas: AudioDataDelete_delete_audio_datas;
}

export interface AudioDataDeleteVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: IncViews
// ====================================================

export interface IncViews_update_works {
  readonly __typename: "works_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  readonly affected_rows: number;
}

export interface IncViews {
  /**
   * update data of the table: "works"
   */
  readonly update_works: IncViews_update_works;
}

export interface IncViewsVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: IncUsage
// ====================================================

export interface IncUsage_update_works {
  readonly __typename: "works_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  readonly affected_rows: number;
}

export interface IncUsage {
  /**
   * update data of the table: "works"
   */
  readonly update_works: IncUsage_update_works;
}

export interface IncUsageVariables {
  readonly id: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
