import {
    faEdit,
    faPlusCircle,
    faSort,
    faTrash,
    faSearch
} from '@fortawesome/free-solid-svg-icons';
import { Category } from './../../../models/category.model';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-categories-management',
    templateUrl: './categories-management.component.html',
    styleUrls: ['./categories-management.component.scss'],
})
export class CategoriesManagementComponent implements OnInit {
    faSort = faSort;
    faEdit = faEdit;
    faTrash = faTrash;
    faPlusCircle = faPlusCircle;
    faSearch = faSearch;

    public categories: Category[] = [];
    public defaultCategory: Category = {
        _id: null,
        name: null,
        parentId: null,
        url: null,
    };
    public category: Category;
    public categoryArray: Category[];
    public errrorMessage;
    public isDelete: boolean = false;
    public isEdit: boolean = false;
    public isAdd: boolean = false;
    public searchText: string;
    public key: string;
    public reverse: boolean = false;
    public delSuccess: boolean = true;
    public addSuccess: boolean = false;
    public editSuccess: boolean = false;
    public isLoaded: boolean = false;
    public count: number = 0;
    public itemPerPage: number = 15;
    public totalPage: number;

    constructor(private _dataService: DataService) { }

    ngOnInit(): void {
        this.category = JSON.parse(JSON.stringify(this.defaultCategory));

        // this._dataService.getAllCateName().subscribe((data) => {
        //   console.log(data);
        // });

        this._dataService.getCategories().subscribe(
            (data: Category[]) => {
                this.categoryArray = data;
                this.isLoaded = true;
            },
            (err) => (this.errrorMessage = err)
        );

        this._dataService.getCountCategories().subscribe((res) => {
            this.calTotalPage(res);
        });

        this._dataService.pagingCategories(this.itemPerPage, 0).subscribe(
            (res) => {
                this.categories = res;
                this.isLoaded = true;
            },
            (err) => (this.errrorMessage = err)
        );
    }

    calTotalPage = (value: number) => {
        let totalCate: number = value;
        this.totalPage = Math.ceil(totalCate / this.itemPerPage);
    };

    pageChange = (val: number) => {
        this.categories = undefined;
        this._dataService
            .pagingCategories(this.itemPerPage, (val - 1) * this.itemPerPage)
            .subscribe((res) => {
                this.categories = res;
            });
    };

    onModalDelete = (item) => {
        this.isDelete = true;
        this.category = item;
    };

    onModalEdit = (item) => {
        this.isEdit = true;
        this.category = item;
    };

    onModalAdd = () => {
        this.isAdd = true;
    };

    onAdd = (item) => {
        if (this.categories.some((data) => data.name === item.name)) {
            this.addSuccess = false;
        } else {
            this.addSuccess = true;
            this.category.url = this.formatURL();
            this.categoryArray.push({ ...item })
            this._dataService.addCategories(this.category).subscribe((res) => {
                this.categories.push({ ...item });

                let temp = this.categories.filter((value) => value.name === res.name);
                if (temp.length > 0) {
                    temp[0]._id = res._id;
                }
            });
        }
    };

    formatURL = () => {
        let reg1 = /\s*\-+\s*/;
        let reg2 = /\s+/;
        let temp = this.category.name.replace(reg1, '-');
        let url = temp.split(reg2).join('-').toLocaleLowerCase();
        return url;
    };

    onUpdate = (value) => {
        if (this.categories.some(item => item.name === value)) {
            this.editSuccess = false;
        } else {
            this.editSuccess = true;
            this._dataService.updateCategories(this.category).subscribe((_) => {
                this.category.name = value;
            });
        }
    };

    onDelete = (category: Category) => {
        if (this.categories.some((item) => item.parentId === category._id)) {
            this.delSuccess = false;
        } else {
            let index = this.categoryArray.indexOf(category);
            this.categoryArray.splice(index, 1);
            this.delSuccess = true;
            this._dataService.deleteCategories(category).subscribe((_) => {
                this.categories = this.categories.filter(
                    (item) => item._id !== category._id
                );
            });
        }
    };

    sort = (key) => {
        this.key = key;
        this.reverse = !this.reverse;
    };
}
