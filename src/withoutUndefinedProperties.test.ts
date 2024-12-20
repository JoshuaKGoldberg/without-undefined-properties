import { describe, expect, test } from "vitest";

import { withoutUndefinedProperties } from "./withoutUndefinedProperties.js";

describe("withoutUndefinedProperties", () => {
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
		[{ a: { b: undefined } }, { a: { b: undefined } }],
	])("%s", (input, expected) => {
		expect(withoutUndefinedProperties(input)).toStrictEqual(expected);
	});
});
