import { faker } from "@faker-js/faker";

export class ProductMother {
  static create(params) {
    return {
      id: faker.datatype.uuid(),
      img: faker.image.abstract(),
      brand: faker.word.noun(),
      model: faker.word.noun(),
      price: faker.datatype.number(),
      cpu: faker.datatype.number(),
      ram: faker.datatype.number(),
      os: faker.datatype.uuid(),
      resolution: `${faker.datatype.number()} x ${faker.datatype.number()}`,
      battery: faker.word.noun(),
      cameras: faker.word.noun(),
      dimensions: `${faker.datatype.number()} x ${faker.datatype.number()}`,
      weight: faker.datatype.number(),
      colors: faker.datatype.array(),
      storage: faker.datatype.array(),
      ...params,
    };
  }
}
