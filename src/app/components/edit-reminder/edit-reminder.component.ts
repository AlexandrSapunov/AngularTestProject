import { Component, OnInit } from '@angular/core';
import { Reminder } from '../../models/reminder';
import { CommonModule } from '@angular/common';
import { ReminderService } from '../../services/reminder.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Status } from '../../models/status';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-edit-reminder',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Status,
    Reminder,
  ],
  templateUrl: './edit-reminder.component.html',
  styleUrl: './edit-reminder.component.scss'
})
export class EditReminderComponent implements OnInit {
  reminder!:Reminder;
  statusList:Status[]=[];
  selectedStatus:string='';

  constructor(private svcReminder:ReminderService,
              private svcStatus:StatusService,
              private router:Router){
    this.reminder = this.copyTo(svcReminder.getSelectedReminder().reminder)
  }

  ngOnInit(): void {
    this.svcStatus.getStatusList().subscribe((statuses) => {
      this.statusList = statuses;
      this.selectedStatus = this.reminder.status.statusName; 
    });
  }

  save(){
    this.svcReminder.updateReminder(this.svcReminder.selectedReminderIndex,this.reminder);
    this.router.navigate(['main']);
  }

  goBack(){
    this.router.navigate(['main']);
  }

  convertDateToDatetimeLocal(date: Date): string {
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  updateDateOfCreation(event:Event):void{
    const inputElement= event.target as HTMLInputElement|null;
    if(inputElement)
    this.reminder.dateOfCreation=new Date(inputElement.value);
  }

  updateDateOfCompletion(event: Event):void{
    const inputElement = event.target as HTMLInputElement | null;
    if(inputElement)
    this.reminder.dateOfCompletion= new Date(inputElement.value);
  }

  updateStatus(newStatus: string){
    console.log(this.reminder.status.statusName);
    this.reminder.status.statusName = newStatus;
    console.log(this.reminder.status.statusName);
  }

  copyTo(perviosReminder:Reminder):Reminder{
    var newReminder:Reminder ={...perviosReminder};
    return newReminder;
  }
}
