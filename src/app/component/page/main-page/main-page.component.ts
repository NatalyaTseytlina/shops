import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../service/api/api.service';
import {Observable, zip} from 'rxjs';
import {Specialist} from '../../../model/specialist';
import {Shop} from '../../../model/shop';
import {SaveState} from '../../../model/save-state';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  specialists$: Observable<Specialist[]>;
  shops$: Observable<Shop[]>;

  saveState: SaveState;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.specialists$ = this.apiService.getSpecialists();
    this.shops$ = this.apiService.getShops();
    this.saveState = null;
  }

  save(specialists: Specialist[]) {
    const requests = [];
    for (const specialist of specialists) {
      if (!specialist.shops) {
        continue;
      }
      for (const shop of specialist.shops) {
        requests.push(this.apiService.CreateWorkerShopRequest({
          specialistId: specialist.id,
          shopId: shop.id
        }));
      }
    }

    if (requests.length === 0) {
      return;
    }

    this.saveState = SaveState.SAVING;

    zip( ... requests).subscribe(
      (response: boolean[]) => {
        if (response.indexOf(false) === -1) {
          this.saveState = SaveState.SUCCESS;
        } else {
          this.saveState = SaveState.ERROR;
        }
      },
      error1 => {
        console.log(error1);
        this.saveState = SaveState.ERROR;
      }
    );
  }

}
