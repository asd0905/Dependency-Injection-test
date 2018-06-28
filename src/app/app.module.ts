import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserDemoComponent,
    UserDemoInjectorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
