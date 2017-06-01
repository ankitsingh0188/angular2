import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import 'rxjs/add/operator/map';

import { Imdb } from './imdb-va';
import { IMDBS } from './imdb';

@Injectable()
export class DrupalService {
  getUser(): Promise<Imdb[]> {
    return Promise.resolve(IMDBS);
  }
}

// @Injectable()
// export class DrupalService {
//   constructor(private http: Http) {}
//   getUser() {
//     return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
//     .map((res:Response) => res.json());
//   }
//
// }
