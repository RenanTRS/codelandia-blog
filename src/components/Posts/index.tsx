import React, {useContext} from 'react';
import {SearchContext} from '../../context/SearchContext'
import {Link} from 'react-router-dom';

import fakeData from '../../fakeData.json';

import { CardPost } from '../CardPost';

export const Posts = () => {
  const {search} = useContext(SearchContext);
    return (
        <>
          {fakeData.filter((val) => {
            if(search === ''){
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())){
              //Se o título em minúsculo for igual ao state em minúsculo
              return val;
            }
          }).map((val, key) =>{
            return (
                <Link to={`/post/${key}`} key={key}><CardPost date={val.date} title={val.title} text={val.text} /></Link>
            );
          })}
        </>
    );
}