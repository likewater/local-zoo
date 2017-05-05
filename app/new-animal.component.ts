import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'new-animal',
  template: `
  <h1>New Animal</h1>
  <div>
    <div class="form-group">
      <label>Enter Animal Species:</label>
      <input #newSpecies class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Animal Name:</label>
      <input #newName class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Animal Age:</label>
      <input #newAge class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Animal Diet:</label>
      <input #newDiet class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Animal Location:</label>
      <input #newLocation class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Animal Caretakers:</label>
      <input #newCaretakers class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Animal Sex:</label>
      <input #newSex class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Animal Likes:</label>
      <input #newLikes class="form-control">
    </div>
    <div class="form-group">
      <label>Enter Animal Dislikes:</label>
      <input #newDislikes class="form-control">
    </div>
    <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name,  parseInt(age), diet, location, parseInt(caretakers), sex, likes, dislikes;
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
