import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingsComponent } from './meetings/meetings.component';
import { NewClientComponent } from './new-client/new-client.component';

const routes: Routes = [
  
   
    { path: 'new-client', component: NewClientComponent },
    { path: 'meetings', component: MeetingsComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
