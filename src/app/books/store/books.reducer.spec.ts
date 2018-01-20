import { copyState, booksReducer } from "./books.reducer";
import { bookMock, booksStub } from "../shared/books.service.stub";
import { LOAD_BOOKS } from "./books.actions";

let oldstate = { books: booksStub }
describe('copyState', () => {
    it('should copy the state safely', () => {
        let state = copyState(oldstate)
        expect(oldstate === state).not.toBeTruthy()
        expect(oldstate.books[0].title).toBe(state.books[0].title)
    })
})
describe('booksReducer', () => {
    it('should load books', () => {
        let action = { type: LOAD_BOOKS, books: booksStub }
        let state = booksReducer({ books: [] }, action)
        expect(state.books).toBe(booksStub)
    })
})