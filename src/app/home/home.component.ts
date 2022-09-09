import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  List: any = [];
  mycommande: any = {
    id: '',
    name: '',
    poids: '',
    prix: '',
  };
  constructor(private MyVar: CommandeService) {}

  ngOnInit(): void {
    this.getCommande();
  }

  getCommande() {
    this.MyVar.getData().subscribe((result) => {
      this.List = result;
    });
  }

  RemoveCommande(id: number) {
    this.MyVar.deleteData(id).subscribe(() => {
      this.List = this.List.filter((data: { id: number }) => data.id !== id);
    });
  }

  AddCommande() {
    this.MyVar.AddData(this.mycommande).subscribe((data) => {
      this.List = [data, ...this.List];
    });
  }
}
