import { async, TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';
import { AlertService } from '../services/alert.service';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AdminComponent } from '../home/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from '../home/student/student.component';
describe('AlertComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AlertComponent, HomeComponent, LoginComponent, RegisterComponent, AdminComponent, StudentComponent],
            imports: [
                AppRoutingModule,
                FormsModule
            ],
            providers: [
                AlertService
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AlertComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=alert.component.spec.js.map