import { Component } from '@angular/core';
import products from 'src/app/products.json';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';

  public productsList: [] = products;

  nCnt: number = 1;
  price: any;
  clickAdd(itemId, itemVal) {
    var DataValue = $("#getQtyFromProductsPage-" + itemId);
    this.nCnt = parseInt(itemVal) + 1;
    DataValue.val(this.nCnt);
    var theResCount = this.nCnt;
    this.changeThePrice(itemId);
  }
  clickSub(itemId, itemVal) {
    if (parseInt(itemVal) > 0) {
      var DataValue = $("#getQtyFromProductsPage-" + itemId);
      this.nCnt = parseInt(itemVal) - 1;
      DataValue.val(this.nCnt);
      var theResCount = this.nCnt;
      this.changeThePrice(itemId);
      if (theResCount == 0) {
        DataValue.val(1);
        this.changeThePrice(itemId);
      }
      else {
        DataValue.val(theResCount);
        this.changeThePrice(itemId);
      }
    }
  }

  changeThePrice(id)
  {
    var DataValue = $("#getQtyFromProductsPage-" + id).val();
    var getPrice = $("#getExactPrice"+id).text();
    this.price = parseInt(DataValue) * parseFloat(getPrice);
    $("#theTotal"+id).text("Total:"+this.price);
    console.log(this.price);
  }
}