import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeadComponent } from './head.component';

describe('HeadComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeadComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule
            ]
        })
    });

    it('should create', () => {
        let fixture = TestBed.createComponent(HeadComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
