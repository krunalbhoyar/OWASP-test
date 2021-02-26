import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';
import { LoaderService } from './loader.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    BetaComponent,
    GammaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoaderService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
