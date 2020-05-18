import {Component, Input, OnInit} from '@angular/core';
import {Shop} from '../../../../model/shop';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.less']
})
export class ShopItemComponent implements OnInit {

  @Input()
  shop: Shop;

  constructor() { }

  ngOnInit() {
  }

}
