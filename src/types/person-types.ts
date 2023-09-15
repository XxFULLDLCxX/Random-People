export type Person = {
  id: Number;
  firstName: String;
  lastName: String;
};

export type Count = {
  count: Number
}

export type PersonInput = Omit<Person, 'id'>;
