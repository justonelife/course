import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Category } from 'src/app/models/category.model';

import { CateBreadscrumbComponent } from './cate-breadscrumb.component';

describe('CateBreadscrumbComponent', () => {
    let location: Location;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CateBreadscrumbComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({categoryURL: 'child-1'})
                    }
                }
            ]
        });

        location = TestBed.inject(Location);
    });

    it('should create', () => {
        let fixture = TestBed.createComponent(CateBreadscrumbComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('findBread should work right', () => {
        let fixture = TestBed.createComponent(CateBreadscrumbComponent);
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

        let expectBreadcrumb: {name: string, url: string}[] = [
            {name: 'parent-1', url: 'parent-1'},
            {name: 'child-1', url: 'child-1'}
        ];

        fixture.detectChanges();

        component.findBread(fakeCategories);


        expect(component.breadscrumb).toEqual(expectBreadcrumb);
    })

    it('variableReset should work right', () => {
        let fixture = TestBed.createComponent(CateBreadscrumbComponent);
        let component = fixture.componentInstance;

        let fakeBreadscrumb: {name: string, url: string}[] = [
            {name: 'parent-1', url: 'parent-1'},
            {name: 'child-1', url: 'child-1'}
        ];

        component.breadscrumb = fakeBreadscrumb;

        component.variableReset();

        fixture.detectChanges();

        expect(component.breadscrumb).toEqual([]);
    })

    it('onStepClick should work right', () => {
        let fixture = TestBed.createComponent(CateBreadscrumbComponent);
        let component = fixture.componentInstance;

        component.breadscrumb = [
            {name: 'parent-1', url: 'parent-1'},
            {name: 'child-1', url: 'child-1'}
        ];


        let expectBreadscrumb: {name: string, url: string}[] = [
            {name: 'parent-1', url: 'parent-1'}
        ];

        let fakeURL = 'parent-1';
        let fakeIndex = 0;

        component.onStepClick(fakeURL, fakeIndex);

        fixture.detectChanges();
        
        expect(component.breadscrumb).toEqual(expectBreadscrumb);
    })
});
