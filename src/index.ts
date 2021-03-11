type ArrayOfThree = [number, number, number];

interface Coefficients {
  a: number;
  b: number;
  c: number;
}

export default class SteinhartHart {
  private resistances: ArrayOfThree;
  private temperaturesK: ArrayOfThree;
  private coefficients: Coefficients;
  constructor(resistances: ArrayOfThree, temperaturesK: ArrayOfThree) {
    this.resistances = [...resistances];
    this.temperaturesK = [...temperaturesK];
	this.coefficients = this.calculateCoefficients();
  }

  public getCoefficients(): Coefficients {
	return this.coefficients;
  }

  public getKTemperatureAtResistance(resistance: number) {
	const {a, b, c} = this.coefficients;
	return Number((1/(a+(b*Math.log(resistance))+(c*(Math.pow(Math.log(resistance), 3))))).toFixed(3));
  }

  private calculateCoefficients(): Coefficients {
	const [rA, rB, rC] = this.resistances;
    const [tA, tB, tC] = this.temperaturesK;
    const l1 = Math.log(rA);
    const l2 = Math.log(rB);
    const l3 = Math.log(rC);
    const y1 = 1 / tA;
    const y2 = 1 / tB;
    const y3 = 1 / tC;
    const u2 = (y2 - y1) / (l2 - l1);
    const u3 = (y3 - y1) / (l3 - l1);
    const c = ((u3 - u2) / (l3 - l2)) * Math.pow(l1 + l2 + l3, -1);
    const b = u2 - c * (Math.pow(l1, 2) + l1 * l2 + Math.pow(l2, 2));
    const a = y1 - (b + Math.pow(l1, 2) * c) * l1;
    return { a, b, c };
  }
}
