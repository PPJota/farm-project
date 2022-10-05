import { Component, OnInit } from '@angular/core';
import { FarmApiService } from 'src/app/service/farm-api.service';

@Component({
  selector: 'app-animal-list-specie',
  templateUrl: './animal-list-specie.component.html',
  styleUrls: ['./animal-list-specie.component.css']
})
export class AnimalListSpecieComponent implements OnInit {

  public listAnimals=[];
  constructor(private farmApi:FarmApiService) { }

  ngOnInit(): void {
    
  }

}
