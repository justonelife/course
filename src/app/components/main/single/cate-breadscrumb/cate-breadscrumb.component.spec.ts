import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { CateBreadscrumbComponent } from './cate-breadscrumb.component';

describe('CateBreadscrumbComponent', () => {
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
                        params: of({categoryURL: 'python'})
                    }
                }
            ]
        })
    });

    it('should create', () => {
        let fixture = TestBed.createComponent(CateBreadscrumbComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
