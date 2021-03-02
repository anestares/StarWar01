import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlanetsPageRoutingModule } from './planets-routing.module';
import { RouterModule } from '@angular/router';
import { PlanetsPage } from './planets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PlanetsPageRoutingModule,
    RouterModule.forChild([
      {
      path: '',
      component: PlanetsPage
      }
    ])  
  ],
  declarations: [PlanetsPage]
})
export class PlanetsPageModule {}
