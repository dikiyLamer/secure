import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { PersonFormComponent } from './persons-page/persons-form/person-form/person-form.component';
import { PersonsPageComponent } from './persons-page/persons-page.component';

import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';





const routes: Routes = [
  {
    path:'', canActivate: [AuthGuard], component: SiteLayoutComponent,  children: [
      {path:'persons', component: PersonsPageComponent},
      //{ path: '**', redirectTo: '', pathMatch: 'full'}

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    initialNavigation: 'enabledNonBlocking',
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
