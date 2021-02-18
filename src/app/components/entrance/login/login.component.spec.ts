import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [RouterTestingModule],
            providers: [{
                provide: ActivatedRoute,
                useValue: {
                    // params: of({id: 'admin'})
                    url: 'login/admin'
                }
            }]
        })
    })

    it('should create', () => {
        let fixture = TestBed.createComponent(LoginComponent);
        let component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
});
