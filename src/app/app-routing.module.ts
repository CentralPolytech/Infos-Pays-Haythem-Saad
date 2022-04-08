import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsComponent } from './Components/Continents/Continents.component';
import { ListeComponent } from './Components/Liste/Liste.component';
import { DetailsComponent } from './Components/Details/Details.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'pays', component: ListeComponent},
                        {path: 'pays/:continent', component: ListeComponent},
                        {path: 'pays/details/:name', component: DetailsComponent},
                        {path: 'pays/:name', component: ListeComponent},
                        {path: 'continents', component: ContinentsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
