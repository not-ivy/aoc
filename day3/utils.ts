const letterToPriority = (letter: string): number =>
  letter === letter.toLowerCase()
    ? letter.charCodeAt(0) - 96
    : letter.charCodeAt(0) - 38;

const commonChars = (str1: string, str2: string): string[] => {
  return str2
    .split("")
    .filter((char) => str1.includes(char))
    .filter((char, index, arr) => arr.indexOf(char) === index);
};

export { commonChars, letterToPriority };
