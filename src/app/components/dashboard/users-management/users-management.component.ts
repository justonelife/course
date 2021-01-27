import { User } from './../../../models/user.model';
import { DataService } from '../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { faSort, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-users-management',
    templateUrl: './users-management.component.html',
    styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent implements OnInit {
    faTrash = faTrash;
    faSort = faSort;

    public users: User[] = [];
    public userSArray: User[];
    public errorMessage;
    public config: any;
    public user: User = {
        username: null,
        _id: null,
        roleId: null,
        email: null
    };
    public searchText: string;
    public key: string = 'id';
    public reverse: boolean = false;
    public isDeleted: boolean = false;
    public isLoaded: boolean = false;
    public isAdmin: boolean = false;
    public count: number = 0;
    public itemPerPage: number = 5;
    public totalPage: number;

    constructor(private _dataService: DataService) { }

    ngOnInit(): void {
        this._dataService.getUsers().subscribe((res) => {
            this.users = res;
        });

        this._dataService.getCountUsers().subscribe((res) => {
            this.calTotalPage(res);
        });

        this._dataService.pagingUsers(this.itemPerPage, 0).subscribe(
            (res) => {
                this.users = res;
                this.isLoaded = true;
            },
            (err) => (this.errorMessage = err)
        );
    }

    calTotalPage = (value: number) => {
        let totalUser: number = value;
        this.totalPage = Math.ceil(totalUser / this.itemPerPage);
    };

    pageChange = (val: number) => {
        this.users = undefined;
        this._dataService
            .pagingUsers(this.itemPerPage, (val - 1) * this.itemPerPage)
            .subscribe((res) => (this.users = res));
    };

    getItem = (item) => {
        this.user = item;
    };

    onDelete = (user: User) => {
        this.isDeleted = true;
        this._dataService.deleteUsers(user).subscribe((_) => {
            this.users = this.users.filter((item) => item._id !== user._id);
        });
    };

    sort = (key) => {
        this.key = key;
        this.reverse = !this.reverse;
    };
}
