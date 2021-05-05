import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dataAgencias } from '../data/agencias';
import { Agencia } from '../interfaces/agencia.interface';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  public userIdentity = new BehaviorSubject<any>({});
  constructor() { 
    this.userIdentity.next(this.getData());
  }

  get dateAgencia() {
    return this.userIdentity.asObservable();
  }

  getData(): Agencia[] {
    if (localStorage.getItem('agencias')) {
      const data = JSON.parse(localStorage.getItem('agencias'));
      return data;
    } else {      
      const data: Agencia[] = dataAgencias;
      this.setLocalStorage('agencias', data);
      return data;
    }
  }

  setLocalStorage(key: string, data: Agencia[]) {
    localStorage.setItem(key, JSON.stringify(data))
  }
}
