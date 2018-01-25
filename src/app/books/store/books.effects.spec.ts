import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import {
  EffectsMetadata,
  getEffectsMetadata,
  EffectsModule
} from "@ngrx/effects";
import { BookEffects } from "./books.effects";
import { StoreModule } from "@ngrx/store";
import { LoadBooks, ReadyBooks } from "./books.actions";
import { booksStub } from "../shared/books.service.stub";

describe("My Effects", () => {
  let effects: BookEffects;
  let metadata: EffectsMetadata<BookEffects>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookEffects],
      imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])]
    });

    effects = TestBed.get(BookEffects);
    metadata = getEffectsMetadata(effects);
  });

  it("should register load$ that dispatches an action", () => {
    expect(metadata.load$).toEqual({ dispatch: true });
  });
});
