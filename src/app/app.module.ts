import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './component/page/main-page/main-page.component';
import {HttpClientModule} from '@angular/common/http';
import { SpecialistsComponent } from './component/block/specialist/specialists/specialists.component';
import { SpecialistTabComponent } from './component/block/specialist/specialist-tab/specialist-tab.component';
import { UrlSanitizePipe } from './pipe/sanitize/url-sanitize/url-sanitize.pipe';
import { CurrentSpecialistComponent } from './component/block/specialist/current-specialist/current-specialist.component';
import { PluralFormPipe } from './pipe/format/plural-form/plural-form.pipe';
import { ShopsComponent } from './component/block/shop/shops/shops.component';
import { MainBlockComponent } from './component/block/main/main-block/main-block.component';
import { ShopItemComponent } from './component/block/shop/shop-item/shop-item.component';
import { FirstLettersPipe } from './pipe/format/first-letters/first-letters.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SpecialistsComponent,
    SpecialistTabComponent,
    UrlSanitizePipe,
    CurrentSpecialistComponent,
    PluralFormPipe,
    ShopsComponent,
    MainBlockComponent,
    ShopItemComponent,
    FirstLettersPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
