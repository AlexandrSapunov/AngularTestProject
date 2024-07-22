import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EditReminderComponent } from './components/edit-reminder/edit-reminder.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'',redirectTo:'main', pathMatch:'full'},
    {path:'main',component:MainComponent},
    {path:'edit',component:EditReminderComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
