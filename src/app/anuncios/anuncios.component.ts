import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../anuncios.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Anuncio } from '../anuncios';
@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})






export class AnunciosComponent {
  Anuncios: Anuncio[] = [];
  isEditing: boolean = false;
  formGroupAnuncio: FormGroup;
  myDrop: any;

  constructor(
    private anunciosService: AnunciosService,
    private formBuilder: FormBuilder
  ) {
    this.formGroupAnuncio = this.formBuilder.group({
      id: [''],
      title: [''],
      description: [''],
      price: [''],
      date: [''],
      status: [''],

    });
  }

  ngOnInit(): void {
    this.loadAnuncios();
  }

  loadAnuncios() {
    this.anunciosService.getAnuncios().subscribe({
      next: (data) => (this.Anuncios = data),
    });
  }

  save() {
    if (this.isEditing) {
      this.anunciosService.edit(this.formGroupAnuncio.value).subscribe({
        next: () => {
          this.loadAnuncios();
          this.formGroupAnuncio.reset();
          this.isEditing = false;
        },
      });
    } else {
      this.anunciosService.save(this.formGroupAnuncio.value).subscribe({
        next: (data) => {
          this.Anuncios.push(data);
          this.formGroupAnuncio.reset();
        },
      });
    }
  }

  edit(anuncio: Anuncio) {
    this.formGroupAnuncio.setValue(anuncio);
    this.isEditing = true;
  }

  delete(anuncio: Anuncio) {
    this.anunciosService.delete(anuncio).subscribe({
      next: () => this.loadAnuncios(),
    });
  }

  clean() {
    this.formGroupAnuncio.reset();
    this.isEditing = false;
  }
}
