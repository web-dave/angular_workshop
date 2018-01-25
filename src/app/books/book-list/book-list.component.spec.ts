import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

import { BookListComponent } from "./book-list.component";
import { StoreModule, Store } from "@ngrx/store";
import { BooksService } from "../shared/books.service";
import { BooksState, booksStoreName } from "../store/books.reducer";
import { booksStub, BooksServiceStub } from "../shared/books.service.stub";
import { Observable } from "rxjs";
import { BookPreviewComponent } from "../shared/components.stubs";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe("BookListComponent", () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let store: Store<BooksState>;
  let elements: DebugElement[];

  let state = {
    books: booksStub
  };

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BookListComponent, BookPreviewComponent],
        imports: [
          StoreModule.forRoot({}),
          HttpClientModule,
          RouterTestingModule
        ],
        providers: [{ provide: BooksService, useClass: BooksServiceStub }]
      }).compileComponents();
      store = TestBed.get(Store);
      spyOn(store, "select").and.returnValue(Observable.of(booksStub));
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show 3 Books", () => {
    fixture.detectChanges();
    elements = fixture.debugElement.queryAll(By.css("app-book-preview"));
    expect(elements.length).toBe(3);
  });
});
