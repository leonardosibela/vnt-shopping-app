import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    canActivate: [AuthService]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthService]
  },
  {
    path: '',
    redirectTo: 'shopping-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
