import React from 'react';
import { useParams } from 'react-router-dom';

export const Post = () => {
    const {id} = useParams();
    const num = Number(id);
    const data = fakeData[num];
    
    return(
        <h1>{id}</h1>
    );
}