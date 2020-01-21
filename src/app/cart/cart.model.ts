export class Cart {
  productId: number;
  userId: number;
  constructor(productId: number, userId: number) {
    this.productId = productId;
    this.userId = userId;
  }
}
