import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component';
import { ConcatComponent } from './view/concat/concat.component';
import { CourseComponent } from './view/course/course.component';
import { WorkComponent } from './view/work/work.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // 將根路徑導向到 'home'
    pathMatch: 'full', // 確保完全匹配根路徑
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'concat',
    component: ConcatComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
