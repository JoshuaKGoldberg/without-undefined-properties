import { WithoutUndefinedPropertiesDeep } from "./types.js";

export function withoutUndefinedPropertiesDeep<T extends object>(
	value: T,
): WithoutUndefinedPropertiesDeep<T> {
	const result = { ...value };

	for (const k in result) {
		if (result[k] === undefined) {
			delete result[k];
		} else if (result[k] !== null && typeof result[k] === "object") {
			result[k] = withoutUndefinedPropertiesDeep(result[k]) as T[typeof k];
		}
	}

	return result as WithoutUndefinedPropertiesDeep<T>;
}
