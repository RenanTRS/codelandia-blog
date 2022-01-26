import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData.json';

import { ContainerPost } from '../components/Posts/ContainerPost';
import { CardsPost } from '../components/Posts/CardsPost';
import { DatePost } from '../components/Posts/DatePost';
import { TitlesPost } from '../components/Posts/TitlesPost';
import { TextPost } from '../components/Posts/TextPost';


export const Post = () => {
    const {id} = useParams();
    const num = Number(id);
    const data = fakeData[num];
    
    return(
        <ContainerPost>
            <CardsPost>
                <DatePost>{data.date}</DatePost>
                <TitlesPost>{data.title}</TitlesPost>
                <TextPost>{data?.text}</TextPost>
            </CardsPost>
        </ContainerPost>
    );
}