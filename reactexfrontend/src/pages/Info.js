import React from 'react';
import InfoDetail from './InfoDetail';
import InfoForm from './InfoForm';
import CommentForm from './CommentForm';

const Info = ({ match }) => {
    console.log(match)
    const id = match.params.id;
    if (id) {
        return (
            <div>
                <InfoDetail id={id} />
                <CommentForm />
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
