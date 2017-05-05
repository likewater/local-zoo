import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component ({
  selector: 'animal-list',
  template: `
  <select (change)="onSelect($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="matureAnimals" selected="selected">Mature Animals</option>
    <option value="youngAnimals">Young Animals</option>
  </select>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity">{{currentAnimal.name}}
      : a {{currentAnimal.species}}
      <ul>
      <li>Age: {{currentAnimal.age}}</li>
      <li>Diet: {{currentAnimal.diet}}</li>
      <li>Location: {{currentAnimal.location}}</li>
      <li>Caretakers: {{currentAnimal.caretakers}}</li>
      <li>Sex: {{currentAnimal.sex}}</li>
      <li>Likes: {{currentAnimal.likes}}</li>
      <li>Dislikes: {{currentAnimal.dislikes}}</li>
      <button (click)="increaseAnimalAgeClicked(currentAnimal)">Increase Age</button>
      <button
      (click)="decreaseAnimalAgeClicked(currentAnimal)">Decrease Age</button>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </ul>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  @Output() clickSellPintSender = new EventEmitter();
  

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  sellPintButtonClicked(animalToSell: Animal) {
    this.clickSellPintSender.emit(animalToSell);
  }

  filterByMaturity: string = "matureAnimals";

  onSelect(optionFromMenu) {
    this.filterByMaturity = optionFromMenu;
  }
}
