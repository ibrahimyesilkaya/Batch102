import { LightningElement } from 'lwc';

export default class OninputOrnegi extends LightningElement {
    isim='veli';
    handleInput(event){
       this.isim=event.target.value; 
       console.log('değişilklik var');
    }
}