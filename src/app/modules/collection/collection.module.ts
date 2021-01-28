import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent,
  },
];

@NgModule({
  declarations: [CollectionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule, SharedModule],
})
export class CollectionModule {}
