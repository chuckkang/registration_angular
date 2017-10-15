export class User {
	id: number = null;
	firstName: string = '';
	lastName: string = '';
	email: string = '';
	password: string = '';

	printUser(): string{
		return this.id + ", " + this.firstName + ", " + this.lastName + ", " + this.email + ", " + this.password
	}
	showUser(){
		console.log(User);
	}

}
