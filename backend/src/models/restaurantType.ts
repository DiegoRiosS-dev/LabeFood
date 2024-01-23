
interface Restaurant {
  name: string;
  category: string;
  description: string;
  shipping: number;
  address: string;
}

export interface RestaurantDTO extends Restaurant{
  logoUrl: string;
  deliveryTime: number;
}

export  interface RestaurantSql extends Restaurant {
  id: string;
  delivery_time: number;
  logo_url: string;
};