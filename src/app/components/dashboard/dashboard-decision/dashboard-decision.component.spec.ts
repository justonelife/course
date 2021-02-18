import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardDecisionComponent } from './dashboard-decision.component';

describe('DashboardDecisionComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardDecisionComponent],
            imports: [RouterTestingModule]
        })
    })

    it('should create', () => {
        let fixture = TestBed.createComponent(DashboardDecisionComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
