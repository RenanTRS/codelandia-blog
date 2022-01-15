import React from 'react';

import fakeData from '../../fakeData.json';

import { CardPost } from '../CardPost';

export const Post = () => {
    return (
        <>
          {fakeData.map((val, key) =>{
            return (
                <CardPost date={val.date} title={val.title} text={val.text} key={key} />
            );
          })}
        </>
    );
}