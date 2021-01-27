import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import {
    async,
    ComponentFixture,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Location } from '@angular/common';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let compile;
    let fixture: ComponentFixture<DashboardComponent>;
    let router: Router;
    let location: Location;
    let debugElement: DebugElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [DashboardComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        compile = fixture.nativeElement;
        debugElement = fixture.debugElement;
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        router.initialNavigation();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should sidebar toggle', () => {
        // prepare
        component.sidebarVisible;
        // action
        component.onToggleSidebar();
        // expect
        expect(component.sidebarVisible).toBe(false);
    });

    it('should navigate to home page right', () => {
        router.navigate(['/']).then(() => {
            expect(location.path()).toBe('/');
        });
        expect(component).toBeTruthy();
    });

    it('should navigate to entrance page right', () => {
        router.navigate(['/entrance']).then(() => {
            expect(location.path()).toBe('/entrance/login');
        });
        expect(component).toBeTruthy();
    });

    it('should #onToggleSidebar be called', () => {
        spyOn(component, 'onToggleSidebar');
        const div = compile.querySelector('#collapse-sidebar');
        div.click();
        expect(component.onToggleSidebar).toHaveBeenCalled();
    });

    it('should #onBackHome be called', () => {
        spyOn(component, 'onBackHome');
        const btn = compile.querySelector('#toHomeBtn');
        btn.click();
        expect(component.onBackHome).toHaveBeenCalled();
    });

    it('should #onLogout be called', () => {
        spyOn(component, 'onLogout');
        const btn = compile.querySelector('#lgOutBtn');
        btn.click();
        expect(component.onLogout).toHaveBeenCalled();
    });
});
