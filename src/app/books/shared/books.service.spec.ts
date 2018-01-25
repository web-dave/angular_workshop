import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { booksStub, bookMock } from "./books.service.stub";
import { async, inject, TestBed } from "@angular/core/testing";

import { BooksService } from "./books.service";
import { StoreModule, Store } from "@ngrx/store";
import { BooksState } from "../store/books.reducer";
import { LoadBooks } from "../store/books.actions";

describe("BooksService", () => {
  let store: Store<BooksState>;
  beforeEach(() => {
    // setup @ngModule for testing
    TestBed.configureTestingModule({
      providers: [BooksService],
      imports: [HttpClientTestingModule, StoreModule.forRoot({})]
    });
    store = TestBed.get(Store);
  });

  // check after each test there is no pending(open) request
  afterEach(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      backend.verify();
    })
  );

  it(
    "should be created",
    inject([BooksService], (service: BooksService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    "should trigger a action",
    async(
      inject(
        [BooksService, HttpTestingController],
        (service: BooksService, backend: HttpTestingController) => {
          spyOn(store, "dispatch");
          let action = new LoadBooks(booksStub);
          service.getBooks();
          backend
            .expectOne("http://localhost:4730/books")
            .flush(booksStub, { status: 200, statusText: "Ok" });
          expect(store.dispatch).toHaveBeenCalled();
          expect(store.dispatch).toHaveBeenCalledWith(action);
        }
      )
    )
  );

  it(
    "should return one specific book",
    inject(
      [BooksService, HttpTestingController],
      (service: BooksService, backend: HttpTestingController) => {
        service.getBook("1234").subscribe(book => {
          expect(book).toEqual(booksStub[0]);
        });
        backend
          .expectOne("http://localhost:4730/books/1234")
          .flush(booksStub[0], { status: 200, statusText: "Ok" });
      }
    )
  );

  it(
    "should update a book",
    inject(
      [BooksService, HttpTestingController],
      (service: BooksService, backend: HttpTestingController) => {
        service.updateBook(booksStub[0]).subscribe(book => {
          expect(book.title).toEqual(booksStub[0].title);
        });
        backend
          .expectOne(`http://localhost:4730/books/${booksStub[0].isbn}`)
          .flush(booksStub[0], { status: 200, statusText: "Ok" });
      }
    )
  );

  // it('should create a new book', inject([BooksService, HttpTestingController],
  //   (service: BooksService, backend: HttpTestingController) => {
  //     service.createBook(booksStub[0])
  //       .subscribe(book => {
  //         expect(book.title).toEqual(booksStub[0].title)
  //       });
  //     backend.expectOne('http://localhost:4730/books/').flush(booksStub[0], { status: 200, statusText: 'Ok' });
  //   }));
});
