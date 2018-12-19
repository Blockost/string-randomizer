import "jasmine";
import { StringRandomizer } from "../src/index";

const length = 16;

describe("When generating", () => {
  it(`a random string of length ${length} with letters and numbers`, () => {
    const randomString = StringRandomizer.random(16, true, true);

    // Expect the string to have the right length
    expect(randomString.length).toBe(length);
    // Expect the string to have at least one letter (case insensitive)
    expect(randomString).toMatch("[a-zA-Z]");
    // Expect the string to have at least one number
    expect(randomString).toMatch("[0-9]");
  });

  it(`a random string of length ${length} with letters only`, () => {
    const randomString = StringRandomizer.random(16, true, false);

    // Expect the string to have the right length
    expect(randomString.length).toBe(length);
    // Expect the string to have at least one letter (case insensitive)
    expect(randomString).toMatch("[a-zA-Z]");
    // Expect the string to have no number in it
    expect(randomString).not.toMatch("[0-9]");
  });

  it(`a random string of length ${length} with numbers only`, () => {
    const randomString = StringRandomizer.random(16, false, true);

    // Expect the string to have the right length
    expect(randomString.length).toBe(length);
    // Expect the string to have no letter in it
    expect(randomString).not.toMatch("[a-zA-Z]");
    // Expect the string to have at least one number
    expect(randomString).toMatch("[0-9]");
  });

  it(`a random string of length ${length} with neither letters nor numbers`, () => {
    const randomString = StringRandomizer.random(16, false, false);

    // Expect the string to be empty
    expect(randomString.length).toBe(0);
  });
});
