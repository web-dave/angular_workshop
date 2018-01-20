import { LoadBooks } from "./books.actions";
import { IBook } from "../shared/custom-types";

describe('books actions', () => {

    const books: IBook = {
        isbn: '123-456-789-0',
        title: 'Mock Book',
        subtitle: '',
        abstract: '',
        numPages: 123,
        author: '',
        publisher: {
            name: '',
            url: '',
        }
    }

    beforeEach(() => { })


    it('should instantiate LoadBooks with Books', () => {
        const loadBooks = new LoadBooks([books])
        expect(loadBooks.type).toBe('[books] load books')
        expect(loadBooks.books.length).toBe(1)
        expect(loadBooks.books[0].title).toBe('Mock Book')
    })
})