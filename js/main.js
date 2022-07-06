var app = new Vue({
  el: "#app",
  data: {
    appliances:[
      {
                id: 1,
                img: 'image/tv1.jpg',
                name: 'Televisor 1',
                categorie: 'TV',
                desc: `TV De 60 pulgas marca samsumg`,
                descmodal: `TV De 60 pulgas marca samsumg `,
                price: 8500000,
                idm: 1,
                modal_id: 'pd1',
                modalw: '#pd1',
                order_amount: 0,
      },
      {
        id: 2,
        img: 'image/tv2.jpg',
        name: 'Televisor 2',
        categorie: 'TV',
        desc: `Tv de 80 pulgadas marca kalley`,
        descmodal: ` Tv de 80 pulgadas marca kalley`,
        price: 3300000,
        idm: 2,
        modal_id: 'pd2',
        modalw: '#pd2',
        order_amount: 1,
      },
       {
                id: 3,
                img: 'image/freidora1.jpg',
                name: 'freidora1',
                categorie: 'freidora',
                desc: `FREIDORA DE 4.5 LITROS MARCA ACER`,
                descmodal: `FREIDORA DE 4.5 LITROS MARCA ACER PREPARA MAS RAPIDO TU COMIDA`,
                price: 400000,
                idm: 3,
                modal_id: 'pd3',
                modalw: '#pd3',
                order_amount: 1,
      },
      {
        id: 4,
        img: 'image/freidora2.jpg',
        name: 'SAMSUNG',
        categorie: 'freidora',
        desc: `FREIDORA DE 4.5 LITROS MARCA CHALLENGER`,
        descmodal: `FREIDORA DE 4.5 LITROS MARCA CHALLENGER PREPARA MAS RAPIDO TU COMIDA`,
        price: 360000,
        idm: 4,
        modal_id: 'pd4',
        modalw: '#pd4',
        order_amount: 1,
      },
      {
        id: 5,
        img: 'image/nevera2.jpg',
        name: 'NEVERA1',
        categorie: 'nevera',
        desc: `Nevera + congelador de gran capacidad`,
        descmodal: `Nevera + congelador de gran capacidad`,
        price: 4300000,
        idm: 5,
        modal_id: 'pd5',
        modalw: '#pd5',
        order_amount: 1,
},
{
id: 6,
img: 'image/nevera1.jpg',
name: 'NEVERA 2',
categorie: 'nevera',
desc: `Nevera + congelador de gran capacidad`,
descmodal: `Nevera + congelador de gran capacidad`,
price: 5300000,
idm: 6,
modal_id: 'pd6',
modalw: '#pd6',
order_amount: 1,
},

{
  id: 7,
  img: 'image/lavadora1.jpg',
  name: 'LAVADORA 1',
  categorie: 'lavadora',
  desc: `Lavadora de gran capacita 50 kl marca lg`,
  descmodal: `Lavadora de gran capacita 50 kl marca lg`,
  price: 4999999,
  idm: 7,
  modal_id: 'pd7',
  modalw: '#pd7',
  order_amount: 1,
},
{
id: 8,
img: 'image/lavadora2.jpg',
name: 'LAVADORA 2',
categorie: 'lavadora',
desc: `Lavadora de gran capacita 50 kl marca lg`,
descmodal: `Lavadora de gran capacita 50 kl marca lg`,
price: 6500000,
idm: 8,
modal_id: 'pd1',
modalw: '#pd1',
order_amount: 1,
},  

    ],

    products: [],
  

    cart: [],
    totalCart: 0,
    //variables below
    fcartN: '',
    categorie: "Categorie",
    
    
  },
  mounted(){
    this.searchFor();
  },
  methods: {
    minusbtn(item){
      if (item.order_amount > 0) {
          item.order_amount -= 1;
      } 
  },
  plusbtn(item){
      if (item.order_amount < 20) {
          item.order_amount += 1;
      } 
  },
  closemodal(item){
      item.order_amount = 1;
  },
  cartClick(){
      if (this.cart.length > 0) {
          const total = this.cart.map(element => element.price * element.qty).reduce((a, b) => a + b, 0);
          this.totalCart = new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'COP', minimumFractionDigits: 0}).format(total);
      }
  },
  addToCart(item){
      if(item.order_amount > 0 && item.order_amount < 20) {
          
          this.cart.push({
              img: item.img,
              prod: item.name,
              qty: item.order_amount,
              price: item.price,
          });

         
          this.cart = this.cart.reduce((acc, cv) => {
              const elementExists = acc.find(e => e.prod === cv.prod);
              if (elementExists) {
              return acc.map((e) => {
                  if (e.prod === cv.prod) {
                  return {
                      ...e,
                      qty: e.qty + cv.qty
                  }
                  }
                  return e;
              });
              }
              return [...acc, cv];
          }, []);

          this.fcartN = this.cart.length;

          alert(`Se agregaron ${item.order_amount} ${item.name} al carrito`);
          item.order_amount = 1;

      }else{
          alert('Debe agregar mínimo un producto');
      }
  },


  searchFor(){

    if(this.categorie == "all" || this.categorie == "Categorie"){
      
      this.products = this.appliances;
    }
    else{
      this.products = this.appliances.filter(item => item.categorie == this.categorie);
     
    }

    
  },
  }
});


