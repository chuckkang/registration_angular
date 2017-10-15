export class Address {
	street: string = '';
	unit: string ='';
	city: string = '';
	state: string = '';

	printAddress(): string{
		return this.street + ", " + this.unit + ", " + this.city + ", " + this.state;
	}
	showAddress(): void{
		console.log(this.printAddress)
	}
}
