import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from '../shared/userService/user-service.service';
import { ProductServiceService } from '../shared/productService/product-service.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.scss'],
})
export class CreditoComponent {
  constructor(
    private fb: FormBuilder,
    private userServiceService: UserServiceService,
    private productServiceService: ProductServiceService
  ) {}

  showProductList = false;
  productList: any[] = [];
  banList = ['12345'];
  validform: boolean = false;
  serviceOption?: string;
  productName?: string;
  showId: boolean = true;
  user?: {
    id: string;
    name: string;
    credito: string;
    deudas: string;
  };
  mainForm: FormGroup = this.fb.group({
    id: [null],
    serviceOption: [null],
    reason: [null],
  });

  async validateDocument() {
    const userID = this.mainForm.value.id;
    if (this.banList.includes(this.mainForm.value.id) && this.showId) {
      this.showAlert('Usuario Baneado!');
    } else {
      this.setUserByDocument(userID);
      if (this.user) {
        this.mainForm.controls['id'].disable();
        this.productList = await this.productServiceService.getProductsData();
        return;
      }
    }
  }

  setUserByDocument(userID: string) {
    const response = this.userServiceService.getUserInfo(userID);
    if (response) {
      this.user = response;
    } else {
      this.showAlert('Usuario no encontrado');
    }
  }

  showAlert(msg: string) {
    alert(msg);
  }

  onSubmit() {
    this.showAlert('enviado');
  }
}
