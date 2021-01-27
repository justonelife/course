import { Location } from '@angular/common';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let location: Location;
    let router: Router;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [AppComponent],
        }).compileComponents();
        location = TestBed.inject(Location);
        router = TestBed.inject(Router);
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'freetuts'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('freetuts');
    });

    // it('should render title', () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.nativeElement;
    //     expect(compiled.querySelector('.content span').textContent).toContain(
    //         'freetuts app is running!'
    //     );
    // });

    it('should navigate to login router', fakeAsync(() => {
        tick(1000);
        router.navigate(['/entrance/login']).then(() => {
            expect(location.path()).toBe('/entrance/login');
        });
    }));
});
