import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    //1- Bunu elle degilde checkbox ile de yapabilirdik
    flag = false;
    display = false;
    handleChange(event){
        this.display = event.target.checked;
    }
}