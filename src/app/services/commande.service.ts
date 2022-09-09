import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyInterface } from '../models/my-interface';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  API = "http://localhost:3000/commandes";

  constructor(private httpclient:HttpClient) {

   }  

   getData(){
   return this.httpclient.get<MyInterface>(this.API);
   }

   deleteData(id : number){
    return this.httpclient.delete(`${this.API}/${id}`)
   }
}
