import { ConfirmationComponent } from '@app/shared/components/confirmation/confirmation.component';
import { FormControl, FormGroup } from '@angular/forms';
import { AddSubscribersComponent } from './pages/subscribers/addSubscriber/addSubscriber.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'app/shared/services/token.interceptor.service';
import { ServicesGuard } from './shared/services/services.guard';

//Components
import { BtnEditComponent } from './shared/components/buttons/btn-edit/btn-edit.component'; 
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { countriesComponent } from './pages/countries/countries.component';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { BtnDeleteComponent } from './shared/components/buttons/btn-delete/btn-delete.component'; 
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { FormSubscriberComponent } from './pages/subscribers/form-subscriber/form-subscriber.component';
import { FilterComponent } from './shared/filter/filter.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavigationComponent,
    countriesComponent,
    PaginationComponent,
    AddSubscribersComponent,
    SubscribersComponent,
    BtnEditComponent,
    BtnDeleteComponent,
    ConfirmationComponent,
    FormSubscriberComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ServicesGuard,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
  ? FormGroup<ControlsOf<T[K]>>
  : FormControl<T[K]>;
};