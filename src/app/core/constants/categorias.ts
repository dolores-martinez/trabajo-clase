import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS:Categoria[]=[
    {
      nombre:"Hamburguesas",
      id:1,
      fotoUrl:"https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg",
      productos: [{
        nombre: 'BLUE CHEESE',
        precio: 2500,
        descripcion: 'Medallon de carne, 120g. Salsa cheese, doble cheedar y bacon',
        imagen: 'https://cdnvos.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/hoppiness_1590082734.jpeg'
    },
    {
        nombre: 'CLASSIC',
        precio: 3400,
        descripcion: 'Medallon de carne, 120g. Queso suizo, lechuga, bacon, tomate y mayonesa',
        imagen: 'https://assets.unileversolutions.com/recipes-v2/210995.jpg'
    }]
},
    {
      nombre:"Pizzas",
      id:2,
      fotoUrl:"https://images.hola.com/imagenes/cocina/recetas/20220208204252/pizza-pepperoni-mozzarella/1-48-890/pepperoni-pizza-abob-t.jpg",
      productos: [{
        nombre: 'Margarita',
        precio: 2700,
        descripcion: 'Queso, tomate cherry y albahaca',
        imagen: 'https://www.annarecetasfaciles.com/files/pizza-margarita-1-scaled.jpg'
    },
    {
        nombre: 'Fugazzeta',
        precio: 3400,
        descripcion: 'Queso y cebolla caramelizada',
        imagen: 'https://hacermasapizza.com/img/pizza-argentina-417.jpg'
    }]
    },
  
    {
      nombre:"Postres",
      id:3,
      fotoUrl:"https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/2023-03/postres-perfectos%C2%A9iStock.jpg",
      productos: [{
        nombre: 'Brownie',
        precio: 2000,
        descripcion: '180 gramos Chocolate con almentras',
        imagen: 'https://www.nattahometaste.com/wp-content/uploads/2020/10/brownie-casero-super-chocolatoso-1.jpg'
    },
    {
        nombre: 'Rogel',
        precio: 3100,
        descripcion: 'Una porcion de 120g.',
        imagen: 'https://www.cronica.com.ar/__export/1647188740762/sites/cronica/img/2022/03/13/rogel_final.png'
    }]
    },
    {
      nombre:"Bebidas",
      id:4,
      fotoUrl:"https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/im_landscape_100/public/2022-05/bebidas-refrescantes-sin-alcohol%C2%A9iStock.jpg.webp?itok=474pDi5b",
      productos: [{
        nombre: 'Campari',
        precio: 3900,
        descripcion: 'Jugo de naranja con campari',
        imagen: 'https://lofficinadelgusto.com/wp-content/uploads/2021/11/IMG_9354-1300x731.jpg'
    },
    {
        nombre: 'Piña colada',
        precio: 3400,
        descripcion: 'Jugo de piña con ron',
        imagen: 'https://www.simplyrecipes.com/thmb/zY68crK2iBgGYNRQ9FqTakwRn_Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Pina-Colada-LEAD-4-d0d465dd3c26411ea3623c7ed2d82709.jpg'
    }]
    }
  ]
