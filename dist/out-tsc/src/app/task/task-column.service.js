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
var task_column_data_1 = require("../../api/task-column-data");
var TaskColumnService = /** @class */ (function () {
    function TaskColumnService() {
        this.pItems = task_column_data_1.TASK_COLUMNS;
    }
    TaskColumnService.prototype.getTaskColumnsFromData = function () {
        return this.pItems;
    };
    TaskColumnService.prototype.addTaskColumns = function (taskcolumn) {
        this.pItems.push(taskcolumn);
    };
    TaskColumnService.prototype.updateTaskColumn = function (taskcolumn) {
        var index = this.pItems.map(function (x) { return x.key; }).indexOf(taskcolumn.key);
        this.pItems[index] = taskcolumn;
    };
    TaskColumnService.prototype.deleteTaskColumn = function (taskcolumn) {
        this.pItems.splice(this.pItems.indexOf(taskcolumn), 1);
    };
    TaskColumnService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TaskColumnService);
    return TaskColumnService;
}());
exports.TaskColumnService = TaskColumnService;
//# sourceMappingURL=task-column.service.js.map