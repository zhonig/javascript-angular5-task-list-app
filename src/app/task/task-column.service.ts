import { Injectable } from '@angular/core';

import { TaskColumn } from './task-column';
import { TASK_COLUMNS } from '../../api/task-column-data';

@Injectable()
export class TaskColumnService {
  pItems: TaskColumn[] = TASK_COLUMNS;

  constructor() { }

  getTaskColumnsFromData(): TaskColumn[] {
    return this.pItems;
  }
  addTaskColumns(taskcolumn: TaskColumn) {
    this.pItems.push(taskcolumn);
  }
  updateTaskColumn(taskcolumn: TaskColumn) {
    const index = this.pItems.map(x => x.key).indexOf(taskcolumn.key);
    this.pItems[index] = taskcolumn;
  }
  deleteTaskColumn(taskcolumn: TaskColumn) {
    this.pItems.splice(this.pItems.indexOf(taskcolumn), 1);
  }
}