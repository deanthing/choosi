import { Injectable } from '@angular/core';
import { IGroup, IUser } from 'src/models/userData';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  appPhase: string = '';
  user?: IUser;
  token?: string;
  group?: IGroup;

  constructor() {
    console.log('constructing service');
  }

  getGroup() {
    return this.group;
  }
}
