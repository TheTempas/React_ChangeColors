// Application entrypoint.

// Load up the application styles
import _ from '../styles/application.scss';

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import ChangeColors from './ChangeColors.jsx';

ReactDOM.render(<ChangeColors />, document.getElementById('react-root'));
