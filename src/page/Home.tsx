import React from 'react';

import { Header } from '../components/Header';
import { Title } from '../components/Header/Title';
import { SubTitle } from '../components/Header/SubTitle';
import { FieldSearch } from '../components/Header/FieldSearch';

export function Home(){
    return (
        <Header>
            <Title>Codelândia</Title>
            <SubTitle>blog</SubTitle>
            <FieldSearch />
        </Header>
    );
}