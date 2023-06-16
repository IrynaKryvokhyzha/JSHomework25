class PhoneNumber{
	constructor(telephoneNum){
		this.telephoneNum = telephoneNum
	}
	checkTelNum(){
		let telCode
		if(this.telephoneNum.match(/^066/)||
			this.telephoneNum.match(/^095/)||
			this.telephoneNum.match(/^050/)||
			this.telephoneNum.match(/^099/)){
			telCode = 'MTS'
		}
		else if(this.telephoneNum.match(/^067/)||
					this.telephoneNum.match(/^097/)||
					this.telephoneNum.match(/^096/)||
					this.telephoneNum.match(/^098/)){
			telCode = 'Kyivstar'
		}
		else
			telCode = 'Wrong number'
		return telCode
	}
	[Symbol.toPrimitive](hint){
		let result
		switch (hint) {
			case 'string': result = `${this.telephoneNum} -> ${this.checkTelNum()}`
				break;
			case 'number': result = this.telephoneNum
				break;
			default: result = `${this.telephoneNum}->'Невідомий оператор'`
				break;
		}
		return result
	}
}

const s1 = new PhoneNumber('0506078449')
alert(s1);
const s2 = new PhoneNumber('0986078449')
alert(s2);
const s3 = new PhoneNumber('0986078449')
alert('Hello'+s3);
const s4 = new PhoneNumber('06078449')
alert(s4);





// -----------------------------------------------------------------------------


