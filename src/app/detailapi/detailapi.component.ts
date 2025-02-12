
import { Component } from '@angular/core';
import { RestapiService } from '../rest-api.service';

@Component({
  selector: 'app-detailapi',
  standalone: false,
  templateUrl: './detailapi.component.html',
  styleUrl: './detailapi.component.css'
})
export class DetailapiComponent {
userdata: any;
    constructor(public api: RestapiService) {
   
    }

    submit (data: any) {

      this.api.getDataById(data.id).subscribe(d => this.userdata = d)
    }

}