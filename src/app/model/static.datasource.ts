import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

// StaticDataSource should be injectable class since Repository class depends on this class

@Injectable()
export class StaticDataSource{
    private products: Product[] = [
        new Product(1,"Head n Shoulder","Shampoo","Head n Shoulder (Shampoo)",43),
        new Product(2,"Loreal","Shampoo","Loreal (Shampoo)",242),
        new Product(3,"Lux","Shampoo","Lux (Shampoo)",113),
        new Product(4,"Treseme","Shampoo","Treseme (Shampoo)",65),
        new Product(5,"Clinic Plus","Shampoo","Clinic Plus (Shampoo)",56),
        new Product(6,"Olay","Cream","Olay (Cream)",46),
        new Product(7,"Ponds","Cream","Ponds (Cream)",89),
        new Product(8,"Lotus","Cream","Lotus (Cream)",99),
        new Product(9,"Vaseline","Cream","Vaseline (Cream)",76),
        new Product(10,"Nivea","Cream","Nivea (Cream)",98),
        new Product(11,"Parachute","Hair Oil","Parachute (Hair Oil)",90),
        new Product(12,"Jasmine","Hair Oil","Jasmine (Hair Oil)",23),
        new Product(13,"Figaro","Hair Oil","Figaro (Hair Oil)",74),
        new Product(14,"Almonds","Hair Oil","Almonds (Hair Oil)",99),
        new Product(15,"Coconut","Hair Oil","Coconut (Hair Oil)",78)
    ];

    getProducts(): Observable<Product[]>{
        return from([this.products]);
    }
    saveOrder(order: Order): Observable<Order>{
        console.log(JSON.stringify(order));
        return from([order]);   
    }
}