import React, {createContext, useState} from 'react';

import { IPropsChildren, ISearchContext} from '../interfaces';

export const SearchContext = createContext({} as ISearchContext);

export const SearchContextProvider = ({children}: IPropsChildren) => {
    const [search, setSearch] = useState<string>('');

    const value: ISearchContext = {
        search,
        setSearch
    }
    return(
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}