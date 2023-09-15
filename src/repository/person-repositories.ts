import { Count, Person } from '@/types/person-types';
import { db } from 'config/db-connection';

const findById = (id: Number) => {
  return db.query<Person>(`SELECT * FROM "people" WHERE id = $1;`, [id]);
};

const count = () => {
  return db.query<Count>(`SELECT COUNT(*) FROM "people";`);
};

export const person_repository = {
  findById, count
};
