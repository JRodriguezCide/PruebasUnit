import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}
  users = [
    {
      id: '1',
      name: 'Pepito Perez',
      credito: '10000',
      deudas: '5000',
    },
    {
      id: '2',
      name: 'Pedro Pascal',
      credito: '0',
      deudas: '10000',
    },
    {
      id: '3',
      name: 'Juanito Alimaña',
      credito: '20000',
      deudas: '50000',
    },
  ];
  getUserInfo(userId: string) {
    console.log('En la funcion: ', userId);
    if (userId != '') {
      console.log('entre a la funcion');
      return this.users.find((user) => user.id == userId);
    }
    return null;
  }
}
