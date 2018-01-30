import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UiTreeComponent } from './components/ui-tree/ui-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UiTreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
