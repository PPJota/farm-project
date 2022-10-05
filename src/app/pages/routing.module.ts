import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalInfoComponent } from './animal-info/animal-info.component';
import { FarmInfoComponent } from './farm-info/farm-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {
      path: '',
      component: HomeComponent
   },
   {
      path:'farm/:id',
      component: FarmInfoComponent
   },
   {
      path:'animal/:id',
      component: AnimalInfoComponent
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class RoutingModule { }
