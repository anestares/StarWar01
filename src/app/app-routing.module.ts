import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
  loadChildren:'./pages/tabs/tabs.module#TabsPageModule' 
  },
  {
    path: 'people-details',
    loadChildren: () => import('./pages/people-details/people-details.module').then( m => m.PeopleDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
 
export class AppRoutingModule { }
