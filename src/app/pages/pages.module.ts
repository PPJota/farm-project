import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { RoutingModule } from './routing.module';
//Pages
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FarmInfoComponent } from './farm-info/farm-info.component';
import { AnimalInfoComponent } from './animal-info/animal-info.component';

@NgModule({
  declarations: [
    HomeComponent,
    FarmInfoComponent,
    AnimalInfoComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
