import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceivedListComponent } from './pages/received-list/received-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ReceivedListComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivedRoutingModule { }
