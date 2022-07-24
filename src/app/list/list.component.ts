import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  tasks = [];
  users = this.backend.users();
  filterString = '';

  ngOnInit(): void {
    this.backend.tasks().subscribe((res)=>{
      this.tasks = res;
    });
  }

  description = new FormControl('', Validators.required);
  filterDescription = new FormControl(''); 

  constructor(private backend: BackendService) {}


/**
 * call back to add task, subscribe to RXJS callback and update
 * current displayed tasks
 */
  public addNewTask() {
   const ob = this.backend.newTask({
      description: this.description.value,
    });

    ob.subscribe((res)=>{
      this.backend.tasks().subscribe((res)=>{
        this.tasks = res;
      });
    })
  }

  /**
   * filter task, get tasklist from rxjs and filter out tasks not needed
   * and display on front-end, only if filter string is used
   */
  public filterTask() {
      this.filterString = this.filterDescription.value;
      this.backend.tasks().subscribe((res)=>{
        this.tasks = res.filter((task)=>{
          if(this.filterString) {
            return task.description.includes(this.filterString);
          } else {
            return true;
          }
        });
      });
  }

  /**
   * TODO: Assign tasks and complete tasks
   */
}
