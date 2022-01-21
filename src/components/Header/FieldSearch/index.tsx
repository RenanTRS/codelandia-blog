import React, {useContext, ChangeEvent} from 'react';

import {SearchContext} from '../../../context/SearchContext'
import { Field } from '../Field';
import { Input } from '../Field/Input';
import { Label } from '../Field/Label';

import SearchImg from '../../../assets/img/search.svg';

export const FieldSearch = () => {
    const {search, setSearch} = useContext(SearchContext);

    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearch(value);
    }

    return(
        <Field>
            <Label><img src={SearchImg} alt="Search" /></Label>
            <Input placeholder='Pesquisar no blog' value={search} onChange={changeInput} />
        </Field>
    );
}