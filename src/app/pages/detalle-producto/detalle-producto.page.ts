import { Component, OnInit } from '@angular/core';
import { Producto } from '../../core/interfaces/producto';
import { ActivatedRoute } from '@angular/router';
import { CATEGORIAS } from '../../core/constants/categorias';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage {

  constructor(
    private activatedRoute: ActivatedRoute,
    public cartService: CartService
    ) { 
    activatedRoute.params.subscribe(params => {
      this.buscarProducto(params['nombre']);
    })
  }
cantidad= 1;
  buscarProducto(nombreProductoABuscar:string) {
    
    for(let i = 0; i < CATEGORIAS.length; i++){
      const categoriaActual = CATEGORIAS[i];
      for(let j = 0; j < categoriaActual.productos.length; j++){
        const productoActual = categoriaActual.productos[j];
        if(productoActual.nombre === nombreProductoABuscar) { /*para saber si algo es igual a algo*/
        this.producto = productoActual

        }
       // console.log(productoActual.nombre, nombreProductoABuscar, productoActual.nombre === nombreProductoABuscar)
      }

    }
  }
  producto:Producto = {
    imagen:'jsjsjs',
    nombre:'hola',
    descripcion:'chau',
    precio: 5000
  }
  
}
