import { LightningElement } from 'lwc';

export default class NameUpper extends LightningElement {
    fName= 'John';
    lName = 'conner';

    get fullUpper(){
       //return this.fName.toUpperCase() + ' ' + this.lName.toUpperCase();
        return `Isim soyisim:${this.fName.toUpperCase()} ${this.lName.toUpperCase()}`; //back tic ile farklı yazıldı
    }
}