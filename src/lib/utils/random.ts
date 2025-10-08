export enum RandomType {
  LETTERS = 'letters',
  NUMBER = 'number',
  MIXED = 'mixed',
}

export const random = (length: number, type: RandomType) => {
  let result = '';
  let counter = 0;


  const characters = type === RandomType.LETTERS
    ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : type === RandomType.NUMBER
      ? '0123456789' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  const charactersLength = characters.length;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}