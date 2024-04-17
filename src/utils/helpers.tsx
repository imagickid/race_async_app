function generateRandomColor(): string {
  const randomInt = Math.floor(Math.random() * 0xffffff);
  let hexString = randomInt.toString(16);
  hexString = hexString.padStart(6, '0');
  return '#' + hexString;
}

function createHundredCarsArray(brand: string[], model: string[]) {
  const shuffledBrands: string[] = brand.sort(() => Math.random() - 0.5);
  const shuffledModel: string[] = model.sort(() => Math.random() - 0.5);

  const carNames: string[] = shuffledBrands.flatMap(brand =>
    shuffledModel.map(model => `${brand} ${model}`)
  );

  return carNames;
}

export function createHundredCarObjects(
  carBrans: string[],
  carModel: string[]
) {
  const carNames = createHundredCarsArray(carBrans, carModel);
  const carsList = carNames.map(carName => ({
    name: carName,
    color: generateRandomColor(),
  }));

  return carsList;
}

export function identifyCurrentPlace(element: HTMLElement) {
  const currElemPosPx = getComputedStyle(element).transform;
  const currElemPosNum = Number(currElemPosPx.slice(19, -4));
  return currElemPosNum;
}
