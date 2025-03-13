import { CanDeactivateFn } from '@angular/router';
import { BookNewComponent } from './book-new/book-new.component';
import { inject } from '@angular/core';
import { BookService } from './book.service';

export const leaveGuard: CanDeactivateFn<BookNewComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  const service = inject(BookService);
  if (component.saveToLeave()) {
    return true;
  } else {
    return window.confirm(
      'Du hast nicht gespeichert. Willst du wirklich gehen?'
    );
  }
};
