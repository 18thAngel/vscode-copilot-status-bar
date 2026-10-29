
export class Helpers {
    // Private constructor to prevent instantiation of this utility class.
    private constructor() { }
    /**
     * Rounds a number to the specified number of decimal places.
     * Defaults to 3 decimal places if not specified.
     */
    public static roundTo(value: number, decimalPlaces: number = 3): number {
        const factor = Math.pow(10, decimalPlaces);

        //prevent division by zero when decimalPlaces is 0
        if (factor === 0)
            return Math.round(value);

        return Math.round(value * factor) / factor;
    }

    public static tryParseNumber(input: any): { success: true; value: number; valueIsFinite: boolean } | { success: false, value: null; valueIsFinite: boolean } {
        const value = Number(input);

        if (input?.toString()?.trim() === "" || !Number.isFinite(value)) {
            return { success: false, value: null, valueIsFinite: false };
        }

        return { success: true, value: value, valueIsFinite: Number.isFinite(value) };
    }
}