import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';
import { MyModuleModule } from './my-module/my-module.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UserModule,
    MyModuleModule
  ]
})
export class FeatureModule { }
