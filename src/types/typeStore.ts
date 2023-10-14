// export interface Product {
//   id: string;
//   title: string;
//   description: string;
//   price: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   username: string;
//   phone: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
//   address: {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: { lat: string; lng: string };
//   };
//   website: string;
// }

export interface User {
  id: number;
  name: string;
  image: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  address: Address;
  orders: Order[];
}

export interface Address {
  id: string;
  street: string;
  city: string;
  zipcode: string;
  suite: string;
  User?: User;
  userId: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: { count: number; rate: number };
  ProductOrder: ProductOrder[];
}

export interface Order {
  id: string;
  user: User;
  products: ProductOrder[];
  totalAmount: number;
  createdAt: string;
  userId: string;
}

export interface ProductOrder {
  id: string;
  product: Product;
  quantity: number;
  Order: Order;
  orderId: string;
  productId: string;
}
