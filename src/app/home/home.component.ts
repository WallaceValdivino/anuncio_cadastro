import { Component, OnInit } from '@angular/core';
import { Anuncio } from '../anuncios';
import { AnunciosService } from '../anuncios.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  anuncios: Anuncio[] = [];

  constructor(private anunciosService: AnunciosService){}


  ngOnInit(): void {
    this.loadAnuncios();
  }

  loadAnuncios() {
    this.anunciosService.getAnuncios().subscribe({
      next: (data) => (this.anuncios = data),
    });
  }
}


