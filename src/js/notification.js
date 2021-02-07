// import { alert, defaultModules } from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import { defaults } from '@pnotify/core';
// or
// const { defaults } = require('@pnotify/core');
import 'material-design-icons/iconfont/material-icons.css';

import { alert, notice, info, success, error } from '@pnotify/core';

// Set default styling.
defaults.styling = 'material';
// This icon setting requires the Material Icons font. (See below.)
defaults.icons = 'material';
// defaultModules.set(PNotifyMobile, {});

export default error;
