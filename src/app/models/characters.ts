
export interface Characters{

  name: string;
  house: string;
  yearOfBirth: string;
  ancestry:string;
  gender:string;
  wand: {
    wood: string;
    core:string;
    length:string;

  }[];
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive:boolean;
  image: string;

}
