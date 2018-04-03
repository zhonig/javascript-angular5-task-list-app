webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/api/task-column-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TASK_COLUMNS; });
var TASK_COLUMNS = [
    {
        key: 'name',
        value: 'Name'
    }, {
        key: 'due',
        value: 'Due'
    }, {
        key: 'notes',
        value: 'Notes'
    }, {
        key: 'done',
        value: 'Done'
    }, {
        key: 'action',
        value: 'Action'
    }
];


/***/ }),

/***/ "./src/api/task-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TASKS; });
var TASKS = [
    {
        id: 1,
        name: 'Lunch with Yvonne',
        notes: 'Italian Food',
        due: new Date(new Date().setDate(new Date().getDate() + 4)),
        done: false
    }, {
        id: 2,
        name: 'Visit Mom',
        notes: 'Bring flowers',
        due: new Date(new Date().setDate(new Date().getDate() + 5)),
        done: false
    }, {
        id: 3,
        name: 'Do the groceries',
        notes: '',
        due: new Date(new Date().setDate(new Date().getDate() - 1)),
        done: true
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-task-list></app-task-list>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Task List App';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_task_component__ = __webpack_require__("./src/app/task/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_task_service__ = __webpack_require__("./src/app/task/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_control_messages_component__ = __webpack_require__("./src/app/task/control-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_task_column_service__ = __webpack_require__("./src/app/task/task-column.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__task_task_component__["a" /* TaskComponent */],
                __WEBPACK_IMPORTED_MODULE_6__task_control_messages_component__["a" /* ControlMessagesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_order_pipe__["a" /* OrderModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__task_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_8__task_task_column_service__["a" /* TaskColumnService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/task/control-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_service__ = __webpack_require__("./src/app/task/validation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ControlMessagesComponent = /** @class */ (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2__validation_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */])
    ], ControlMessagesComponent.prototype, "control", void 0);
    ControlMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'control-messages',
            template: "<div *ngIf=\"errorMessage !== null\" class=\"alert alert-danger\">{{errorMessage}}</div>"
        }),
        __metadata("design:paramtypes", [])
    ], ControlMessagesComponent);
    return ControlMessagesComponent;
}());



/***/ }),

/***/ "./src/app/task/task-column.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskColumnService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_task_column_data__ = __webpack_require__("./src/api/task-column-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskColumnService = /** @class */ (function () {
    function TaskColumnService() {
        this.pItems = __WEBPACK_IMPORTED_MODULE_1__api_task_column_data__["a" /* TASK_COLUMNS */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TaskColumnService);
    return TaskColumnService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    text-align: center;\r\n    text-decoration: underline;\r\n}\r\n\r\ntable tr.done td:not(:last-child) {\r\n    text-decoration: line-through;\r\n}\r\n\r\nform, table {\r\n    margin: 16px 0px;\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n    border-left: 5px solid #42A948; /* green */\r\n  }\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\">\n    <h1>My Tasks</h1>\n    <div *ngIf=\"!showForm()\">\n      <table class=\"table table-bordered table-striped table-hover\">\n        <thead>\n          <tr>\n            <th *ngFor=\"let column of taskColumns\" class=\"text-center\" (click)=\"updateOrder(column)\">\n              {{ column.value }}\n              <span class=\"fa\" [hidden]=\"column.key !== columnOrder\" [ngClass]=\"{'fa-sort-up': reverseColumnOrder, 'fa-sort-down': !reverseColumnOrder }\"></span>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let task of tasks | orderBy: columnOrder:reverseColumnOrder:'case-insensitive'\" [class.done]=\"task.done\">       \n            <td>{{ task.name }}</td>\n            <td>{{ task.due | date: 'EE, MMM dd' }}</td>       \n            <td>{{ task.notes }}</td>\n            <td class=\"text-center\">\n              <input type=\"checkbox\" [checked]=\"task.done\" (click)=\"toggleTask(task)\">\n            </td>\n            <td class=\"text-center\">\n              <button class=\"btn btn-info\" (click)=\"showEditForm(task)\">\n                <i class=\"fa fa-edit\"></i>\n              </button>\n              <button class=\"btn btn-danger\" (click)=\"removeTask(task)\">\n                <i class=\"fa fa-remove\"></i>\n              </button>\n            </td>       \n          </tr>\n        </tbody>\n      </table>\n      <button class=\"btn btn-success\" (click)=\"showNewForm()\">\n        <i class=\"fa fa-plus\"></i>\n      </button>\n    </div>\n    <form *ngIf=\"showForm()\" [formGroup]=\"formGroup\" (ngSubmit)=\"saveTask(formGroup.value)\">\n      <div>\n        <h2>{{ headerText }}</h2>\n        <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" required />\n            <control-messages [control]=\"formGroup.controls.name\"></control-messages>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"due\">Due:</label>\n            <input class=\"form-control\" type=\"date\" name=\"due\" formControlName=\"due\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"done\">Done:</label>\n            <input type=\"checkbox\" name=\"done\" formControlName=\"done\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"notes\">Notes:</label>\n            <input class=\"form-control\" type=\"text\" name=\"notes\" formControlName=\"notes\" />\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formGroup.invalid\">Save</button>\n        <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancelEditTask()\">Cancel</button>\n      </div>\n    </form>\n  </div>\n </div>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SaveMode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("./src/app/task/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_column_service__ = __webpack_require__("./src/app/task/task-column.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__ = __webpack_require__("./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SaveMode;
(function (SaveMode) {
    SaveMode[SaveMode["None"] = 0] = "None";
    SaveMode[SaveMode["New"] = 1] = "New";
    SaveMode[SaveMode["Edit"] = 2] = "Edit";
})(SaveMode || (SaveMode = {}));
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
            'name': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
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
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */](navigator.language).transform(due, 'y-MM-dd');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-task-list',
            template: __webpack_require__("./src/app/task/task.component.html"),
            styles: [__webpack_require__("./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_4__task_column_service__["a" /* TaskColumnService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5_ngx_order_pipe__["b" /* OrderPipe */]])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/app/task/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_task_data__ = __webpack_require__("./src/api/task-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskService = /** @class */ (function () {
    function TaskService() {
        this.pItems = __WEBPACK_IMPORTED_MODULE_1__api_task_data__["a" /* TASKS */];
    }
    TaskService.prototype.getTasksFromData = function () {
        return this.pItems;
    };
    TaskService.prototype.addTask = function (task) {
        this.pItems.push(task);
    };
    TaskService.prototype.updateTask = function (task) {
        var index = this.pItems.map(function (x) { return x.id; }).indexOf(task.id);
        this.pItems[index] = task;
    };
    TaskService.prototype.deleteTask = function (task) {
        this.pItems.splice(this.pItems.indexOf(task), 1);
    };
    TaskService.prototype.toggleTask = function (task) {
        task.done = !task.done;
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/task/validation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required'
        };
        return config[validatorName];
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map