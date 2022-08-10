export enum Animal {
  DOG = 'dog',
  CAT = 'cat'
}

class PetOwner {
  private pets: Animal[]

  constructor(...pets: Animal[]) {
    this.pets = pets
  }

  public getPets = () => this.pets

  public adopt = (...pets) => {
    this.pets = this.pets.concat(pets)
  }
}

export default PetOwner
