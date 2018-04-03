import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';
import { Task } from './task';
import { TaskService } from './task.service';
import { TaskColumn } from './task-column';
import { TaskColumnService } from './task-column.service';
import { OrderPipe } from 'ngx-order-pipe';

export enum SaveMode {
  None,
  New,
  Edit
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  formGroup: FormGroup;
  tasks: Task[];
  saveMode: SaveMode = SaveMode.None;
  headerText: string;
  taskColumns: TaskColumn[];
  columnOrder: string;
  reverseColumnOrder: boolean = false;

  constructor(private _taskService: TaskService, private _taskcolumnService: TaskColumnService, private _formBuilder: FormBuilder, private orderPipe: OrderPipe) {
    this.formGroup = _formBuilder.group({
      'id': [''],
      'name': ['', Validators.required],
      'due': '',
      'done': '',
      'notes': ''
    });
  }

  ngOnInit() {
    this.getTaskColumns();
    this.getTasks();
    this.columnOrder = this.taskColumns[0].key;
  }

  getTaskColumns() {
    this.taskColumns = this._taskcolumnService.getTaskColumnsFromData();
  }

  getTasks() {
    this.tasks = this._taskService.getTasksFromData();
  }

  saveTask(task: Task) {
    if (task.id) {
      this._taskService.updateTask(task);
    } else {
      this._taskService.addTask(task);
    }
    this.saveMode = SaveMode.None;
  }

  toggleTask(task: Task) {
    this._taskService.toggleTask(task);
  }

  removeTask(task: Task) {
    this._taskService.deleteTask(task);
  }

  cancelEditTask() {
    this.formGroup.reset();
    this.saveMode = SaveMode.None;
  }

  showEditForm(task: Task) {
    if (!task) {
      return;
    }
    this.saveMode = SaveMode.Edit;
    this.headerText = 'Edit Task';
    const editedTask = Object.assign({}, task, { due: this.applyLocale(task.due) });
    this.formGroup.setValue(editedTask);
  }

  showNewForm() {
    this.formGroup.reset();
    this.saveMode = SaveMode.New;
    this.headerText = 'New Task';
  }

  showForm() {
    return this.saveMode !== SaveMode.None;
  }

  applyLocale(due) {
    return new DatePipe(navigator.language).transform(due, 'y-MM-dd');
  }

  updateOrder(column) {
    if(column.key === 'action' || column.key === 'done') {
      return;
    }

    let columnKey = column.key;
    if (this.columnOrder === columnKey) {
      this.reverseColumnOrder = !this.reverseColumnOrder;
    }
    this.columnOrder = columnKey;
  }
}