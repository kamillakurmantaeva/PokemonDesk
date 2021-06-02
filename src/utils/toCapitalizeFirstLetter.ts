function toCapitalizeFirstLetter(str: string) {
  if (str) {
    const newString = str.toLowerCase();
    const letter = str[0].toUpperCase();

    return newString.replace(/^[a-zа-я]/, letter);
  }

  return null;
}

export default toCapitalizeFirstLetter;
