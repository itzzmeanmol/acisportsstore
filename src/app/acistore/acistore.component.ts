import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Component({
    selector: "acistore", //Wherever 'acistore' tag is used, then replace the tag with the content of 'acistore.component.html' 
    templateUrl: "acistore.component.html"
})

export class AciStoreComponent {

    public selectedCategory = null;
    public productsPerPage = 3;
    public selectedPage = 1;

    constructor(private repository: ProductRepository, private cart: Cart) { }

    //Below are the PROPERTIES and properties are always given in COMPONENT
    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
        this.changePage(1);
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productsPerPage))
            .fill(0).map((x, i) => i + 1); //x will always be current element and i will be always current index. This is a predefined method and its parameter are also predefined ie i and x.
    }

    addProductToCart(product: Product){
        this.cart.addLine(product);
    }
}