require('./bootstrap');

import Router from './Router'
import { render } from 'react-dom';

render(<Router />, document.getElementById('app'));
