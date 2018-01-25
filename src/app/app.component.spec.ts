import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { Component } from "@angular/core";

@Component({
  selector: "app-my-nav",
  template: ""
})
class MyNavComponent {}

describe("AppComponent", () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [AppComponent, MyNavComponent]
      }).compileComponents();
    })
  );
  it(
    "should create the app",
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
  it(
    `should have as title 'app'`,
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual("app");
    })
  );
});
