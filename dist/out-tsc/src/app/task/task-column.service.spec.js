"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var task_column_service_1 = require("./task-column.service");
describe('TaskColumnService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [task_column_service_1.TaskColumnService]
        });
    });
    it('should be created', testing_1.inject([task_column_service_1.TaskColumnService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=task-column.service.spec.js.map