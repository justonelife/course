import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostListComponent } from './post-list.component';
import { Category } from 'src/app/models/category.model';

describe('PostListComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PostListComponent],
            imports: [HttpClientTestingModule]
        })
    })

    it('should create', () => {
        let fixture = TestBed.createComponent(PostListComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('calcTotalPage should work right', () => {
        let fixture = TestBed.createComponent(PostListComponent);
        let component = fixture.componentInstance;

        let fakeCategories: Category[] = [
            {
                _id: '1', 
                name: 'parent-1',
                parentId: null,
                url: 'parent-1',
                thumbnail: null
            },
            {
                _id: '2', 
                name: 'parent-2',
                parentId: null,
                url: 'parent-2',
                thumbnail: null
            },
            {
                _id: '3', 
                name: 'child-1',
                parentId: '1',
                url: 'child-1',
                thumbnail: null
            }
        ];

        component.cate = fakeCategories;

        let fakeTotalPost = 30;
        component['postPerPage'] = 5;
        let expectNumberPage = 6;

        component.calcTotalPage(fakeTotalPost);
        fixture.detectChanges();
        expect(component.totalPage).toEqual(expectNumberPage);
    })

    it('extractChildCateId should work right', () => {
        let fixture = TestBed.createComponent(PostListComponent);
        let component = fixture.componentInstance;

        let fakeCategories: Category[] = [
            {
                _id: '1', 
                name: 'parent-1',
                parentId: null,
                url: 'parent-1',
                thumbnail: null
            },
            {
                _id: '2', 
                name: 'parent-2',
                parentId: null,
                url: 'parent-2',
                thumbnail: null
            },
            {
                _id: '3', 
                name: 'child-1',
                parentId: '1',
                url: 'child-1',
                thumbnail: null
            }
        ];

        component.cate = fakeCategories;

        let expectIds: string[] = ['1', '2', '3'];

        fixture.detectChanges();

        expect(component['ids']).toEqual(expectIds);
    })
});
