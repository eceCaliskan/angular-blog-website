import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Output() post: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

addClick(){

  this.post.emit();

}
}
