import { DummyComponent } from './../shared/components.stubs';
import { BooksServiceStub, bookMock } from '../shared/books.service.stub';
import { BooksService } from '../shared/books.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookEditComponent } from './book-edit.component';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;
  let booksService: BooksService
  let route: ActivatedRoute


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookEditComponent, DummyComponent],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
        StoreModule.forRoot({})
      ],
      providers: [BooksService]
    })
      .compileComponents();
    booksService = TestBed.get(BooksService)
    route = TestBed.get(ActivatedRoute)
    spyOn(route, 'params').and.returnValue(Observable.of({ isbn: 'test' }))

    spyOn(booksService, 'getBook').and.returnValue(Observable.of(bookMock))
    spyOn(booksService, 'updateBook').and.returnValue(Observable.of(bookMock))
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should save the book', () => {
    component.saveBook()
    expect(booksService.updateBook).toHaveBeenCalled()
  });


});
