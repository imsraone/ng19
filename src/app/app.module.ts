import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AnotherComponent } from "./another.component";
import { NestedComponent } from "./nested.component";
import { GenderPipe } from "./gender.pipe";
import { TaxPipe } from "./tax.pipe";
import { FormsModule } from "@angular/forms";
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';

@NgModule({
    imports : [BrowserModule, FormsModule],
    declarations: [AppComponent, AnotherComponent,NestedComponent, GenderPipe,TaxPipe, TformComponent, RformComponent],
    bootstrap:[AppComponent,AnotherComponent, TformComponent]
})
export class AppModule{

}