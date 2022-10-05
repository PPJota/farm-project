import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FarmApiService } from 'src/app/service/farm-api.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {


  public listAnimals = [];
  public farmId: string = '';
  public farmName: string = '';

  constructor(private farmApi: FarmApiService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.farmId = params['id'])
  }

  ngOnInit(): void {
    this.farmApi.getAnimalsAliveWeek(this.farmId, 0).subscribe({
      next: (res) => {
        this.listAnimals = res['hydra:member'];
        this.farmName = res['hydra:member'][0]['farm']['Name'];
      },
      error: (err) => {
        err
      }
    })
  }
}
