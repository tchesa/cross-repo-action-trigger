export declare enum Animal {
    DOG = "dog",
    CAT = "cat"
}
declare class PetOwner {
    private pets;
    constructor(...pets: Animal[]);
    getPets: () => Animal[];
    adopt: (...pets: any[]) => void;
}
export default PetOwner;
