import { Action } from "@ngrx/store";

import * as BooksActions from "./books.actions";
import { IBook } from "../shared/custom-types";

export const booksStoreName = "books";

export interface BooksState {
    books: IBook[];
}

export const initialState: BooksState = {
    books: []
};

export function booksReducer(state = initialState, action: Action): BooksState {
    switch (action.type) {
        case BooksActions.LOAD_BOOKS:
            const LOAD_BOOKS = <BooksActions.LoadBooks>action;
            return {
                ...state,
                books: LOAD_BOOKS.books
            };

        case BooksActions.READY_BOOKS:
            return { ...state };
    }
}
