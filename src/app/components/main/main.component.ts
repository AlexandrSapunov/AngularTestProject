import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../../services/reminder.service';
import { Reminder } from '../../models/reminder';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  reminders:Reminder[] =[];
  constructor(private svcReminder:ReminderService,private router:Router){
  }

  ngOnInit(): void {
    this.svcReminder.getReminders().subscribe(reminders => {
      this.reminders = reminders;
    });
  }

  editReminder(index:number,reminder:Reminder){
    console.log(reminder.shortDescription);
    this.svcReminder.setSelectedReminder(index,reminder);
    this.router.navigate(['edit']);
  }

}
