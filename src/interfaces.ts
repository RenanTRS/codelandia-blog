import React, {ReactNode} from 'react'

export interface IPropsChildren {
    children: ReactNode;
}
export interface ISearchContext {
    search: string;
    setSearch: (NewState: string) => void;
}
/*export interface ISearch {
    title: string;
}*/