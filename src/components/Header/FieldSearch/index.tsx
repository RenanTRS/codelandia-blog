import React from 'react';

import {SearchContext} from '../../../context/SearchContext'
import { Field } from '../Field';
import { Input } from '../Field/Input';
import { Label } from '../Field/Label';

import SearchImg from '../../../assets/img/search.svg';

export const FieldSearch = () => {
    return(
        <Field>
            <Label><img src={SearchImg} alt="Search" /></Label>
            <Input placeholder='Pesquisar no blog' />
        </Field>
    );
}