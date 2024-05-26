import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 2481,
  login: '0',
};

export const sampleWithPartialData: IUser = {
  id: 20670,
  login: '7',
};

export const sampleWithFullData: IUser = {
  id: 5123,
  login: 'N**@a\\e0\\$-3hpc\\xq\\XD8cT\\.I',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
