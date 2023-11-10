import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from '../../core/constants/categorias';
import { Categoria } from '../../core/interfaces/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  productos = [];
  categoria: Categoria | undefined;
  
  constructor(
    private activateRout : ActivatedRoute
  ) { 
    activateRout.params.subscribe(params => {
      this.categoria = CATEGORIAS.find(categoria => categoria.nombre === params ["nombre"])
    
    })
  }

  ngOnInit() {
  }

  

}
