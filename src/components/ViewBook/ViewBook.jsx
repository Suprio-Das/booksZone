import React from 'react';
import { useParams } from 'react-router';

const ViewBook = () => {
    let params = useParams();
    console.log(params.id)
    return (
        <div>
            Viewed Book ID: {params.id}
        </div>
    );
};

export default ViewBook;