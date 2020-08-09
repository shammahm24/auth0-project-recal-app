import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:
      [
        {
          path: 'scan',
          children:
            [
              {
                path: '',
                loadChildren: '../scan/scan.module#ScanPageModule'
              }
            ]
        },
        {
          path: 'reward',
          children:
            [
              {
                path: '',
                loadChildren: '../reward/reward.module#RewardPageModule'
              }
            ]
        },
        {
          path: 'profile',
          children:
            [
              {
                path: '',
                loadChildren: '../profile/profile.module#ProfilePageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/home/scan',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/home/scan',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
