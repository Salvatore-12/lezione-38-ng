import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { CardsService } from '../../servizi/cards.service';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})
export class Pagina2Component implements OnInit {
 cards:any;
 constructor(private service:CardsService){}
 
  ngOnInit(): void {
    this.service.getCardsCani().subscribe({
      next: data => this.cards = data,
      error: err => console.error('Error loading cards:', err)
    });
  }

}
