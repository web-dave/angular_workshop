import { booksReducer, initialState } from "./books.reducer";
import { booksStub } from "../shared/books.service.stub";
import { LOAD_BOOKS } from "./books.actions";

let oldstate = { books: booksStub };

describe("booksReducer", () => {
  it("should load books", () => {
    let action = { type: LOAD_BOOKS, books: booksStub };
    let state = booksReducer(initialState, action);
    expect(state.books).toBe(booksStub);
  });
  it("state should never be the same", () => {
    let action = { type: LOAD_BOOKS, books: booksStub };
    let state = booksReducer(initialState, action);
    let newState = booksReducer(state, action);
    expect(newState.books).toBe(state.books);
    expect(newState === state).toBeFalsy();
  });
});
