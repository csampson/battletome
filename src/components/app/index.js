/**
 * @overview Main application container
 * @module   app
 * @requires @angular/core/Component
 * @requires @angular/core/ViewEncapsulation
 * @requires styles.css
 * @requires template.html
 */

import { Component, ViewEncapsulation } from '@angular/core';

import styles   from './styles.css';
import template from './template.html';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app',
  styles: [styles],
  template
})
class App {}

export default App;
