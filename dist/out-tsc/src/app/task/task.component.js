"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var task_service_1 = require("./task.service");
var task_column_service_1 = require("./task-column.service");
var ngx_order_pipe_1 = require("ngx-order-pipe");
var SaveMode;
(function (SaveMode) {
    SaveMode[SaveMode["None"] = 0] = "None";
    SaveMode[SaveMode["New"] = 1] = "New";
    SaveMode[SaveMode["Edit"] = 2] = "Edit";
})(SaveMode = exports.SaveMode || (exports.SaveMode = {}));
var TaskComponent = /** @class */ (function () {
    function TaskComponent(_taskService, _taskcolumnService, _formBuilder, orderPipe) {
        this._taskService = _taskService;
        this._taskcolumnService = _taskcolumnService;
        this._formBuilder = _formBuilder;
        this.orderPipe = orderPipe;
        this.saveMode = SaveMode.None;
        this.reverseColumnOrder = false;
        this.formGroup = _formBuilder.group({
            'id': [''],
            'name': ['', forms_1.Validators.required],
            'due': '',
            'done': '',
            'notes': ''
        });
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.getTaskColumns();
        this.getTasks();
        this.columnOrder = this.taskColumns[0].key;
    };
    TaskComponent.prototype.getTaskColumns = function () {
        this.taskColumns = this._taskcolumnService.getTaskColumnsFromData();
    };
    TaskComponent.prototype.getTasks = function () {
        this.tasks = this._taskService.getTasksFromData();
    };
    TaskComponent.prototype.saveTask = function (task) {
        if (task.id) {
            this._taskService.updateTask(task);
        }
        else {
            this._taskService.addTask(task);
        }
        this.saveMode = SaveMode.None;
    };
    TaskComponent.prototype.toggleTask = function (task) {
        this._taskService.toggleTask(task);
    };
    TaskComponent.prototype.removeTask = function (task) {
        this._taskService.deleteTask(task);
    };
    TaskComponent.prototype.cancelEditTask = function () {
        this.formGroup.reset();
        this.saveMode = SaveMode.None;
    };
    TaskComponent.prototype.showEditForm = function (task) {
        if (!task) {
            return;
        }
        this.saveMode = SaveMode.Edit;
        this.headerText = 'Edit Task';
        var editedTask = Object.assign({}, task, { due: this.applyLocale(task.due) });
        this.formGroup.setValue(editedTask);
    };
    TaskComponent.prototype.showNewForm = function () {
        this.formGroup.reset();
        this.saveMode = SaveMode.New;
        this.headerText = 'New Task';
    };
    TaskComponent.prototype.showForm = function () {
        return this.saveMode !== SaveMode.None;
    };
    TaskComponent.prototype.applyLocale = function (due) {
        return new common_1.DatePipe(navigator.language).transform(due, 'y-MM-dd');
    };
    TaskComponent.prototype.updateOrder = function (column) {
        if (column.key === 'action' || column.key === 'done') {
            return;
        }
        var columnKey = column.key;
        if (this.columnOrder === columnKey) {
            this.reverseColumnOrder = !this.reverseColumnOrder;
        }
        this.columnOrder = columnKey;
    };
    TaskComponent = __decorate([
        core_1.Component({
            selector: 'app-task-list',
            templateUrl: './task.component.html',
            styleUrls: ['./task.component.css']
        }),
        __metadata("design:paramtypes", [task_service_1.TaskService, task_column_service_1.TaskColumnService, forms_1.FormBuilder, ngx_order_pipe_1.OrderPipe])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map