import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { DateContainer } from './DateContainer';
import { SpanDate } from './SpanDate';
import HeartImg from '../../assets/img/heart.svg'
import HeartLikeImg from '../../assets/img/heartLike.svg'
import { TextContainer } from './TextContainer';
import { TitlePost } from './TitlePost';
import { Description } from './Description';

interface cardProps {
    date?: string;
    title?: string;
    description?: string;
    index?: number;
    key: number;
}

export const CardPost = (props: cardProps) => {

    const [like, setLike] = useState<boolean>(false);

    function handleLike(){
        setLike(!like)
    }
    return(
        <Card>
            <DateContainer>
                <SpanDate>{props.date}</SpanDate>
                {!like? 
                    <img src={HeartImg} alt="heart" onClick={handleLike}/>:
                    <img src={HeartLikeImg} alt="heart" onClick={handleLike}/>
                }
            </DateContainer>
            <Link to={`/post/${props.index}`}>
                <TextContainer>
                    <TitlePost>{props.title}</TitlePost>
                    <Description>{props.description}</Description>
                </TextContainer>
            </Link>
        </Card>
    );
}