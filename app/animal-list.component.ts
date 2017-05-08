import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component ({
  selector: 'animal-list',
  template: `
  <div class="panel panel-default">
    <div class="panel-heading"><select (change)="onSelect($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="matureAnimals">Mature Animals (+2)</option>
      <option value="youngAnimals">Young Animals</option>
      </select>
    </div>
  <div class="panel-body">
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let currentAnimal of childAnimalList | maturity:filterByMaturity">
        <h3><b>{{currentAnimal.name}}: {{currentAnimal.species}}</b></h3>
        <ul>
        <li class="list-group-item"><b>Age:</b> {{currentAnimal.age}}</li>
        <li class="list-group-item"><b>Diet:</b> {{currentAnimal.diet}}</li>
        <li class="list-group-item"><b>Location:</b> {{currentAnimal.location}}</li>
        <li class="list-group-item"><b>Caretakers:</b> {{currentAnimal.caretakers}}</li>
        <li class="list-group-item"><b>Sex:</b> {{currentAnimal.sex}}</li>
        <li class="list-group-item"><b>Likes:</b> {{currentAnimal.likes}}</li>
        <li class="list-group-item"><b>Dislikes:</b> {{currentAnimal.dislikes}}</li>
        <button (click)="increaseAnimalAgeClicked(currentAnimal)">Increase Age</button>
        <button (click)="decreaseAnimalAgeClicked(currentAnimal)">Decrease Age</button>
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button>
        </ul>
      </li>
    </ul>
  </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  @Output() clickIncreaseAgeSender = new EventEmitter();
  @Output() clickDecreaseAgeSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  increaseAnimalAgeClicked(ageToIncrease: Animal) {
    this.clickIncreaseAgeSender.emit(ageToIncrease);
  }

  decreaseAnimalAgeClicked(ageToDecrease: Animal) {
    this.clickDecreaseAgeSender.emit(ageToDecrease);
  }

  filterByMaturity: string = "matureAnimals";

  onSelect(optionFromMenu) {
    this.filterByMaturity = optionFromMenu;
  }
}
