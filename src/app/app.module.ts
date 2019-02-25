import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from "@angular/common/http";
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './common/login/login.component';
import { ProductnameComponent } from './product/productname/productname.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ListproductComponent } from './product/listproduct/listproduct.component';
import { MobileNumbrtFormatDirective } from './directives/mobile-numbrt-format.directive';
import { UsNumbrtFormatDirective } from './directives/us-numbrt-format.directive';
import { UnlessDirective } from './directives/unless.directive';
import { MobileFormatPipe } from './pipe/mobile-format.pipe';
import { Comp2compComponent } from './common/comp2comp/comp2comp.component';
import { ChildComponent } from './common/comp2comp/child/child.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    ProductnameComponent,
    AddproductComponent,
    ListproductComponent,
    MobileNumbrtFormatDirective,
    UsNumbrtFormatDirective,
    UnlessDirective,
    MobileFormatPipe,
    Comp2compComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
