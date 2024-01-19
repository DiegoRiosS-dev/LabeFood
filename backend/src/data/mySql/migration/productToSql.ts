import { restaurantToSql } from "./restaurantToSql";
import { IdGenerator } from "../../../services/IdGenerator";
import { ProductSql } from "../../../models/productType";

const generatorId = new IdGenerator();

const bobsId = restaurantToSql[8].id;
const macDonId = restaurantToSql[2].id;
const habibsId = restaurantToSql[0].id;
const tadashiId = restaurantToSql[1].id;
const sanId = restaurantToSql[3].id;
const botecoId = restaurantToSql[4].id;
const emiId = restaurantToSql[5].id;
const milId = restaurantToSql[6].id;
const vivaId = restaurantToSql[7].id;
const benditaId = restaurantToSql[9].id;


export const productToSql: ProductSql[] = [
  {
    id: generatorId.generate(),
    name: "Pat Feldiman",
    url_img: "https://i0.wp.com/pat.feldman.com.br/wp-content/uploads/2007/02/hamburguer-caseiro.jpg?resize=800%2C540&ssl=1",
    category: "Hamburger",
    price: 21,
    fk_restaurant: bobsId
  },{
    id: generatorId.generate(),
    name: "Mega Burger",
    url_img: "https://media.istockphoto.com/id/1309352410/pt/foto/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=2048x2048&w=is&k=20&c=vOX__q55jfX2CvNxeVtm5x3K57uh49im62WtJDz7eBA=",
    category: "Hamburger",
    price: 25,
    fk_restaurant: bobsId
  },{
    id: generatorId.generate(),
    name: "Batatas ",
    url_img:"https://www.shutterstock.com/shutterstock/photos/510881971/display_1500/stock-photo-french-fries-510881971.jpg",
    category: "Outros",
    price: 15,
    fk_restaurant: macDonId
  },{
    id: generatorId.generate(),
    name: "Feijao Com Arroz",
    url_img: "https://www.unileverfoodsolutions.com.br/dam/global-ufs/mcos/SLA/calcmenu/recipes/BR-recipes/red-meats-&-red-meat-dishes/contra-fil%C3%A9-com-arroz-feij%C3%A3o-batata-frita-e-vinagrete/main-header.jpg",
    category: "Almoço",
    price: 22,
    fk_restaurant: benditaId
  },{
    id: generatorId.generate(),
    name: "Double Burger",
    url_img: "https://media.istockphoto.com/id/1219557412/pt/foto/beef-burgers-with-french-fries-beef-cutlet-cheese-sauce.jpg?s=2048x2048&w=is&k=20&c=Y22PAUrkqfvjf9YVsIdzLWABlL1A0-qFDC0Hmsvz3RM=",
    category: "Hamburger",
    price: 35,
    fk_restaurant: bobsId
  },{
    id: generatorId.generate(),
    name: "Sucos 2 lt",
    url_img: "https://cdn.deliway.com.br/blog/base/6a3/c8e/9db/sucos-diferentes.jpg",
    category: "Bebidas",
    price: 5,
    fk_restaurant:  benditaId
  },{
    id: generatorId.generate(),
    name: "Guarana 2 lt",
    url_img: "https://classic.exame.com/wp-content/uploads/2023/11/guarana.jpg?quality=70&strip=info&w=1200",
    category: "Bebidas",
    price: 8,
    fk_restaurant:  benditaId
  },{
    id: generatorId.generate(),
    name: "Coca Cola 1 lt",
    url_img: "https://sportlife.com.br/wp-content/uploads/2023/03/Refrigerante-1.jpg",
    category: "Bebidas",
    price: 8,
    fk_restaurant: macDonId
  },{
    id: generatorId.generate(),
    name: "Burrito",
    url_img: "https://media.istockphoto.com/id/1313361282/pt/foto/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=IXJ9492w0NvJfacY2lSszqyWN8GJizBtAUV9HQIdw5Y=",
    category: "Mexicana",
    price: 10,
    fk_restaurant: milId
  },{
    id: generatorId.generate(),
    name: "Chilli Com Carne",
    url_img: "https://assets.unileversolutions.com/recipes-v2/212085.jpg?im=Resize,height=372;Crop,size={932,372},gravity=Center",
    category: "Mexicana",
    price: 18,
    fk_restaurant: milId
  },{
    id: generatorId.generate(),
    name: "Tacos",
    url_img: "https://media.gazetadopovo.com.br/2023/07/25094408/mexican-tacos-with-beef-tomato-sauce-salsa-960x540.jpg",
    category: "Mexicana",
    price: 12,
    fk_restaurant: milId
  },{
    id: generatorId.generate(),
    name: "Burrito",
    url_img: "https://media.istockphoto.com/id/1313361282/pt/foto/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=IXJ9492w0NvJfacY2lSszqyWN8GJizBtAUV9HQIdw5Y=",
    category: "Mexicana",
    price: 11,
    fk_restaurant: emiId
  },{
    id: generatorId.generate(),
    name: "Chilli Com Carne",
    url_img: "https://assets.unileversolutions.com/recipes-v2/212085.jpg?im=Resize,height=372;Crop,size={932,372},gravity=Center",
    category: "Mexicana",
    price: 19,
    fk_restaurant: emiId
  },{
    id: generatorId.generate(),
    name: "Tacos",
    url_img: "https://media.gazetadopovo.com.br/2023/07/25094408/mexican-tacos-with-beef-tomato-sauce-salsa-960x540.jpg",
    category: "Mexicana",
    price: 14,
    fk_restaurant: emiId
  },{
    id: generatorId.generate(),
    name: "Burrito",
    url_img: "https://media.istockphoto.com/id/1313361282/pt/foto/mexican-rice-and-chorizo-sausage-wrap.jpg?s=612x612&w=0&k=20&c=IXJ9492w0NvJfacY2lSszqyWN8GJizBtAUV9HQIdw5Y=",
    category: "Mexicana",
    price: 9,
    fk_restaurant: vivaId
  },{
    id: generatorId.generate(),
    name: "Chilli Com Carne",
    url_img: "https://assets.unileversolutions.com/recipes-v2/212085.jpg?im=Resize,height=372;Crop,size={932,372},gravity=Center",
    category: "Mexicana",
    price: 16,
    fk_restaurant: vivaId
  },{
    id: generatorId.generate(),
    name: "Tacos",
    url_img: "https://media.gazetadopovo.com.br/2023/07/25094408/mexican-tacos-with-beef-tomato-sauce-salsa-960x540.jpg",
    category: "Mexicana",
    price: 11,
    fk_restaurant: vivaId
  },{
    id: generatorId.generate(),
    name: "100 Bolinha De Queijo",
    url_img: "https://i.panelinha.com.br/i1/228-bk-2056-bolinha-de-queijo.webp",
    category: "Outros",
    price: 70,
    fk_restaurant: macDonId
  },{
    id: generatorId.generate(),
    name: "Coxinha",
    url_img: "https://saboratual.com.br/wp-content/uploads/2023/08/Receita-Facil-de-Coxinha-de-Frango.jpg",
    category: "Outros",
    price: 4,
    fk_restaurant: macDonId
  },{
    id: generatorId.generate(),
    name: "Enroladinho De Salsicha",
    url_img: "https://xtudoreceitas.com/wp-content/uploads/Enroladinho-de-Salsicha.webp",
    category: "Outros",
    price: 3,
    fk_restaurant: macDonId
  },{
    id: generatorId.generate(),
    name: "Cuscuz Temperado",
    url_img: "https://i.ytimg.com/vi/4WSJqJNM2CY/sddefault.jpg",
    category: "Outros",
    price: 13,
    fk_restaurant:  benditaId
  },{
    id: generatorId.generate(),
    name: "Asas de Frango",
    url_img: "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2016/11/asinhas-de-frango-de-ultima-hora.jpg?fit=1200%2C675&ssl=1",
    category: "Almoço",
    price: 19,
    fk_restaurant:  benditaId
  },{
    id: generatorId.generate(),
    name: "Cuscuz Temperado",
    url_img: "https://i.ytimg.com/vi/4WSJqJNM2CY/sddefault.jpg",
    category: "Outros",
    price: 15,
    fk_restaurant: botecoId
  },{
    id: generatorId.generate(),
    name: "Asas de Frango",
    url_img: "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2016/11/asinhas-de-frango-de-ultima-hora.jpg?fit=1200%2C675&ssl=1",
    category: "Almoço",
    price: 22,
    fk_restaurant: botecoId
  },{
    id: generatorId.generate(),
    name: "Podrão",
    url_img: "https://forbes.com.br/wp-content/uploads/2018/05/2-Ezekiel-div-800x530.jpg",
    category: "Hamburger",
    price: 21,
    fk_restaurant: botecoId
  },{
    id: generatorId.generate(),
    name: "Mocoto",
    url_img: "https://br.acozinhadosquilombos.com.br/images/blog-e98bfd4403518fa4bb54e4fbc854b2ed.jpg",
    category: "Outros",
    price: 25,
    fk_restaurant: botecoId
  },{
    id: generatorId.generate(),
    name: "Lasanha",
    url_img: "https://img.elo7.com.br/product/zoom/2695B89/adesivo-parede-restaurante-lasanha-massas-massa-carne-adesivo-decorativo-parede.jpg",
    category: "Outros",
    price: 14,
    fk_restaurant:  benditaId
  },{
    id: generatorId.generate(),
    name: "Guarana Latinha",
    url_img: "https://classic.exame.com/wp-content/uploads/2023/11/guarana.jpg?quality=70&strip=info&w=1200",
    category: "Bebidas",
    price: 3,
    fk_restaurant: botecoId
  },{
    id: generatorId.generate(),
    name: "Coca Cola latinha",
    url_img: "https://sportlife.com.br/wp-content/uploads/2023/03/Refrigerante-1.jpg",
    category: "Bebidas",
    price: 5,
    fk_restaurant: botecoId
  },{
    id: generatorId.generate(),
    name: "Pepsi",
    url_img: "https://diabetes-resources-production.s3.eu-west-1.amazonaws.com/resources-s3/public/styles/original_optimized/public/2023-03/pepsi%20shutterstock%20723x407%20hypo%20treatments.jpg.webp?VersionId=51WAtX1.aUdkkkz3s.aKt844nq8NwBqh&itok=jG3Wz_D_",
    category: "Bebidas",
    price: 5,
    fk_restaurant: botecoId
  },{
    id: generatorId.generate(),
    name: "Água de Coco 500ml",
    url_img: "https://cdn.awsli.com.br/600x450/10/10245/produto/91314520/a8823c6563.jpg",
    category: "Bebidas",
    price: 4,
    fk_restaurant: botecoId
  },{
    id: generatorId.generate(),
    name: "Pinga 51 1 lt",
    url_img: "https://s3-sa-east-1.amazonaws.com/static.standout.com.br/ciamuller/products/img_CbGzkXUGFaxynwWb.jpg",
    category: "Bebidas",
    price: 27,
    fk_restaurant: botecoId
  },{
    id: generatorId.generate(),
    name: "Mousse De Chocolate",
    url_img: "https://pubimg.band.uol.com.br/files/d6d571daad711a4ad0a1.png",
    category: "Outros",
    price: 5,
    fk_restaurant:  benditaId
  },{
    id: generatorId.generate(),
    name: "Mousse De Maracuja",
    url_img: "https://static.itdg.com.br/images/1200-675/19903f5fde8b603c472469725008fd1f/shutterstock-1907121220.jpg",
    category: "Outros",
    price: 5,
    fk_restaurant:  benditaId
  },{
    id: generatorId.generate(),
    name: "Pudim",
    url_img: "https://assets.delirec.com/images/lvyDvnEgjkY8nlwyInuHXrowVDd2/recipe/926754f7-94b2-4d8e-9568-704faa89e573-PUDIN-gallery-0",
    category: "Outros",
    price: 6,
    fk_restaurant:  benditaId
  },{
    id: generatorId.generate(),
    name: "Guarana Lata",
    url_img: "https://classic.exame.com/wp-content/uploads/2023/11/guarana.jpg?quality=70&strip=info&w=1200",
    category: "Bebidas",
    price: 5,
    fk_restaurant: habibsId
  },{
    id: generatorId.generate(),
    name: "Pepsi Lata",
    url_img: "https://diabetes-resources-production.s3.eu-west-1.amazonaws.com/resources-s3/public/styles/original_optimized/public/2023-03/pepsi%20shutterstock%20723x407%20hypo%20treatments.jpg.webp?VersionId=51WAtX1.aUdkkkz3s.aKt844nq8NwBqh&itok=jG3Wz_D_",
    category: "Bebidas",
    price: 6,
    fk_restaurant: habibsId
  },{
    id: generatorId.generate(),
    name: "Coca Cola Lata",
    url_img: "https://sportlife.com.br/wp-content/uploads/2023/03/Refrigerante-1.jpg",
    category: "Bebidas",
    price: 6,
    fk_restaurant: habibsId
  },{
    id: generatorId.generate(),
    name: "Croquete",
    url_img: "https://comidinhasdochef.com/wp-content/uploads/2020/03/Croquete-de-Carne-Mo%C3%ADda.jpg",
    category: "Outros",
    price: 4,
    fk_restaurant: habibsId
  },{
    id: generatorId.generate(),
    name: "Bib'sfiha De Carne",
    url_img: "https://menu.habibs.com.br/products/image/59952/product.png?v=1698237372",
    category:  "Árabe",
    price: 4,
    fk_restaurant: habibsId
  },{
    id: generatorId.generate(),
    name: "Bib'sfiha De Carne Com Coalhada",
    url_img: "https://menu.habibs.com.br/products/image/59953/product.png?v=1698237476",
    category:  "Árabe",
    price: 5,
    fk_restaurant: habibsId
  },{
    id: generatorId.generate(),
    name: "Bib'sfiha De Espinafre Com Philadelphia",
    url_img: "https://menu.habibs.com.br/products/image/59951/product.png?v=1698237484",
    category:  "Árabe",
    price: 5,
    fk_restaurant: habibsId
  },{
    id: generatorId.generate(),
    name: "Bib'sfiha Quatro Queijos Com Philadelphia",
    url_img: "https://menu.habibs.com.br/products/image/59950/product.png?v=1698237494",
    category:  "Árabe",
    price: 6,
    fk_restaurant: habibsId
  },{
    id: generatorId.generate(),
    name: "Carne Lo Mein",
    url_img: "https://www.receitas-sem-fronteiras.com/cache/slideshow/-570.jpg/2cb6823c975ee09b0d93e071c71c86d5.jpg",
    category: "Asiática",
    price: 27,
    fk_restaurant: tadashiId
  },{
    id: generatorId.generate(),
    name: "Frango Teriyaki",
    url_img: "https://www.receitas-sem-fronteiras.com/cache/slideshow/-571.jpg/2cb6823c975ee09b0d93e071c71c86d5.jpg",
    category: "Asiática",
    price: 25,
    fk_restaurant: tadashiId
  },{
    id: generatorId.generate(),
    name: "Sopa Won Ton",
    url_img: "https://www.receitas-sem-fronteiras.com/cache/slideshow/-575.jpg/2cb6823c975ee09b0d93e071c71c86d5.jpg",
    category: "Asiática",
    price: 22,
    fk_restaurant: tadashiId
  },{
    id: generatorId.generate(),
    name: "Sushi",
    url_img: "https://www.rampinelli.com.br/uploads/receita/receita-de-onigiri-bolinho-de-arroz-japones-1637254913.jpg?class=full&h=482",
    category: "Asiática",
    price: 18,
    fk_restaurant: tadashiId
  },{
    id: generatorId.generate(),
    name: "Croquete",
    url_img: "https://comidinhasdochef.com/wp-content/uploads/2020/03/Croquete-de-Carne-Mo%C3%ADda.jpg",
    category: "Outros",
    price: 6,
    fk_restaurant: sanId
  },{
    id: generatorId.generate(),
    name: "Coca Cola 1 lt",
    url_img: "https://sportlife.com.br/wp-content/uploads/2023/03/Refrigerante-1.jpg",
    category: "Bebidas",
    price: 10,
    fk_restaurant: sanId
  },{
    id: generatorId.generate(),
    name: "Pizza De Calabresa",
    url_img: "https://blog.biglar.com.br/wp-content/uploads/2023/06/iStock-1212512019.jpg",
    category: "Italiana",
    price: 42,
    fk_restaurant: sanId
  },{
    id: generatorId.generate(),
    name: "Pizza Portuguesa",
    url_img: "https://paesnovorio.com.br/web/image/product.image/274/image_1024/Pizza%20Portuguesa%20-%2035cm?unique=e66707e",
    category: "Italiana",
    price: 42,
    fk_restaurant: sanId
  },{
    id: generatorId.generate(),
    name: "Lasanha",
    url_img: "https://img.elo7.com.br/product/zoom/2695B89/adesivo-parede-restaurante-lasanha-massas-massa-carne-adesivo-decorativo-parede.jpg",
    category: "Italiana",
    price: 13,
    fk_restaurant: sanId
  },{
    id: generatorId.generate(),
    name: "Macarronada",
    url_img: "https://static.itdg.com.br/images/auto-auto/8374e8989ae0963c3cd4b395921718ba/macarrao-a-bolonhesa.jpg",
    category: "Italiana",
    price: 25,
    fk_restaurant: sanId
  },{
    id: generatorId.generate(),
    name: "Feijoada",
    url_img: "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/12/comidas-tipicas-capa2019-01.jpg",
    category: "Almoço",
    price: 25,
    fk_restaurant: bobsId
  },{
    id: generatorId.generate(),
    name: "Fradinha Sem Gordura",
    url_img: "https://classic.exame.com/wp-content/uploads/2020/10/vacio-e-a-fraldinha-sem-capa-de-gordura-1.jpg?quality=70&strip=info&w=960",
    category: "Almoço",
    price: 35,
    fk_restaurant: bobsId
  },{
    id: generatorId.generate(),
    name: "Pastel De Frango",
    url_img: "https://receitinhas.com.br/wp-content/uploads/2017/02/pastel-de-angu-com-carne-mo%C3%ADda-1200x800.jpg",
    category: "Outros",
    price: 4,
    fk_restaurant: bobsId
  },{
    id: generatorId.generate(),
    name: "Sorvete",
    url_img: "https://www.avanteingredientes.com.br/wp-content/uploads/2022/04/Saborizacao.jpg",
    category: "Outros",
    price: 7,
    fk_restaurant: macDonId
  },{
    id: generatorId.generate(),
    name: "Misto",
    url_img: "https://pubimg.band.uol.com.br/files/8d203f1942dc8d888080.png",
    category: "Hamburger",
    price: 8,
    fk_restaurant: macDonId
  },{
    id: generatorId.generate(),
    name: "Pâo Com Ovo",
    url_img: "https://fitreceitas.com.br/wp-content/uploads/2022/03/Pao-com-ovo-cremoso.jpg",
    category: "Hamburger",
    price: 8,
    fk_restaurant: macDonId
  }
]