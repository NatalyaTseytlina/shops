import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Shop} from '../../../../model/shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.less']
})
export class ShopsComponent implements OnInit {

  @Input()
  shops: Shop[];

  @Output()
  selectShopEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  selectShop(index: number) {
    this.selectShopEvent.emit(index);
  }

}
