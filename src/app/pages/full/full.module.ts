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
import { ConsolidatedComponent } from './consolidated/consolidated.component';
import { CvComponent } from './cv/cv.component';
import { TechnicianListComponent } from './technician/technician-list/technician-list.component';
import { TechniciansComponent } from './technician/technicians/technicians.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkOrderComponent } from './work-order/work-order.component';
import { WorkOrderCreateComponent } from './work-order/work-order-create/work-order-create.component';
import { WorkOrderListComponent } from './work-order/work-order-list/work-order-list.component';
import { WorkOrderDetailComponent } from './work-order/work-order-detail/work-order-detail.component';


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
    TechniciansComponent,
    ConsolidatedComponent,
    CvComponent,
    TechnicianListComponent,
    UsersListComponent,
    WorkOrderComponent,
    WorkOrderCreateComponent,
    WorkOrderListComponent,
    WorkOrderDetailComponent
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
