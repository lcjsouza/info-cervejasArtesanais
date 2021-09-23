import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { CarouselCervejasComponent } from './carousel-cervejas/carousel-cervejas.component';
import { EstilosCervejasComponent } from './estilos-cervejas/estilos-cervejas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConteudoComponent,
    CarouselCervejasComponent,
    EstilosCervejasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
