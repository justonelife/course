import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ProfilePasswordComponent } from './profile-password.component';

describe('ProfilePasswordComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProfilePasswordComponent],
            imports: [HttpClientTestingModule],
            providers: [FormBuilder]
        })
    });

    it('should create', () => {
        let fixture = TestBed.createComponent(ProfilePasswordComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
