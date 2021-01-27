export class Role {
    _id: string;
    name: string;
    description?: string;
    
    constructor(Role: Role) {
        this._id = Role._id;
        this.name = Role.name;
        if (Role.description) this.description = Role.description;
    }
}