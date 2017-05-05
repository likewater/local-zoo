import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <div class="form-group">
      <label>Enter Animal Species:</label>
      <input [(ngModel)]="childSelectedAnimal.species">
    </div>
    <div class="form-group">
      <label>Enter Animal Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
    </div>
    <div class="form-group">
      <label>Enter Animal Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
    </div>
    <div class="form-group">
      <label>Enter Animal Diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet">
    </div>
    <div class="form-group">
      <label>Enter Animal Location:</label>
      <input [(ngModel)]="childSelectedAnimal.location">
    </div>
    <div class="form-group">
      <label>Enter Number of Caretakers:</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
    </div>
    <div class="form-group">
      <label>Enter Animal Sex:</label>
      <input [(ngModel)]="childSelectedAnimal.sex">
    </div>
    <div class="form-group">
      <label>Enter Animal Likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes">
    </div>
    <div class="form-group">
      <label>Enter Animal Dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
    </div>
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
