import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { RecommendationSectionComponent } from './recommendation-section/recommendation-section.component';

const routes: Routes = [
  { path: "", redirectTo: '/recommendations', pathMatch: 'full' },
  { path: "profile", component: ProfileSectionComponent },
  { path: "recommendations", component: RecommendationSectionComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
