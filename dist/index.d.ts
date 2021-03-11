declare type ArrayOfThree = [number, number, number];
interface Coefficients {
    a: number;
    b: number;
    c: number;
}
export default class SteinhartHart {
    private resistances;
    private temperaturesK;
    private coefficients;
    constructor(resistances: ArrayOfThree, temperaturesK: ArrayOfThree);
    getCoefficients(): Coefficients;
    getKTemperatureAtResistance(resistance: number): number;
    private calculateCoefficients;
}
export {};
