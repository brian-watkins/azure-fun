export interface Thing {
  id: string
  name: string
  age: number
}

export function displayableThingName(thing: Thing): string {
  return `${thing.name.toUpperCase()} is ${thing.age} years old!`
}