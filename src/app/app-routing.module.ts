import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountModule } from './account/account.module';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},
{
  path:'contact',
  component:ContactusComponent
}
,
{
 path:'account',
 loadChildren:()=> AccountModule

}
,{
  path:'about',
  component:AboutComponent
 
 },
{
  path:'userDashboard',
  loadChildren:()=> UserModule
 
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
