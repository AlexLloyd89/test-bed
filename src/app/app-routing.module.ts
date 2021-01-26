import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: "search",
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule),
    canActivateChild:[AuthGuard]
  },
  {
    path: "**",
    loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
