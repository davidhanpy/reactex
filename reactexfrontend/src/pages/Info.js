import React from 'react';
import InfoDetail from './InfoDetail';
import InfoForm from './InfoForm';

const Info = ({ match }) => {
    const id = match.params.id;
    if (id) {
        return (
            <div>
                <h1>Blog Title</h1>
                <InfoDetail id={id} />
                <InfoForm />
            </div>
        );
    } else {
        return (
            <div>
                <InfoForm />
            </div>
        );
    }

}

export default Info;
