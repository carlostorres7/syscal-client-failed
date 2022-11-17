import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolidatedComponent } from './consolidated/consolidated.component';
import { ContactComponent } from './contact/contact.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { TechnicianListComponent } from './technician/technician-list/technician-list.component';
import { TechniciansComponent } from './technician/technicians/technicians.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { CreateWorkOrdersComponent } from './work-order/create-work-orders/create-work-orders.component';
import { WorkOrdersListComponent } from './work-order/work-orders-list/work-orders-list.component';
import { WorkOrdersComponent } from './work-order/work-orders/work-orders.component';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "contact", component: ContactComponent },
  { path: "services", component: ServicesComponent },
  { path: "products", component: ProductsComponent },
  { path: "technicians", component: TechniciansComponent },
  { path: "technicians/list", component: TechnicianListComponent },
  { path: "consolidated", component: ConsolidatedComponent },
  { path: "work-order-list", component: WorkOrdersListComponent },
  { path: "work-orders", component: WorkOrdersComponent },
  { path: "create-work-orders", component: CreateWorkOrdersComponent },
  { path: "cv", component: CvComponent },
  { path: "users/list", component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullRoutingModule { }
