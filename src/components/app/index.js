import { Component, ViewEncapsulation } from '@angular/core';

import { SpellsService } from '../../services';
import { SpellCard }     from '..';
import styles            from './styles.css';
import template          from './template.html';

@Component({
  encapsulation: ViewEncapsulation.None,
  directives: [SpellCard],
  providers: [SpellsService],
  selector: 'app',
  styles: [styles],
  template
})
class AppComponent {
  static get parameters() {
    return [[SpellsService]];
  }

  constructor(spellsService) {
    this.SpellsService = spellsService;
  }

  ngOnInit() {
    this.SpellsService.list()
      .subscribe(spells => {
        this.spells = spells;
      });
  }
}

export default AppComponent;
