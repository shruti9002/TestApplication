import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { AdminComponent } from '../home/admin/admin.component';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { AlertService } from '../services/alert.service';
import { StudentComponent } from '../home/student/student.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ,HomeComponent, RegisterComponent , AdminComponent , StudentComponent],
      imports: [FormsModule,AppRoutingModule , HttpClientModule],
      providers: [
        AuthenticationService,
        AlertService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
