import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '369e10ae-3cd4-4911-b519-532443d0fd1d',
};

export const sampleWithPartialData: IAuthority = {
  name: '6ad3529e-9131-4cf0-bccc-daeaca194b39',
};

export const sampleWithFullData: IAuthority = {
  name: 'c932d3a6-ce6f-49ab-be4f-597e080a46ed',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
