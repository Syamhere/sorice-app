import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackToWorkComponent } from './components/back-to-work/back-to-work.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'back-to-works', component: BackToWorkComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
