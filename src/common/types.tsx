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
