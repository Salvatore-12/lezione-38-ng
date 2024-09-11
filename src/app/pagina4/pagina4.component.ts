import { Component } from '@angular/core';
import { SharedModule } from '../shared.module';
import { CardsService } from '../servizi/cards.service';

@Component({
  selector: 'app-pagina4',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pagina4.component.html',
  styleUrl: './pagina4.component.css'
})
export class Pagina4Component {
  CardsUccelli:any
  constructor(private service:CardsService){}
  ngOnInit(): void {
   this.service.getCardsUccelli().subscribe(
    data => this.CardsUccelli = data,
    err => console.error('Error loading cards:', err)
  );
  }
}
