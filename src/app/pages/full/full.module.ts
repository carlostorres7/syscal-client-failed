import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullRoutingModule } from './full-routing.module';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { NgChartsModule } from 'ng2-charts';
import { CountsReportComponent } from './home/counts-report/counts-report.component';
import { TodayReportComponent } from './home/today-report/today-report.component';
import { ServicesReportComponent } from './home/services-report/services-report.component';
import { ProductReportComponent } from './home/product-report/product-report.component';
import { OrderReportComponent } from './home/order-report/order-report.component';
import { MonthReportComponent } from './home/month-report/month-report.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { WorkOrdersComponent } from './work-order/work-orders/work-orders.component';
import { ConsolidatedComponent } from './consolidated/consolidated.component';
import { CvComponent } from './cv/cv.component';
import { TechnicianListComponent } from './technician/technician-list/technician-list.component';
import { TechniciansComponent } from './technician/technicians/technicians.component';
import { WorkOrdersListComponent } from './work-order/work-orders-list/work-orders-list.component';
import { CreateWorkOrdersComponent } from './work-order/create-work-orders/create-work-orders.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ContactComponent,
    CountsReportComponent,
    TodayReportComponent,
    ServicesReportComponent,
    ProductReportComponent,
    OrderReportComponent,
    MonthReportComponent,
    ServicesComponent,
    ProductsComponent,
    WorkOrdersComponent,
    TechniciansComponent,
    ConsolidatedComponent,
    CvComponent,
    TechnicianListComponent,
    WorkOrdersListComponent,
    CreateWorkOrdersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    FullRoutingModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FullModule { }
