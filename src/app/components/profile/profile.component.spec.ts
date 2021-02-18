import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileComponent],
            imports: [RouterTestingModule]
        })
    })

    it('should create', () => {
        let fixture = TestBed.createComponent(ProfileComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
