import { person_repository } from '@/repository/person-repositories';

const read = async () => {
  const {
    rows: [person],
  } = await person_repository.count();
  const n = Number(person.count);
  if (!isNaN(n)) {
    const id = Math.floor(Math.random() * n) + 1;
    console.log(id);
    
    return (await person_repository.findById(id)).rows;
  }
};
export const person_service = {
  read,
};
