import { Component, inject, OnInit } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IBook } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-new',
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent implements OnInit {
  newBookForm = inject(NonNullableFormBuilder).group({
    id: ['', []],
    title: ['', [Validators.required]],
    subtitle: ['', []],
    isbn: ['', [Validators.required, Validators.minLength(5)]],
    abstract: ['', [Validators.required]],
    author: ['', [Validators.required]],
    publisher: ['', []],
    price: ['', []],
    numPages: [0, []],
    cover: ['', []],
    userId: [0, []],
  });

  service = inject(BookService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    // this.newBookForm.get('author')
    // this.newBookForm.controls.author.disable();
    // console.log(this.newBookForm.getRawValue());
  }

  saveBook() {
    const data: IBook = this.newBookForm.getRawValue();
    this.service
      .createBook(data)
      .subscribe((data) =>
        this.router.navigate(['..', data.isbn], { relativeTo: this.route })
      );
  }
}
