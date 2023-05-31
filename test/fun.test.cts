import { test } from "uvu"
import { equalTo, expect, is } from "great-expectations"
import { Thing, displayableThingName } from "../lib/thing"

test("this is funny", () => {
  expect(8, is(equalTo(8)))
})

test("the name is as expected", () => {
  const testThing: Thing = {
    id: "test-1",
    name: "Test Thing",
    age: 47
  }

  expect(displayableThingName(testThing), is(equalTo("TEST THING is 47 years old!")))
})

test.run()