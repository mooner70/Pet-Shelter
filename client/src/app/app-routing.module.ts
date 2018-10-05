import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: 'pets', component: PetsComponent},
  {path: 'new', component: NewComponent},
  {path: 'pets/:id/edit', component: EditComponent},
  {path: 'pets/:id', component: DetailsComponent},
  {path: '', pathMatch: 'full', redirectTo:'/pets'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
