import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Specialist} from '../../../../model/specialist';

@Component({
  selector: 'app-specialist-tab',
  templateUrl: './specialist-tab.component.html',
  styleUrls: ['./specialist-tab.component.less']
})
export class SpecialistTabComponent implements OnInit {

  @Input()
  specialist: Specialist;

  @Output()
  selectSpecialistEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  selectSpecialist() {
    this.selectSpecialistEvent.emit();
  }

}
