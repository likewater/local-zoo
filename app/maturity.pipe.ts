import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe ({
  name: "maturity",
  pure: false
})

export class MaturityPipe implements PipeTransform {
  transform(input: Animal[], animalVolume) {
    var output: Animal[] = [];
    if (animalVolume === "matureAnimals") {
      for (var i=0; i < input.length; i++) {
        if (input[i].youngAnimal === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (animalVolume === "youngAnimals") {
      for (var i=0; i < input.length; i++) {
        if (input[i].youngAnimal === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
