import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";

import { LOAD_BOOKS, ReadyBooks } from "./books.actions";
import { map } from "rxjs/operators";

@Injectable()
export class BookEffects {
    //   @Effect({ dispatch: false })
    //   loaded = this.actions$.ofType(READY_BOOKS)
    //   .pipe(
    //       map(
    //           action => someService.method()
    //       )
    //   )

    @Effect()
    load$: Observable<Action> = this.actions$
        .ofType(LOAD_BOOKS)
        .pipe(map(action => new ReadyBooks()));

    constructor(private actions$: Actions) { }
}
