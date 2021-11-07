import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Output() loginEvent = new EventEmitter<string>();

  constructor() { } 

  login(value: string): void {
    this.loginEvent.emit(value);
  }
  
  ngOnInit(): void {
  }

}
