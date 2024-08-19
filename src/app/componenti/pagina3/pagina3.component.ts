import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../servizi/cards.service';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pagina3.component.html',
  styleUrl: './pagina3.component.css'
})
export class Pagina3Component implements OnInit {

CardsGatti:any
  constructor(private service:CardsService){}
  ngOnInit(): void {
   this.service.getCardsGatti().subscribe(
    data => this.CardsGatti = data,
    err => console.error('Error loading cards:', err)
  );
  }

}
