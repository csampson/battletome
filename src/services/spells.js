import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';

const SPELLS_URL = 'https://api.myjson.com/bins/3gxbk';

function deserialize(response) {
  const spells = response.json();

  return Object.keys(spells).map(name => ({
    ...spells[name],
    name
  }));
}

@Injectable()
export default class SpellService {
  static get parameters() {
    return [[Http]];
  }

  constructor(http) {
    this.http = http;
  }

  list() {
    return this.http
      .get(SPELLS_URL)
      .map(deserialize)
      .catch(error => (
        Observable.throw(error.json().error ||'Error fetching spells')
      ));
  }
}
