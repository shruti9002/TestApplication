import { async, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from '../home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { StudentComponent } from '../student/student.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';
import { fakeBackendProvider } from 'src/app/helpers/fake-backend';
import { JwtInterceptor } from 'src/app/helpers/jwt.interceptor';
describe('AdminComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AdminComponent, HomeComponent, LoginComponent, RegisterComponent, StudentComponent],
            providers: [
                UserService,
                AuthenticationService,
                AlertService,
                fakeBackendProvider,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: JwtInterceptor,
                    multi: true
                },
            ],
            imports: [
                HttpClientModule,
                AppRoutingModule,
                FormsModule
            ],
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it('should use user from userService', function () {
        var userService = fixture.debugElement.injector.get(UserService);
        userService.getAll().subscribe(function (Users) {
            fixture.detectChanges();
            expect(Users).toEqual(component.users);
        });
    });
});
//# sourceMappingURL=admin.component.spec.js.map