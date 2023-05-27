import { test } from "uvu"
import { equalTo, expect, is } from "great-expectations"

test("this is funny", () => {
  expect(8, is(equalTo(5)))
})

test.run()