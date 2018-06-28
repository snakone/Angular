import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { NavBarAppComponent } from './nav-bar-app/nav-bar-app.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { CommentBookComponent } from './comment-book/comment-book.component';
import { PurchaseBookComponent } from './purchase-book/purchase-book.component';
import { RelaxAppComponent } from './relax-app/relax-app.component';
import { ModalAppComponent } from './modal-app/modal-app.component';
import { FooterAppComponent } from './footer-app/footer-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    NavBarAppComponent,
    SearchBookComponent,
    CommentBookComponent,
    PurchaseBookComponent,
    RelaxAppComponent,
    ModalAppComponent,
    FooterAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
