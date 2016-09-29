import { Component } from '@angular/core';

import styles   from './styles.css';
import template from './template.html';

@Component({
  inputs: ['spell'],
  selector: 'spell-card',
  styles: [styles],
  template
})
class SpellCardComponent {}

export default SpellCardComponent;
