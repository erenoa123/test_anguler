import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { ErangelComponent } from './maps/erangel/erangel.component';

const routes: Routes = [{ path: 'maps', component: ErangelComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
