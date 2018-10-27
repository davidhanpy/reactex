import { bindActionCreators } from 'redux';

import * as postActions from './post';
import { push } from 'connected-react-router';

export default function getActions(dispatch) {
    return bindActionCreators({
        ...postActions,
        push,
    }, dispatch);
}