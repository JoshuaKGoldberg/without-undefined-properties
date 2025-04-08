import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		clearMocks: true,
		coverage: {
			all: true,
			exclude: ["**/*.test-d.ts", "src/index.ts"],
			include: ["src"],
			reporter: ["html", "lcov"],
		},
		exclude: ["lib", "node_modules", "node_modules"],
		setupFiles: ["console-fail-test/setup"],
	},
});
