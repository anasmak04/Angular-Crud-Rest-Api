import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyInterface } from '../models/my-interface';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpclient:HttpClient) {

   }  

   getData(){
   return this.httpclient.get<MyInterface>("http://localhost:3000/commandes");
   }
}
