/**
 * Utility class to create random string.
 */
export class StringRandomizer {
  private static readonly ALPHABETIC_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
  private static readonly ALPHABETIC_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private static readonly NUMBERS = "0123456789";

  /**
   * Creates a random string of given length.
   *
   * @param length the length of random string to create
   * @param letters if true, generated string may include alphabetic characters
   * @param numbers if true, generated string may include numeric characters
   */
  static random(length: number, letters = true, numbers = true): string {
    let chars = "";

    if (letters) {
      chars +=
        StringRandomizer.ALPHABETIC_LOWERCASE +
        StringRandomizer.ALPHABETIC_UPPERCASE;
    }

    if (numbers) {
      chars += StringRandomizer.NUMBERS;
    }

    return Array(length)
      .fill(0)
      .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
      .join("");
  }

  /**
   * Creates a random string of given length containing letters only.
   *
   * @param length the length of random string to create
   */
  static randomAlphabetic(length: number): string {
    return StringRandomizer.random(length, true, false);
  }

  /**
   * Creates a random string of given length containing numbers only.
   *
   * @param length the length of random string to create
   */
  static randomNumeric(length: number): string {
    return StringRandomizer.random(length, false, true);
  }

  /**
   * Creates a random string of given length containing both letters and numbers.
   *
   * @param length the length of random string to create
   */
  static randomAlphaNumeric(length: number): string {
    return StringRandomizer.random(length, true, true);
  }
}
