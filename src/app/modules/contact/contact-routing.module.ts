import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactCreateComponent } from './pages/contact-create/contact-create.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ContactListComponent
  },
  {
    path: 'create',
    component: ContactCreateComponent
  },
  {
    path: 'edit',
    component: ContactEditComponent
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
export class ContactRoutingModule { }
