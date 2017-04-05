import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable }    from 'rxjs/Observable';
import { AgreementSearchGridMap } from './agreement-search-grid-map.component';

@Injectable()
export class AgreementSearchService {

  private agreementDataGridUrl: string = "apidata/agreementSearchHeader.json";
  constructor(private _http: Http) {

  }
  getAgreementSearchGridHeader() {
    return this._http.get(this.agreementDataGridUrl)
      .map((response) => response.json());
  }

}
