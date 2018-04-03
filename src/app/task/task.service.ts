import { Injectable } from '@angular/core';

import { Task } from './task';
import { TASKS } from '../../api/task-data';

@Injectable()
export class TaskService {
  pItems: Task[] = TASKS;

  constructor() { }

  getTasksFromData(): Task[] {
    return this.pItems;
  }
  addTask(task: Task) {
    this.pItems.push(task);
  }
  updateTask(task: Task) {
    const index = this.pItems.map(x => x.id).indexOf(task.id);
    this.pItems[index] = task;
  }
  deleteTask(task: Task) {
    this.pItems.splice(this.pItems.indexOf(task), 1);
  }
  toggleTask(task: Task) {
    task.done = !task.done;
  }
}