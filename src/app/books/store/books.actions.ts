import { Actionstypes } from './actionstypes.enum'
import { Action } from "@ngrx/store";
import { IBook } from "../shared/custom-types";

export const LOAD_BOOKS = "[books] load books";

export class LoadBooks implements Action {
  readonly type = Actionstypes.LOAD_BOOKS;
  constructor(public books: IBook[]) { }
}
