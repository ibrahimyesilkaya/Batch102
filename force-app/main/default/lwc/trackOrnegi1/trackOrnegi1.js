import { LightningElement, track } from 'lwc'; //1- reaktif olmasi icin track ekledik

export default class TrackOrnegi1 extends LightningElement {
    
     @track customer = {   //1- reaktif olmasi icin track ekledik
        adi : "Ali",
        soyadi : "Can",
        yasi : 35
    }
    //3-
    trackOrnek(event){
        this.customer.adi = event.target.value; //deploy
        this.customer.soyadi = event.target.value;
        this.customer.yasi = event.target.value;
    }
}