import { Task } from '../app/task/task';

export const TASKS: Task[] = [
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