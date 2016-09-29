/* eslint-env mocha */

import { Observable } from 'rxjs/Observable';
import AppComponent   from '.';

const SpellsService = {
  list: () => (
    Observable.create(observer => {
      observer.next([]);
      observer.complete();
    })
  )
};

let appComponent;

describe('AppComponent', () => {
  beforeEach(() => {
    appComponent = new AppComponent(SpellsService);
  });

  describe('#ngOnInit', () => {
    beforeEach(() => {
      sandbox.spy(SpellsService, 'list');
      appComponent.ngOnInit();
    });

    it('should fetch a list of spells', () => {
      SpellsService.list.should.have.been.called;
    });

    it('should assign spells', () => {
      appComponent.spells.should.eql([]);
    });
  });
});
