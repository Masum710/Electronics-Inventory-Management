export class Product {
    id: number;
    name: string;
    sku: string;
    description: string;
    price: number;
    stock: number;
    constructor(id:number, name:string, sku:string, description:string, price:number, stock:number){
        this.id = id;
        this.name = name;
        this.sku= sku;
        this.description=description;
        this.price=price;
        this.stock=stock;
    }
  }