export class User {
  _id: string;
  username: string;
  email: string;
  roleId?: string;

  constructor(User) {
    this._id = User._id;
    this.username = User.username;
    this.email = User.email;
    if (User._kmd.roles) this.roleId = User._kmd.roles[0].roleId;
  }
}
