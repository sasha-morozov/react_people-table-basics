// eslint-disable-next-line
/// <reference types="react-scripts" />

interface PersonFromApi {
  name: string;
  sex: string;
  born: number;
  died: number;
  fatherName: string;
  motherName: string;
  slug: string;
}

interface Person extends PersonFromApi {
  mother: string;
  father: string;
}
