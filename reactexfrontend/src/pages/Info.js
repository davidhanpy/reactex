import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import InfoDetail from './InfoDetail';
import InfoForm from './InfoForm';

const Info = ({ match }) => {
    return (
        <Fragment>
            <Route path="/:id" component={InfoDetail}/>
            <Route path="/" component={InfoForm} />
        </Fragment>
    )

}

export default Info;
