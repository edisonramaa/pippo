import {ProductOwnerModel} from "./product-owner.model";

export class ProductModel {
  id: number;
  image_url: string;
  title: string;
  description: string;
  category: string;
  rent_price: number;
  preparation_time: number;
  currency: string;
  count: number;
  days: number;
  owner: ProductOwnerModel;
}
