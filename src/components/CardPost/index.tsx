import React from 'react';

import { Card } from './Card';
import { DateContainer } from './DateContainer';
import { SpanDate } from './SpanDate';
import HeartImg from '../../assets/img/heart.svg'
import { TextContainer } from './TextContainer';
import { TitlePost } from './TitlePost';
import { Description } from './Description';

interface cardProps {
    date?: string;
    title?: string;
    description?: string;
    key?: number;
}

export const CardPost = (props: cardProps) => {
    return(
        <Card>
            <DateContainer>
                <SpanDate>{props.date}</SpanDate>
                <img src={HeartImg} alt="heart" />
            </DateContainer>
            <TextContainer>
                <TitlePost>{props.title}</TitlePost>
                <Description>{props.description}</Description>
            </TextContainer>
        </Card>
    );
}