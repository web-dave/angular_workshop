import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books/books.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BooksService } from "./shared/books.service";
import { BookPreviewComponent } from "./book-preview/book-preview.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { PagesPipe } from "./shared/pages.pipe";
import { OrderBtnDirective } from "./shared/order-btn.directive";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookNewComponent } from "./book-new/book-new.component";
import { booksReducer, booksStoreName } from "./store/books.reducer";

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(booksStoreName,{
      books: booksReducer
    })
  ],
  declarations: [
    BooksComponent,
    BookListComponent,
    BookPreviewComponent,
    BookDetailsComponent,
    PagesPipe,
    OrderBtnDirective,
    BookEditComponent,
    BookNewComponent
  ],
  exports: [BooksComponent],
  providers: [BooksService]
})
export class BooksModule {}
