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
import { RestapiComponent } from './restapi/restapi.component';
import { DetailapiComponent } from './detailapi/detailapi.component';
import { RestapiService } from "./rest-api.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@NgModule({
    imports : [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, AnotherComponent,NestedComponent, GenderPipe,TaxPipe, TformComponent, RformComponent, RestapiComponent, DetailapiComponent],
    bootstrap:[AppComponent,AnotherComponent, TformComponent, RestapiComponent, DetailapiComponent],
    providers:[RestapiService]
})
export class AppModule{

}