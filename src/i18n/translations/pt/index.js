import flatten from 'flat';

import error404 from './404';
import home from './home';
import page2 from './page-2';
import project from './the-project';
import atlForest from './atlantic-forest';
import contact from './contact'
import zecar from './zecar'
import reforest from './reforestation'


const messages = { error404, home, page2, project, atlForest, contact, zecar, reforest };



export default flatten(messages);
