import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../home/admin/admin.component';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from '../home/student/student.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent , HomeComponent , LoginComponent ,AdminComponent , StudentComponent],
      imports: [FormsModule,AppRoutingModule ,HttpClientModule],
      providers: [
        AlertService,
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
