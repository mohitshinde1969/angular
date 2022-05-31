import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "dashboard",
    component:DashboardComponent
  },
  {
    path: "banners",
    loadChildren: () =>
      import("./banner/banner.module").then((m) => m.BannerModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
