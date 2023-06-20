import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoComponent } from './credito.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CreditoRoutingModule } from './credito-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { UserServiceService } from '../shared/userService/user-service.service';
import {
  MOCK_USER,
  PRODUCT_SERVICE_FAIL_MOCK,
  USER_SERVICE_FAIL_MOCK,
  USER_SERVICE_MOCK,
} from './mock/credito.component.mock';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductServiceService } from '../shared/productService/product-service.service';

describe('CreditoComponent', () => {
  let component: CreditoComponent;
  let fixture: ComponentFixture<CreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditoComponent],
      imports: [
        CommonModule,
        MatCardModule,
        CreditoRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSelectModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: UserServiceService, useValue: USER_SERVICE_MOCK },
        { provide: ProductServiceService, useValue: USER_SERVICE_MOCK },
      ],
    });
    fixture = TestBed.createComponent(CreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
