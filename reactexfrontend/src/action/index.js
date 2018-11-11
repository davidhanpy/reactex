import { bindActionCreators } from 'redux';

import * as postActions from './post';
import * as userActions from './user';
import { push } from 'connected-react-router';

export default function getActions(dispatch) {
    return bindActionCreators({
        ...postActions,
        ...userActions,
        push,
    }, dispatch);
}