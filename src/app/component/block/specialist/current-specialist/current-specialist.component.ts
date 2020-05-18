import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Specialist} from '../../../../model/specialist';

@Component({
  selector: 'app-current-specialist',
  templateUrl: './current-specialist.component.html',
  styleUrls: ['./current-specialist.component.less']
})
export class CurrentSpecialistComponent implements OnInit {

  @Input()
  specialist: Specialist;

  @Output()
  deleteSpecialistEvent: EventEmitter<any> = new EventEmitter<any>();@Output()
  deleteShopEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteSpecialist() {
    this.deleteSpecialistEvent.emit();
  }

  deleteShop(index: number) {
    this.deleteShopEvent.emit(index);
  }

}
