import { Injectable } from '@angular/core';
import { Status } from '../models/status';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private statusList:Status[]=[
    {statusName:'Новый'},
    {statusName:'Исполнен'},
    {statusName:'Запланирован'},
    {statusName:'Просрочен'},
  ];

  private statusListSubject = new BehaviorSubject<Status[]>(this.statusList);

  constructor() { }

  getStatusList(){
    return this.statusListSubject.asObservable();
  }

  show(){
    for(let i=0;i<this.statusList.length;i++){
      console.log(this.statusList[i].statusName);
    }
  }
}
