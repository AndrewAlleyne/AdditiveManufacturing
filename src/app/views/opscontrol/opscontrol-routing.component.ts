import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EngineeringComponent } from './engineering/engineering.component';
import { SupplyChainManagementComponent } from './supply-chain-management/supply-chain-management.component';
import { SalesMarketingComponent } from './sales-marketing/sales-marketing.component';
import { FinanceComponent } from './finance/finance.component';
import { AdminComponent } from './admin/admin.component';
import { AccountsComponent } from './accounts/accounts.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Operations and Control',
    },
    children: [
      {
        path: 'engineering',
        component: EngineeringComponent,
        data: {
          title: 'Engineering',
        },
        pathMatch: 'full',
      },
      {
        path: 'supply-chain-management',
        component: SupplyChainManagementComponent,
        data: {
          title: 'Supply Chain Management',
        },
        pathMatch: 'full',
      },
      {
        path: 'sales-marketing',
        component: SalesMarketingComponent,
        data: {
          title: 'Sales Marketing',
        },
        pathMatch: 'full',
      },
      {
        path: 'finance',
        component: FinanceComponent,
        data: {
          title: 'Finance',
        },
        pathMatch: 'full',
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: {
          title: 'Administration',
        },
        pathMatch: 'full',
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        data: {
          title: 'Accounts',
        },
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpsControlRoutingModule {}
