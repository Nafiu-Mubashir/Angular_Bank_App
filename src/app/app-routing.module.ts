import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { LeavePageGuard } from './leave-page.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TransferComponent } from './transfer/transfer.component';
import { WalletComponent } from './wallet/wallet.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"signup", component:SignUpComponent, canDeactivate:[LeavePageGuard]},
  {path:"signin", component:SignInComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"transfer", component:TransferComponent},
  {path:"deposit", component:DepositComponent},
  {path:"withdraw", component:WithdrawComponent},
  {path:"wallet", component:WalletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
