import {
    FormControl,
    FormGroup,
    Validators,
    AbstractControl,
} from '@angular/forms';
import { Post } from './../../../../models/post.model';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data.service';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
    selector: 'app-posts-create',
    templateUrl: './posts-create.component.html',
    styleUrls: ['./posts-create.component.scss'],
})
export class PostsCreateComponent implements OnInit, OnChanges {
    public categories: Category[] = [];
    public posts: Post[] = [];
    public post: Post;
    public defaultPosts: Post = {
        _id: null,
        title: null,
        content: null,
        categoryId: null,
        prevId: null,
        thumbnail: null,
        url: null
    };
    public isLoaded: boolean = false;
    public isPosted: boolean = false;

    editor: Editor;
    toolbar: Toolbar = [
        ['bold', 'italic'],
        ['underline', 'strike'],
        ['code', 'blockquote'],
        ['ordered_list', 'bullet_list'],
        [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
        ['link', 'image'],
        ['text_color', 'background_color'],
        ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];
    public form: any;
    public content: string

    constructor(private _dataService: DataService) { }

    ngOnInit(): void {
        this.post = JSON.parse(JSON.stringify(this.defaultPosts));

        this._dataService.getCategories().subscribe((data: Category[]) => {
            this.isLoaded = true;
            this.categories = data;
        });

        this.form = new FormGroup({
            editorContent: new FormControl('', Validators.required),
        });

        this.editor = new Editor();
    }

    ngOnChanges(changes: SimpleChanges): void {

    }

    get doc(): AbstractControl {
        return this.form.get('editorContent');
    }

    onReset = () => {
        this.post.content = ''
    }

    onPost = () => {
        this.isPosted = true;
        this._dataService.createPosts(this.post).subscribe(res => { });
    }

}
