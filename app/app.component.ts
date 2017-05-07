import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>Pittsburgh Zoo Animal Tracker</h1>
  <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" (clickIncreaseAgeSender)="increaseAge($event)" (clickDecreaseAgeSender)="decreaseAge($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal"(doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal: null;

  masterAnimalList: Animal[] = [
    new Animal('Artic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shade', 'Loud Noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forect Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope based'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
  ];

  editAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  increaseAge(currentAnimal) {
    currentAnimal.age = currentAnimal.age + 1;
    // return currentAnimal.age;
  }

  decreaseAge(currentAnimal) {
    currentAnimal.age = currentAnimal.age - 1;
    // return currentAnimal.age;
  }

  // increaseAge(currentAnimal) {
  //    if (currentAnimal.age >= 1) {
  //     currentAnimal.age = currentAnimal.age + 1;
  //   } else {
  //      currentAnimal.matureAnimal = true;
  //    }
  // }

  // decreaseAge(currentAnimal) {
  //   if (currentAnimal.age >= 1) {
  //     currentAnimal.age = currentAnimal.age - 1;
  //   }
  //   else {
  //     currentAnimal.youngAnimal = true;
  //   }
  // }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
