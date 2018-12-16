// data shapes from the server

export interface User {
  name: string;
  displayId: string;
  imageUrl: string;
}

export interface StreamInfo {
  title: string;
  officialAccounts: User[];
  sourceUrl: string;
}

export interface Tweet {
  user: User;
  content: string; // TODO take care hashtag in client
  time: Date;
}
