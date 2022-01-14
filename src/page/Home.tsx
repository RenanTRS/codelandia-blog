import React from 'react';

import { Header } from '../components/Header';
import { HeaderContainer } from '../components/Header/HeaderContainer';
import { Title } from '../components/Header/Title';
import { FirstTitle } from '../components/Header/FirstTitle';
import { SubTitle } from '../components/Header/SubTitle';
import { FieldSearch } from '../components/Header/FieldSearch';
import { Main } from '../components/Main';
import { Post } from '../components/Post';

export function Home(){
    return (
        <>
            <Header>
                <HeaderContainer>
                    <Title>
                        <FirstTitle>Codelândia</FirstTitle>
                        <SubTitle>blog</SubTitle>
                    </Title>
                    <FieldSearch />
                </HeaderContainer>
            </Header>
            <Main>
                <Post />
            </Main>
        </>
    );
}