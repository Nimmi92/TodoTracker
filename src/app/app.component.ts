import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  items = [{'task': 'Reading','editing':false}];
  completedItems = [];
  form;
  
  constructor(private formBuilder: FormBuilder) {
  	
  }

  ngOnInit() {
  	 this.form = this.formBuilder.group({
      item: this.formBuilder.control(''),
      editItemBox: this.formBuilder.control('')
     })
  }

  addItem(item) {
  	this.items.push({'task':item, 'editing':false});
  	event.target.value = '';
  }

  editItem(index,editedValue) {
  	this.items[index].editing = true;
  }

  saveItem(index,editedValue) {
    this.items[index].editing = false;
  	this.items[index].task = editedValue;
  }

  deleteItem(index) {
  	let completedItem = this.items.splice(index,1)[0];
  	console.log(completedItem)
  	this.completedItems.push(completedItem);
  }

}

