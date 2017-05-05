export class Animal {
  public youngAnimal: boolean = false;
  public animalAge: number = 1;
  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string ) {}
}