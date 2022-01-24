import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../fakeData.json';

import { ContainerPost } from '../components/Posts/ContainerPost';
import { Card } from '../components/CardPost/Card';
import { DatePost } from '../components/Posts/DatePost';
import { TitlesPost } from '../components/Posts/TitlesPost';
import { Text } from '../components/CardPost/Text';


export const Post = () => {
    const {id} = useParams();
    const num = Number(id);
    const data = fakeData[num];
    
    return(
        <ContainerPost>
            <Card>
                <DatePost>{data.date}</DatePost>
                <TitlesPost>{data.title}</TitlesPost>
                <Text>{data.text}</Text>
            </Card>
        </ContainerPost>
    );
}