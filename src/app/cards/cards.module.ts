import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { OverlayModule } from '@angular/cdk/overlay'
const routes: Routes = [
  {
    path: '',
    component: CardListComponent
  }
];

@NgModule({
  declarations: [CardComponent, CardListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OverlayModule
  ],
  providers: [NzModalService]
})
export class CardsModule { }
