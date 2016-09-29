/**
 * @overview Main application container
 * @module   app
 * @requires @angular/core/Component
 * @requires styles.css
 * @requires template.html
 */

import { Component } from '@angular/core';

import styles   from './styles.css';
import template from './template.html';

@Component({
  selector: 'app',
  styles: [styles],
  template
})
class App {}

export default App;
