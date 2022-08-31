import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import '@angular/common/locales/global/nl';
import {KeyboardShortcutsModule} from 'ng-keyboard-shortcuts';
import {HotKeysModule} from "ng-hotkeys";

@NgModule({
  declarations: [AppComponent],
  imports: [HttpClientModule, BrowserModule, KeyboardShortcutsModule.forRoot(), HotKeysModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
