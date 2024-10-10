import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExteriorPageComponent } from './components/exterior-page/exterior-page.component';
import { InteriorPageComponent } from './components/interior-page/interior-page.component';
import { HeadlightPageComponent } from './components/headlight-page/headlight-page.component';
import { EnginePageComponent } from './components/engine-page/engine-page.component';
import { SinglePageComponent } from './components/single-page/single-page.component';

const routes: Routes = [
  { path: 'exterior', component: ExteriorPageComponent },
  { path: 'interior', component: InteriorPageComponent },
  { path: 'headlight', component: HeadlightPageComponent },
  { path: 'engine', component: EnginePageComponent },
  { path: 'singles', component: SinglePageComponent },
  { path: '', redirectTo: '/interior', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
