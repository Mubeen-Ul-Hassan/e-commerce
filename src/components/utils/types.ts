export interface resultGuard {
  size: number[];
  description: string[];
  producttype: "All Weather";
  image: string[];
  productname: string;
  quantity: number;
  price: number;
  slug: any[];
}

export interface fetchProductGuard {
  result: Array<resultGuard>;
}
