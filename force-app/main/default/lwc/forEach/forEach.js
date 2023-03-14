import { LightningElement } from 'lwc';

export default class ForEach extends LightningElement {
    cityList = ['Mardin', 'erzincan', 'kars'];
    customerList = [
  {
   id:1,
   name: "Jim Carrey",
   phone: "+999 888 77 66",
   email: "jim@carrey.com",
   imgURL: "https://media.licdn.com/dms/image/D4D03AQGKSqcbe8jXsg/profile-displayphoto-shrink_800_800/0/1677275311707?e=1684368000&v=beta&t=EolvkLa8mqm9oW2qJ7wuTZmOdnFFIwqEKRPr1hMNXJ0"
  },
  {
    id:2,
    name: "Jack Bauer",
    phone: "+888 777 66 55",
    email: "jack@bauer.com",
    imgURL:
    "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
  },
  {
    id:3,
    name: "Chuck Norris",
    phone: "+777 666 55 44",
    email: "chuck@norris.com",
    imgURL:
    "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
  }
]; 
}