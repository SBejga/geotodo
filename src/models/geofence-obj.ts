import { Location } from './location';
import { Todo } from './todo';
import { Notification } from './notification';
import { UUID } from 'angular2-uuid';

export class GeofenceObject {

    id:string;
    todoId:string;
    latitude:number;
    longitude:number; 
    transitionType:number;
    radius:number;
    notification:Notification;

    constructor(todo:Todo, location:Location) {
       this.id = UUID.UUID();
       this.todoId = todo.id;
       this.latitude = location.latitude;
       this.longitude = location.longitude;
       this.transitionType = location.transitionType;
       this.radius = location.radius;
       this.notification = new Notification( `${todo.title} in ${location.name}`, todo.description );
    }

    updateGeofenceValues(todo:Todo, location:Location) {
        this.latitude = location.latitude;
        this.longitude = location.longitude;
        this.radius = location.radius;
        this.notification = new Notification( `${todo.title} in ${location.name}`, todo.description );
        return this;
    }
}