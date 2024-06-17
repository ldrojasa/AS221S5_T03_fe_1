import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationComponent } from './modules/translation/translation.component';

const routes: Routes = [
  { path: 'translator', component: TranslationComponent },
  { path: '', redirectTo: '/translator', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
