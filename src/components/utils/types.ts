import { Image } from "sanity";

export interface slugGuard {
  current: string;
  _type: string;
}

interface childrenGuard {
  _key: string;
  _type: string;
  marks: [];
  text: string;
}

export interface descriptionGuard {
  _type: string;
  style: string;
  _key: string;
  markDefs: [];
  children: childrenGuard[];
}

export interface resultGuard {
  size: number[];
  description: descriptionGuard[];
  producttype: "All Weather";
  image: Image[];
  productname: string;
  quantity: number;
  price: number;
  slug: slugGuard;
}

export interface fetchProductGuard {
  result: Array<resultGuard>;
}
