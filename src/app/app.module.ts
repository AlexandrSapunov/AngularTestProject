import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { MainComponent } from "./components/main/main.component";
import { EditReminderComponent } from "./components/edit-reminder/edit-reminder.component";
import { Reminder } from "./models/reminder";

@NgModule({
    declarations:[
    ],
    imports:[
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule.forRoot(routes),
        MainComponent,
        EditReminderComponent,
        AppComponent,
        Reminder,
    ],
    providers:[],
    bootstrap:[],
})


export class AppModule{}

bootstrapApplication(AppModule);

