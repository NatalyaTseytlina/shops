import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Specialist} from '../../../../model/specialist';

@Component({
  selector: 'app-specialists',
  templateUrl: './specialists.component.html',
  styleUrls: ['./specialists.component.less']
})
export class SpecialistsComponent implements OnInit {

  @Input()
  specialists: Specialist[];
  @Input()
  showAddButton: boolean;

  @Output()
  addSpecialistEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  selectSpecialistEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  addSpecialist() {
    this.addSpecialistEvent.emit();
  }

  selectSpecialist(index: number) {
    this.selectSpecialistEvent.emit(index);
  }

}
