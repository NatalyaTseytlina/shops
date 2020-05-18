import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Specialist} from '../../model/specialist';
import {environment} from '../../../environments/environment';
import {Shop} from '../../model/shop';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getSpecialists(): Observable<Specialist[]> {
    return this.http.get<Specialist[]>(environment.apiUrl + '/assets/mock/specialists.json');
  }

  public getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(environment.apiUrl + '/assets/mock/shops.json');
  }

  public CreateWorkerShopRequest(requestData: any): Observable<boolean> {
    return new Observable<boolean>(observer => {
      if (requestData.specialistId + requestData.shopId > 4) {
        observer.next(true);
      } else {
        observer.next(false);
      }
    }).pipe(delay(1500));
  }
}
