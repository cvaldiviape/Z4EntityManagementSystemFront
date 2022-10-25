import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendingCreateComponent } from './pages/sending-create/sending-create.component';
import { SendingListComponent } from './pages/sending-list/sending-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: SendingListComponent
  },
  {
    path: 'create',
    component: SendingCreateComponent
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
export class SendingRoutingModule { }
