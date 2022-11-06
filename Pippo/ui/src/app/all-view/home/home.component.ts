import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from "../../app-services/product.service";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selected:string = 'none';
  placeNames = [];
  productsList: ProductModel[] = [];
  indoorProductsList: ProductModel[] = [];
  outdoorProductsList: ProductModel[] = [];

  constructor(
    private _router: Router,
    private productListService: ProductService
  ) {}

  ngOnInit() {
    this.initProductList();
  }


  private initProductList() {
    this.productListService.getProductList().then((res:ProductModel[])=>{
      if(res){
        this.productsList = res;
        this.indoorProductsList = this.productsList.filter(pl => pl.category ==='indoors');
        this.outdoorProductsList = this.productsList.filter(pl => pl.category ==='outdoors');
      }
    });
  }
}
