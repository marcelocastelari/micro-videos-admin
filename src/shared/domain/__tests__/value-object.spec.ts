import { ValueObject } from "../value-object";

class StrigValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    }
}

class ComplexValueObject extends ValueObject {
    constructor(readonly prop1: string, readonly prop2: number) {
        super();
    }
}

describe('ValueObject Unit Tests', () => {
    test('should be equals', () => {
        const valueObject1 = new StrigValueObject('test');
        const valueObject2 = new StrigValueObject('test');
        expect(valueObject1.equals(valueObject2)).toBe(true);

        const complexValueObject1 = new ComplexValueObject("test", 1);
        const complexValueObject2 = new ComplexValueObject("test", 1);
        expect(complexValueObject1.equals(complexValueObject2)).toBe(true);
    });

    test('should not be equals', () => {
        const valueObject1 = new StrigValueObject('test');
        const valueObject2 = new StrigValueObject('test2');
        expect(valueObject1.equals(valueObject2)).toBe(false);
        expect(valueObject1.equals(null as any)).toBe(false);
        expect(valueObject1.equals(undefined as any)).toBe(false);

        const complexValueObject1 = new ComplexValueObject("test", 1);
        const complexValueObject2 = new ComplexValueObject("test", 2);
        expect(complexValueObject1.equals(complexValueObject2)).toBe(false);
        expect(complexValueObject1.equals(null as any)).toBe(false);
        expect(complexValueObject2.equals(undefined as any)).toBe(false);
    });
});