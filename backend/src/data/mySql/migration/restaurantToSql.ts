import { IdGenerator } from "../../../services/IdGenerator";
import { RestaurantSql } from "../../../models/restaurantType";

const generateId = new IdGenerator();


export const restaurantToSql: RestaurantSql[]  = [
  {
    id: generateId.generate(),
    name: "Habibs",
    logo_url: "https://marfinite.com.br/wp-content/uploads/2016/04/logo-habibs.png",
    category: "Árabe",
    description: "Habib's é uma rede de restaurantes de lanches.",
    delivery_time: 30,
    shipping: 3,
    address: "Rua das Margaridas, 110 - Jardim das Flores"   
  },{
    id: generateId.generate(),
    name: "Tadashii",
    logo_url: "https://www.primeiramesa.com.br/storage/restaurant_logo_effa9c15407128337068b60da3fbdf09.jpeg",
    category: "Asiática",
    description: "Habib's é uma rede de restaurantes de lanches.",
    delivery_time: 50,
    shipping: 10,
    address: "Travessa Reginaldo Pereira, 130 - Ibitinga"   
  },{
    id: generateId.generate(),
    name: "McDonald's",
    logo_url: "https://designportugal.net/wp-content/uploads/2016/04/m-mcdonalds.jpg",
    category: "Hamburger",
    description: "McDonald's Corporation é a maior cadeia mundial de restaurantes",
    delivery_time: 25,
    shipping: 15,
    address: "Avenida dos Papagaios, 1350 - Sta. Efigênias"   
  },{
    id: generateId.generate(),
    name: "SanRemo",
    logo_url: "https://media-cdn.tripadvisor.com/media/photo-s/08/8e/e3/34/sanremo-restaurante-italiano.jpg",
    category: "Italiana",
    description: "Melhores massas italianas",
    delivery_time: 30,
    shipping: 12,
    address: "Rua das Margaridas, 110 - Jardim das Flores"   
  },{
    id: generateId.generate(),
    name: "Boteco do Galego",
    logo_url:"https://www.designi.com.br/images/preview/11530359.jpg" ,
    category: "Bebidas",
    description: "Venha tomar pinga conosco",
    delivery_time: 20,
    shipping: 8,
    address: "Rua das Moriçoca, 92 - Na Esquina"   
  },{
    id: generateId.generate(),
    name: "Emiliano's",
    logo_url:"https://media-cdn.tripadvisor.com/media/photo-s/0d/93/06/6e/our-logo.jpg" ,
    category: "Mexicana",
    description: "Arriba Abajo Al Centro Adentro",
    delivery_time: 40,
    shipping: 14,
    address: "Rua treta, 92 - Lugar Nenhum"   
  },{
    id: generateId.generate(),
    name: "Mill Amores",
    logo_url:"https://media-cdn.tripadvisor.com/media/photo-s/19/69/47/97/nuestro-nuevo-logo.jpg" ,
    category: "Mexicana",
    description: "Te quiero",
    delivery_time: 45,
    shipping: 10,
    address: "Rua Formosa, 92 - Algum Lugar"   
  },{
    id: generateId.generate(),
    name: "Viva Mexico",
    logo_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpfzmzpsx0nmh2iQoWdKq32vHBOoDvwQ8ITo1xMNSRFiTgHleZEyKwBwivrZ6tXAeV0k&usqp=CAU" ,
    category: "Mexicana",
    description: "Frete mais barato",
    delivery_time: 50,
    shipping: 8,
    address: "Rua Formosa, 92 - Algum Lugar"   
  },{
    id: generateId.generate(),
    name: "Bob's",
    logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCy8A7AQ1rqYcCmiKJTzGgzFptyIkhDvUbqxFI6MbdIA&s",
    category: "Hamburger",
    description: "Mais barato que o concorrente",
    delivery_time: 20,
    shipping: 10,
    address: "Avenida do Boi, 150 - Dona Efigênias"   
  },{
    id: generateId.generate(),
    name: "Bendita Comida",
    logo_url: "https://i.pinimg.com/originals/cf/dc/35/cfdc35f516f249f7f52cfa61123ebe37.jpg",
    category: "Almoço",
    description: "De tudo um pouco",
    delivery_time: 40,
    shipping: 10,
    address: "Rua Leonacio, 23 - Perto de Você"   
  }
]
