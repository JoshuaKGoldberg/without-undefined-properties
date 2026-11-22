import { WithoutUndefinedProperties } from "./types.ts";

export function withoutUndefinedProperties<T extends object>(
	value: T,
): WithoutUndefinedProperties<T> {
	const result = { ...value };

	for (const k in result) {
		if (result[k] === undefined) {
			delete result[k];
		}
	}

	return result as WithoutUndefinedProperties<T>;
}
