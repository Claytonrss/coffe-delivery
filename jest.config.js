export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "@components/(.*)$": "<rootDir>/src/components/$1",
    "@styles/(.*)$": "<rootDir>/src/styles/$1",
    "@tests/(.*)$": "<rootDir>/src/tests/$1",
    "@/(.*)$": "<rootDir>/src/$1",
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/tests/mocks/fileMock.ts",
    "^.+\\.(css|less|scss|sass)$": "<rootDir>/src/tests/mocks/styleMock.ts",
    /* mock models and services folder */
    "(assets|models|services)": "<rootDir>/src/tests/mocks/fileMock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
};
