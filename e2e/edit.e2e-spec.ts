import { EditPage } from './edit.po'

describe('edit book', () => {
    let edit: EditPage;

    beforeEach(() => {
        edit = new EditPage();
    });

    it('should edit title', () => {
        edit.navigateTo('/books/978-0-20163-361-0/edit');
        edit.editTitle()
        edit.saveTitle()
        expect(edit.getUrl()).toEqual('http://localhost:49152/books/978-0-20163-361-0')
    });

    // it('should display welcome message', () => {
    //   edit.navigateTo('/hannes');
    //   expect(edit.getUrl()).toEqual('http://localhost:49152/about')
    // });

});