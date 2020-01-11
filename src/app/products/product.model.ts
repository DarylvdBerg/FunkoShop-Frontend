import {Image} from './image.model';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public images: Image[],
    public price: number,
    public amount: number
  ) {}
}
