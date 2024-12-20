import { expectTypeOf } from "vitest";

import { withoutUndefinedProperties } from "./withoutUndefinedProperties.js";

declare const input1: {};
declare const output1: {};
expectTypeOf(withoutUndefinedProperties(input1)).toEqualTypeOf(output1);

declare const input2: { a: number };
declare const output2: { a: number };
expectTypeOf(withoutUndefinedProperties(input2)).toEqualTypeOf(output2);

declare const input3: { a: null | number };
declare const output3: { a: null | number };
expectTypeOf(withoutUndefinedProperties(input3)).toEqualTypeOf(output3);

declare const input4: { a: 1 };
declare const output4: { a: 1 };
expectTypeOf(withoutUndefinedProperties(input4)).toEqualTypeOf(output4);

declare const input5: { a: 1 | undefined };
declare const output5: { a: 1 };
expectTypeOf(withoutUndefinedProperties(input5)).toEqualTypeOf(output5);

declare const input6: { a: 1 | null | undefined };
declare const output6: { a: 1 | null };
expectTypeOf(withoutUndefinedProperties(input6)).toEqualTypeOf(output6);

declare const input7: { a?: 1 };
declare const output7: { a?: 1 };
expectTypeOf(withoutUndefinedProperties(input7)).toEqualTypeOf(output7);

declare const input8: { a?: 1 | undefined };
declare const output8: { a?: 1 };
expectTypeOf(withoutUndefinedProperties(input8)).toEqualTypeOf(output8);
