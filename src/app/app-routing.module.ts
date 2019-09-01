import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListColorsComponent } from './components/list-colors/list-colors.component';

const routes: Routes = [
  { path: 'list', component: ListColorsComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
