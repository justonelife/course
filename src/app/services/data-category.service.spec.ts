import { TestBed } from "@angular/core/testing";
import { DataCategoryService } from "./data-category.service"
import { DataPostService } from "./data-post.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Category } from "../models/category.model";
import { Observable, of } from 'rxjs';


describe('DataCategoryService', () => {

    //instance of this service
    let dataCategory: DataCategoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                DataPostService
            ]
        });

        dataCategory = TestBed.get(DataCategoryService);
    });

    it('should be created', () => {
        expect(dataCategory).toBeTruthy();
    });

    it('getAllCategory should return all data', () => {
        const sourceData = [
            {
                _id: '1',
                name: 'lap trinh',
                parentId: null
            },
            {
                _id: '2',
                name: 'python',
                parentId: '1'
            }
        ];
        const expectData = [
            {
                _id: '1',
                name: 'lap trinh',
                parentId: null
            }, {
                _id: '2',
                name: 'python',
                parentId: '1'
            }
        ];

        spyOn(dataCategory, 'getAllCategory').and.returnValue(of(sourceData));

        dataCategory.getAllCategory().subscribe(res => {
            expect(res).toEqual(expectData);
        });
    });


    it('getSingleCategory should return right data', () => {
        const sourceData = [
            {
                _id: '1',
                name: 'lap trinh',
                parentId: null
            },
            {
                _id: '2',
                name: 'python',
                parentId: '1'
            }
        ];
        const queryId = '1';
        const expectData = {
            _id: '1',
            name: 'lap trinh',
            parentId: null
        };

        spyOn(dataCategory, 'getSingleCategory').and.callFake((queryId): Observable<Category> => {
            let result: Category = sourceData.filter(val => val._id === queryId)[0];
            return of(result);
        });

        dataCategory.getSingleCategory(queryId).subscribe(res => {
            expect(res).toEqual(expectData);
        })
    });

    it('getSingleCategoryByName should return right data', () => {
        const sourceData = [
            {
                _id: '1',
                name: 'lap trinh',
                parentId: null
            },
            {
                _id: '2',
                name: 'python',
                parentId: '1'
            }
        ];
        const queryName = 'python';
        const expectData = {
            _id: '2',
            name: 'python',
            parentId: '1'
        };
        

        spyOn(dataCategory, 'getSingleCategoryByName').and.callFake((queryName): Observable<Category> => {
            let result:Category = sourceData.filter(val => val.name === queryName)[0];
            return of(result);
        })

        dataCategory.getSingleCategoryByName(queryName).subscribe(res => {
            expect(res).toEqual(expectData);
        })
    });

    it('getCategoryByParent should return right data', () => {
        const sourceData = [
            {
                _id: '1',
                name: 'lap trinh',
                parentId: null
            },
            {
                _id: '2',
                name: 'python',
                parentId: '1'
            },
            {
                _id: '3',
                name: 'js',
                parentId: '1'
            },
            {
                _id: '4',
                name: 'ngoai ngu',
                parentId: null
            },
            {
                _id: '5',
                name: 'tieng anh',
                parentId: '4'
            }
        ];

        const queryParentId = '1';
        const expectData = [
            {
                _id: '2',
                name: 'python',
                parentId: '1'
            },
            {
                _id: '3',
                name: 'js',
                parentId: '1'
            }
        ];

        spyOn(dataCategory, 'getCategoryByParent').and.callFake((queryParentId): Observable<Category[]> => {
            let result: Category[] = sourceData.filter(val => val.parentId === queryParentId);
            return of(result);
        });

        dataCategory.getCategoryByParent(queryParentId).subscribe(res => expect(res).toEqual(expectData));
    })
})