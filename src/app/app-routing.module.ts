import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { APIService } from './service/api.service';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home', component: HomeComponent,
    resolve: {
      anime:
        (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          return inject(APIService).listAnime();
        },

    },
  },
  {
    path: 'home/:query', component: HomeComponent,
    /* resolve: {
      shows: 
        (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          return inject(APIService).searchShow(route.paramMap.get('query')!);
        },
      
    }, */
  },
  {
    path: 'detail/:id', component: DetailComponent,
    /* resolve: {
      show: 
        (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
          return inject(APIService).getShowDetail(route.paramMap.get('id')!);
        },
    }, */
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }