import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpService } from './services/http.service';
import { AppRoutingModule } from './/app-routing.module';
import { ListColorsComponent } from './components/list-colors/list-colors.component';


@NgModule({
  declarations: [
    AppComponent,
    ListColorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
