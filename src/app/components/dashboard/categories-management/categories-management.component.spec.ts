import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from './../../../services/data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesManagementComponent } from './categories-management.component';

describe('CategoriesManagementComponent', () => {
    let component: CategoriesManagementComponent;
    let fixture: ComponentFixture<CategoriesManagementComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            declarations: [CategoriesManagementComponent],
            providers: [DataService],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoriesManagementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
