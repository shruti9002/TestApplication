import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';
import { AlertService } from '../services/alert.service';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AdminComponent } from '../home/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from '../home/student/student.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent , HomeComponent , LoginComponent , RegisterComponent ,AdminComponent ,StudentComponent],
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

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
