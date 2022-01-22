import React from 'react';
import { useParams } from 'react-router-dom';

export const Post = () => {
    let {id} = useParams();
    return(
        <h1>{id}</h1>
    );
}