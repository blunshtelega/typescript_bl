export class User {
  username: string
  avatarUrl: string

  constructor (username: string, avatarUrl: string) {
    this.username = username;
    this.avatarUrl = avatarUrl;
  }
}
