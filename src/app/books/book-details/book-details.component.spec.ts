import { Observable } from "rxjs";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookDetailsComponent } from "./book-details.component";
import { Directive, Input, Pipe, Injectable } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { BooksService } from "../shared/books.service";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";

@Pipe({
  name: "pages"
})
class Pages {
  transform(e) {
    return e;
  }
}

const book = {
  title: "Eloquent JavaScript",
  subtitle: "A Modern Introduction to Programming",
  isbn: "978-1-59327-584-6",
  abstract:
    "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  numPages: 472,
  author: "Marijn Haverbeke",
  publisher: {
    name: "No Starch Press",
    url: "https://www.nostarch.com/"
  }
};

class StubService {
  getBook(id): Observable<any> {
    return Observable.of(book);
  }
}

@Directive({
  selector: "[orderBtn]"
})
class OrderBtn {
  @Input() orderBtn: any;
}

fdescribe("BookDetailsComponent", () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let booksService: BooksService;
  let route: ActivatedRoute;
  let serviceSpy: jasmine.Spy;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BookDetailsComponent, OrderBtn, Pages],
        imports: [
          RouterTestingModule,
          HttpClientModule,
          StoreModule.forRoot({})
        ],
        providers: [
          BooksService,
          {
            provide: ActivatedRoute,
            useValue: {
              data: {
                subscribe: (fn: (value) => void) => fn({})
              },
              params: Observable.of({ isbn: "test" }),
              snapshot: {
                url: [
                  {
                    path: "foo"
                  },
                  {
                    path: "bar"
                  },
                  {
                    path: "baz"
                  }
                ]
              }
            }
          }
        ]
      }).compileComponents();

      booksService = TestBed.get(BooksService);
      serviceSpy = spyOn(booksService, "getBook").and.returnValue(
        Observable.of(book)
      );
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should get a Book", () => {
    expect(component.book.isbn).toBe(book.isbn);
  });

  it("should read a book via BookData service", () => {
    expect(serviceSpy.calls.argsFor(0)).toEqual(["test"]);
  });
});
