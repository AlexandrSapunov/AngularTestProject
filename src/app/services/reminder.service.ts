import { Injectable } from '@angular/core';
import { Reminder } from '../models/reminder';
import { BehaviorSubject } from 'rxjs';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {

  selectedReminderIndex:number=0;
  //test list
  private reminders:Reminder[]=[
    { shortDescription: 'Купить продукты', fullDescription: 'Молоко, хлеб, яйца', dateOfCreation: new Date(), dateOfCompletion: new Date(), status: {  statusName: 'Запланирован' } },
    { shortDescription: 'Позвонить маме', fullDescription: 'Поздравить с днем рождения', dateOfCreation: new Date(), dateOfCompletion: new Date(), status: { statusName: 'Исполнен' } },
    { shortDescription: 'Закончить проект', fullDescription: 'Последний срок завтра', dateOfCreation: new Date(), dateOfCompletion: new Date(), status: { statusName: 'Запланирован' } },
    { shortDescription: 'Сходить в спортзал', fullDescription: 'Сегодня день ног', dateOfCreation: new Date(), dateOfCompletion: new Date(), status: { statusName: 'Новый' } },
    { shortDescription: 'Прочитать книгу', fullDescription: 'Главы 5-7', dateOfCreation: new Date(), dateOfCompletion: new Date(), status: { statusName: 'Запланирован' } },
    { shortDescription: 'Оплатить счета', fullDescription: 'За электричество и воду', dateOfCreation: new Date(), dateOfCompletion: new Date(), status: { statusName: 'Новый' } },
    { shortDescription: 'Посмотреть фильм', fullDescription: 'Комедия боевик', dateOfCreation: new Date(), dateOfCompletion: new Date(), status: { statusName: 'Исполнен' } },
    { shortDescription: 'Запланировать отпуск', fullDescription: 'Пляжное направление', dateOfCreation: new Date(), dateOfCompletion: new Date(), status: { statusName: 'Запланирован' } },
    { shortDescription: 'Убрать дом', fullDescription: 'Вытереть пыль и пылесосить', dateOfCreation: new Date(), dateOfCompletion: new Date(), status: { statusName: 'Новый' } },
    { shortDescription: 'Посетить совещание', fullDescription: 'Обсудить обновления по проекту', dateOfCreation: new Date(), dateOfCompletion: new Date(), status: { statusName: 'Запланирован' } }
  ];

  private reminderSubjects = new BehaviorSubject<Reminder[]>(this.reminders);

  private selectedReminder:Reminder=new Reminder();

  constructor() { }

  addReminder(reminder:Reminder){
    if(reminder.dateOfCompletion>reminder.dateOfCreation){
      if(reminder.shortDescription.length>0 && reminder.fullDescription.length>0){
        if(reminder.status!=null){
          this.reminders.push(reminder);
          this.reminderSubjects.next(this.reminders);
        }
      }
    }
  }

  delReminder(index:number){
    this.reminders.splice(index,1);
  }

  updateReminder(index:number,updateReminder:Reminder){
    this.reminders[index] = updateReminder;
    this.reminderSubjects.next(this.reminders);
  }

  getReminders(){
    return this.reminderSubjects.asObservable();
  }



  setSelectedReminder(index:number,selectedReminder:Reminder){
    this.selectedReminderIndex=index;
    this.selectedReminder=selectedReminder;
  }

  getSelectedReminder(){
    return {
      reminder:this.selectedReminder,
      index:this.selectedReminderIndex,
    };
  }
}

