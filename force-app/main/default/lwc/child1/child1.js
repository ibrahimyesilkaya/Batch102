import { LightningElement } from 'lwc';

export default class Child1 extends LightningElement {
    handlClick(){
        const myEvent = new CustomEvent('clicked');
        this.dispatchEvent(myEvent);
    }
}