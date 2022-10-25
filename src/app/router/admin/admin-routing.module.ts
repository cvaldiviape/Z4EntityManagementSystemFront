import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../../shared/components/layouts/admin-layout/admin-layout.component';
import { AdminGuard } from '../../security/guards/admin/admin.guard';
import { AdminChildGuard } from '../../security/guards/admin/admin-child.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AdminGuard], 
    canActivateChild: [AdminChildGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../modules/home/home.module').then(x => x.HomeModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('../../modules/contact/contact.module').then(x => x.ContactModule),
      },
      {
        path: 'sending',
        loadChildren: () => import('../../modules/sending/sending.module').then(x => x.SendingModule),
      },
      {
        path: 'received',
        loadChildren: () => import('../../modules/received/received.module').then(x => x.ReceivedModule),
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
