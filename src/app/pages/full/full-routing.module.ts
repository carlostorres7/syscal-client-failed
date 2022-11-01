import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "contact", component: ContactComponent },
  { path: "services", component: ServicesComponent },
  { path: "product", component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullRoutingModule { }
