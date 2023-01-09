import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './cards/card-list/card-list.component';

const routes: Routes = [
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: '',
    redirectTo: '/cards',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
