import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ProfileSettingComponent } from './profile-setting.component';

describe('ProfileSettingComponent', () => {
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileSettingComponent],
            imports: [HttpClientTestingModule],
            providers: [FormBuilder]
        })
    });

    it('should create', () => {
        let fixture = TestBed.createComponent(ProfileSettingComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
