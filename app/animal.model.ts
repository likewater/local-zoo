export class Animal {
  public youngAnimal: boolean = false;
  public youngAnimalAge: number = 0;
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string ) {
    // if (youngAnimalAge >= 3){
    //   youngAnimal = false;
    // } else {
    //   youngAnimal = true;
    // }
  }
}
