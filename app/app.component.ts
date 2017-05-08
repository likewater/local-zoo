import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <img id="jumbotronLogo" src="resources/images/zebras.png" alt="Two zebras">
      <h1>Pittsburgh Zoo Animal Tracker</h1>
    </div>
    <div class="row">
      <div class="col-lg-12">
      <!--<nav class="navbar navbar-default" id="nav">
      <h4 class="navbar-text">ACB Interns Preferences</h4>
      <p class="navbar-text"><a href="#" rel="/resources/styles/black.css">Black on White</a></p>
      <p class="navbar-text"><a href="#" rel="/resources/styles/white.css">White on Black</a></p>
      <p class="navbar-text"><a href="#" rel="build/css/blue.css">Yellow on Blue</a></p>
    </nav>-->
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" (clickIncreaseAgeSender)="increaseAge($event)" (clickDecreaseAgeSender)="decreaseAge($event)">
        </animal-list>
      </div>
    </div>
      <edit-animal [childSelectedAnimal]="selectedAnimal"(doneButtonClickedSender)="finishedEditing()">
      </edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)">
      </new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal: null;

  masterAnimalList: Animal[] = [
    new Animal('Artic Fox', 'Moon', 3, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shade', 'Loud Noises'),
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
    if (currentAnimal.age >= 3){
      currentAnimal.youngAnimal = false;
    }
  }

  decreaseAge(currentAnimal) {
    currentAnimal.age = currentAnimal.age - 1;
    if (currentAnimal.age <= 2){
      currentAnimal.youngAnimal = true;
    }
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
