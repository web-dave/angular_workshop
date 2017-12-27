import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";

import * as BooksActions from "./books.actions";
import { map } from "rxjs/operators";

@Injectable()
export class BookEffects {
  // Listen for the LOAD_BOOKS action
  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(BooksActions.LOAD_BOOKS)
    .pipe(map(action => new BooksActions.ReadyBooks()));

  constructor(private actions$: Actions) {}
}
