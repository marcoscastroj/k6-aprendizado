import { Faker } from "k6/x/faker"

let faker = new Faker()

export function randomEmail() {
   return faker.person.email();
}

export function pwd(){
  return 'pwd123'
}

export function randomUser(){
  return{
    email : randomEmail(),
    password : pwd()
  };
}