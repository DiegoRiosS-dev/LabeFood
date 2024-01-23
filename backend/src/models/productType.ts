

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
};

export interface ProductSql extends Product {
  url_img: string;
  fk_restaurant: string;
}

export interface ProductDTO extends Product {
  urlImg: string;
  fkRestaurant: string;
}