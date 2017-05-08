import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'new-animal',
  template: `
  <div class="panel panel-default">
    <div class="panel-heading"><h3><b>Create New Animal Profile</b></h3>
    </div>
    <div class="panel-body">
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
        <label>Enter Number of Animal Caretakers:</label>
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
      <button class="btn btn-default" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';"><b>Add</b></button>
    </div>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: string, diet: string, location: string, caretakers: string, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name,  parseInt(age), diet, location, parseInt(caretakers), sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
