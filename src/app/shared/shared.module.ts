import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { FarmChartComponent } from './farm-chart/farm-chart.component';
import { SpeciesChartComponent } from './species-chart/species-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { RouterModule } from '@angular/router';
import { AnimalInfoComponent } from './animal-info/animal-info.component';
import { AnimalListSpecieComponent } from './animal-list-specie/animal-list-specie.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    ContainerComponent,
    FarmChartComponent,
    SpeciesChartComponent,
    AnimalListComponent,
    AnimalInfoComponent,
    AnimalListSpecieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgChartsModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ContainerComponent,
    AnimalListComponent,
    FarmChartComponent,
    SpeciesChartComponent
  ]
})
export class SharedModule { }
