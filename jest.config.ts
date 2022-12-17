import type {Config} from 'jest'
import resolve from 'path'

const root = resolve.dirname('..')

const config: Config = {
	clearMocks: true,
	coverageProvider: 'v8',
	preset: 'ts-jest',
	rootDir: root,
	displayName: 'end2end-tests',
	testMatch: ['<rootDir>/test/functional/**/*.test.ts']
}

export default config