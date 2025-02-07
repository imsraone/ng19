import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AnotherComponent } from "./another.component";
import { NestedComponent } from "./nested.component";

@NgModule({
    imports : [BrowserModule],
    declarations: [AppComponent, AnotherComponent,NestedComponent],
    bootstrap:[AppComponent,AnotherComponent]
})
export class AppModule{

}