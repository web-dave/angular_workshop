import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookPreviewComponent } from "./book-preview.component";
import { bookMock } from "../shared/books.service.stub";

describe("BookPreviewComponent", () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BookPreviewComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should trigger a event and set the book", () => {
    component.book = bookMock;

    fixture.detectChanges();
    component.selectThisBook();
    // expect(component.bookselected).toBe(bookMock);
  });
});
