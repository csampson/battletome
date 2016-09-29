/* eslint-env mocha */

import { Response, ResponseOptions } from '@angular/http';
import { Observable }                from 'rxjs/Observable';
import SpellsService                 from './spells';

const responses = {
  okay: Observable.create(observer => {
    const responseOptions = new ResponseOptions({
      body: `[{
        "name": "<name>",
        "level": 0
      }]`
    });

    const response = new Response(responseOptions);

    observer.next(response);
    observer.complete();
  })
};

const Http = sandbox.stub({
  get: (url) => ({
    map: () => (responses.okay)
  })
});

let spellsService;

describe('SpellsService', () => {
  beforeEach(() => {
    spellsService = new SpellsService(Http);
  });

  describe('#list', () => {
    it('should return an [Observable]', () => {
      spellsService.list().should.be.instanceOf(Observable);
    });

    it('should deserialize the response', () => {
      spellsService.list().subscribe(spells => {
        spells.json().should.eql([
          { name: '<name>', level: 0 }
        ]);
      });
    });
  });
});
