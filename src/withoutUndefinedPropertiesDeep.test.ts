import { describe, expect, test } from "vitest";

import { withoutUndefinedPropertiesDeep } from "./withoutUndefinedPropertiesDeep.js";

describe("withoutUndefinedPropertiesDeep", () => {
	test.each([
		[{}, {}],
		[{ a: 1 }, { a: 1 }],
		[
			{ a: 1, b: 2 },
			{ a: 1, b: 2 },
		],
		[{ a: null }, { a: null }],
		[
			{ a: 1, b: 2 },
			{ a: 1, b: 2 },
		],
		[
			{ a: 1, b: null },
			{ a: 1, b: null },
		],
		[
			{ a: 1, b: null, c: undefined },
			{ a: 1, b: null },
		],
		[{ a: undefined }, {}],
		[{ a: { b: undefined } }, { a: {} }],
		[
			{ a: { b: undefined, c: { d: undefined, e: 1 } } },
			{ a: { c: { e: 1 } } },
		],
	])("%s", (input, expected) => {
		expect(withoutUndefinedPropertiesDeep(input)).toStrictEqual(expected);
	});
});
