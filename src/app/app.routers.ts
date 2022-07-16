import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';


const ROUTES: Routes = [    
    {path:'home', component: HomeComponent},
    {path:'customers', component: CustomersComponent},
    {path:'**', component: HomeComponent}
];

@NgModule({
    imports:
        [RouterModule.forRoot(ROUTES)],
    exports:
        [RouterModule]
})

export class AppRoutingModule{}