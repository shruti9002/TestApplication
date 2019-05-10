import { async, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { StudentComponent } from './student/student.component';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import { fakeBackendProvider } from '../helpers/fake-backend';
import { JwtInterceptor } from '../helpers/jwt.interceptor';
describe('HomeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, RegisterComponent, LoginComponent, AdminComponent, StudentComponent],
            imports: [
                HttpClientModule,
                AppRoutingModule,
                FormsModule
            ],
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
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        component.currentUser = { id: 1, username: "", password: "", firstName: "", lastName: "", userType: "" };
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=home.component.spec.js.map