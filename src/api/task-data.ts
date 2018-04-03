import { Task } from '../app/task/task';

export const TASKS: Task[] = [
 {
   id: 1,
   name: 'Lunch with Zack',
   notes: 'Steakhouse',
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
   name: 'Go grocery shopping',
   notes: '',
   due: new Date(new Date().setDate(new Date().getDate() - 1)),
   done: true
 }
];