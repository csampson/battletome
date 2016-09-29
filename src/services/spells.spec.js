/* eslint-env mocha */

import { Observable } from 'rxjs/Observable';
import SpellsService  from './spells';

const responses = {
  okay: Observable.create(observer => {
    observer.next([]);
    observer.complete();
  })
};

const Http = {
  get: () => ({
    map: () => (responses.okay)
  })
};

let spellsService;

describe('SpellsService', () => {
  beforeEach(() => {
    spellsService = new SpellsService(Http);
  });

  describe('#list', () => {
    it('should return an [Observable]', () => {
      spellsService.list().should.be.instanceOf(Observable);
    });
  });
});
