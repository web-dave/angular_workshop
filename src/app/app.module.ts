import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { MyNavComponent } from "./my-nav/my-nav.component";
import { AboutModule } from "./about/about.module";
import { PreloadDelayed } from "./shared/preload-delayed";

@NgModule({
  declarations: [AppComponent, MyNavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 100 })
  ],
  providers: [PreloadDelayed],
  bootstrap: [AppComponent]
})
export class AppModule {}
