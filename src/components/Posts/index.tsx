import React, {useContext} from 'react';
import {SearchContext} from '../../context/SearchContext'

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
                <CardPost key={key} date={val.date} title={val.title} description={val.description} index={key}/> 
            );
          })}
        </>
    );
}