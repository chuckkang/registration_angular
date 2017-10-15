import { Component } from '@angular/core';
import { User } from './user';
import { Address } from './address';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';

  user = new User();
  address = new Address();
completed: string;	
  onSubmit() {
		
		this.completed = "THank you fro registering with {{user.firstName }}. We just sent you a confrimation email at " + this.user.email + "and we will send all mail to " + this.address.street
		this.resetForm(this.user);
  }

  resetForm(user): void{
	this.user = new User();
	this.address = new Address();
	//this.completed = false;
  }

}
