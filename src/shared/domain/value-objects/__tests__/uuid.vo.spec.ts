import { InvalidUuidError, Uuid } from "../uuid.vo"
import { validate as uuidValidate } from "uuid";


describe('Uuid Unit Tests', () => {

    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

    test('should throw error when uuid is invalid', () => {
        expect(() => {
            new Uuid('invalid-uuid');
        }).toThrow(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    test('should create a valid uuid', () => {
        const uuid = new Uuid();
        expect(uuid.id).toBeDefined();
        expect(uuidValidate(uuid.id)).toBe(true);
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    test('should accept a valid uuid', () => {
        const uuid = new Uuid('30415222-50b9-4112-b2f1-e829dc63141b');
        expect(uuid.id).toBe('30415222-50b9-4112-b2f1-e829dc63141b');
        expect(validateSpy).toHaveBeenCalledTimes(1);
    })
});