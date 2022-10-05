import { Component, OnInit } from '@angular/core';
import { FarmApiService } from 'src/app/service/farm-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public listOfFarm: Array<any> = [];

  constructor(private farmApi: FarmApiService) { }

  ngOnInit(): void {
    this.farmApi.getFromApi('farms').subscribe({
      next: (res) => {
        this.listOfFarm = res['hydra:member'];
      },
      error: (err) => {
        err
      }
    })
  }

}
