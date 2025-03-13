import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { IBook } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';

const authorValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const authors = ['peter', 'paul', 'marie'];
  const result = authors.includes(control.value.toLowerCase());
  return result
    ? null
    : {
        author: 'Das ist kein registrierter Author.',
      };
};

const authorValidatorFactory =
  (authors: string[]): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    // const authors = ['peter', 'paul', 'marie'];
    const result = authors.includes(control.value.toLowerCase());
    return result
      ? null
      : {
          author: 'Das ist kein registrierter Author.',
        };
  };

@Component({
  selector: 'app-book-new',
  imports: [ReactiveFormsModule],
  templateUrl: './book-new.component.html',
  styleUrl: './book-new.component.scss',
})
export class BookNewComponent implements OnInit {
  authors = ['peter', 'paul', 'marie'];
  newBookForm = inject(NonNullableFormBuilder).group({
    id: ['', []],
    title: ['', [Validators.required]],
    subtitle: ['', []],
    isbn: ['', [Validators.required, Validators.minLength(5)]],
    abstract: ['', [Validators.required]],
    author: ['', [Validators.required, authorValidatorFactory(this.authors)]],
    publisher: ['', []],
    price: ['', []],
    numPages: [0, []],
    cover: ['', []],
    userId: [0, []],
  });

  saved = false;

  service = inject(BookService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  saveToLeave() {
    return this.saved || this.newBookForm.pristine;
  }

  ngOnInit(): void {
    // this.newBookForm.get('author')
    // this.newBookForm.controls.author.disable();
    // console.log(this.newBookForm.getRawValue());

    // this.newBookForm.valueChanges.subscribe((data) => console.log(data));
    this.newBookForm.controls.author.valueChanges.subscribe((data) => {
      if (data.toLowerCase() === 'peter') {
        // this.newBookForm.controls.abstract.setValue('Paul & Marie');
        // this.newBookForm.controls.abstract.disable();
        this.newBookForm.controls.abstract.addValidators(
          Validators.minLength(4)
        );
        // this.newBookForm.controls.abstract.removeValidators(
        //   Validators.minLength(4)
        // );
        this.newBookForm.controls.abstract.updateValueAndValidity();

        this.newBookForm.patchValue({
          subtitle: 'Immer noch das Buch',
          publisher: 'Mein Book Dealer',
          price: '12,99',
          numPages: 300,
          cover: 'https://picsum.photos/200/300',
          userId: 1,
        });
      }
    });
  }

  saveBook() {
    const data: IBook = this.newBookForm.getRawValue();
    this.service.createBook(data).subscribe((data) => {
      this.saved = true;
      this.router.navigate(['..', data.isbn], { relativeTo: this.route });
    });
  }
}
