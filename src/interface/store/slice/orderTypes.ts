import { Product } from "./productTypes";

interface ShippingAddress {
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
}

interface Order {
  shippingAddress: ShippingAddress;
  _id: string;
  products: Product[];
  amount: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface OrderTypes {
  isLoading: boolean;
  data: Order[]; // data is an array of Order objects;
  isError: boolean;
  errorMsg: string;
  singleOrder: Order;
  deliveryAddress: DeliveryAddress;
  paymentMethod: string;
}

interface DeliveryAddress {
  address: string;
  city: string;
  country: string;
  name: string;
  phoneNumber: string;
  postal: number;
  state: string;
  _id: string;
}

export { OrderTypes, Order };
