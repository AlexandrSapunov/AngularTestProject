import { stat } from "fs";
import { Status } from "./status";
import { NgModule,Inject } from "@angular/core";

@NgModule({
    declarations:[],
    imports:[],
    providers:[],
})

export class Reminder {

    shortDescription:string='';
    fullDescription:string='';
    dateOfCreation:Date = new Date();
    dateOfCompletion:Date = new Date();
    status!:Status;

}
