import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleComponent } from './single.component';
import { of } from 'rxjs';


describe('SingleComponent', () => {
    let component: SingleComponent;
    let fixture: ComponentFixture<SingleComponent>;

    const activatedRouteStub = {
        paramMap: {
            subscribe() {
                return of();
            }
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [SingleComponent],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteStub }
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SingleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
