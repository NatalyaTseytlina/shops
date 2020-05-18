import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Specialist} from '../../../../model/specialist';
import {Shop} from '../../../../model/shop';
import {SaveState} from '../../../../model/save-state';

@Component({
  selector: 'app-main-block',
  templateUrl: './main-block.component.html',
  styleUrls: ['./main-block.component.less']
})
export class MainBlockComponent implements OnInit {

  @Input()
  specialists: Specialist[];
  @Input()
  shops: Shop[];
  @Input()
  saveState: SaveState;

  SaveStates = SaveState;

  @Output()
  saveEvent: EventEmitter<Specialist[]> = new EventEmitter<Specialist[]>();

  addedSpecialists: Specialist[];
  currentSpecialistIndex: number;

  constructor() { }

  ngOnInit() {
    this.addedSpecialists = [];
    this.currentSpecialistIndex = null;
  }

  addSpecialist() {
    this.addedSpecialists.push(this.specialists.pop());
  }

  selectSpecialist(index: number) {
    this.currentSpecialistIndex = index;
  }

  deleteCurrentSpecialist() {
    if (this.addedSpecialists[this.currentSpecialistIndex].shops) {
      this.shops.push( ... this.addedSpecialists[this.currentSpecialistIndex].shops);
      this.addedSpecialists[this.currentSpecialistIndex].shops = null;
    }
    this.specialists.push( ... this.addedSpecialists.splice(this.currentSpecialistIndex, 1));
  }

  setLastAddedSpecialistCurrent() {
    this.currentSpecialistIndex = this.addedSpecialists.length - 1 >= 0 ? this.addedSpecialists.length - 1 : null;
  }

  selectShop(index: number) {
    if (this.currentSpecialistIndex === null) {
      return;
    }
    if (!this.addedSpecialists[this.currentSpecialistIndex].shops) {
      this.addedSpecialists[this.currentSpecialistIndex].shops = [];
    }
    this.addedSpecialists[this.currentSpecialistIndex].shops.push( ... this.shops.splice(index, 1));
  }

  deleteShop(index: number) {
    this.shops.push( ... this.addedSpecialists[this.currentSpecialistIndex].shops.splice(index, 1));
  }

  save() {
    this.saveEvent.emit(this.addedSpecialists);
  }
}
