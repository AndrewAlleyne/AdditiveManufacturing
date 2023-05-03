import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EngineeringModule } from './engineering/engineering.module';
import { OpsControlRoutingModule } from './opscontrol-routing.component';
import { SupplyChainManagementComponent } from './supply-chain-management/supply-chain-management.component';
import { SalesMarketingComponent } from './sales-marketing/sales-marketing.component';
import { AdminComponent } from './admin/admin.component';
import { FinanceComponent } from './finance/finance.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  imports: [CommonModule, OpsControlRoutingModule],
  //Import selectors that are available to this component
  declarations: [
    SupplyChainManagementComponent,
    SalesMarketingComponent,
    AdminComponent,
    FinanceComponent,
    AccountsComponent,
  ],
})
export class OpsModule {}
