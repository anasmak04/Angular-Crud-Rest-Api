import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  List:any= [];
  constructor(private MyVar:CommandeService) { 
 
  }

  ngOnInit(): void {
    this.getCommande();
  }

  getCommande(){
    this.MyVar.getData().subscribe((result) => {
      this.List = result;
    })
    
    
  }


}
