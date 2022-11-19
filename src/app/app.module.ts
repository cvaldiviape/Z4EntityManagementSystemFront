import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { httpInterceptorProviders } from './security/interceptors';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Store, StoreModule } from "@ngrx/store";
import { reducers, metaReducers, AppState } from './@core/store';
//import { reducers, metaReducers, AppState } from "@core/store";

// const checkAuth = (store: Store<AppState>) => {
//   //return store.select(isAuthenticated)
//   return true
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  // providers: [httpInterceptorProviders, DatePipe, {
  //   provide: APP_INITIALIZER,
  //   deps: [Store],
  //   useFactory: checkAuth,
  //   multi: true
  // }],
  providers: [httpInterceptorProviders, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }