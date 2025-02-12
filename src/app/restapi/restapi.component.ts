import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../rest-api.service';

@Component({
  selector: 'app-restapi',
  standalone: false,
  templateUrl: './restapi.component.html',
  styleUrl: './restapi.component.css'
})
export class RestapiComponent implements OnInit{
  public users: any;

  constructor(private api: RestapiService) { }

  ngOnInit(): void {
    this.api.getDatas().subscribe(d => this.users = d)
  }
}