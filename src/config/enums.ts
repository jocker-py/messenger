export enum Path {
  PROFILE = "/profile",
  DIALOGS = "/dialogs",
  MUSIC = "/music",
  SETTINGS = "/settings",
  NEWS = "/news",
  USERS = "/users",
  USER_PROFILE = "/profile/:userId?",
}

export enum ActionType {
  addPost = "ADD-POST",
  updateNewPost = "UPDATE-NEW-POST",
  updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT",
  sendMessage = "SEND-MESSAGE",
  setUsers = "SET-USERS",
  follow = "FOLLOW",
  unfollow = "UNFOLLOW",
  setTotalUsersCount = "SET-TOTAL-USERS-COUNT",
  setCurrentPage = "SET-CURRENT-PAGE",
  toggleFetching = "TOGGLE-FETCHING",
  setUserProfile = "SET-USER-PROFILE",
  setAuthData = "SET-AUTH-DATA",
}

export enum EndPoint {
  root = "https://social-network.samuraijs.com/api/1.0/",
  users = "users/",
  profile = "profile/",
  authMe = "auth/me",
  follow = "follow/",
}