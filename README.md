[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19936305&assignment_repo_type=AssignmentRepo)
# Testing and Debugging MERN Applications

## Testing Strategy
This project uses a comprehensive testing approach for both client and server:
- **Unit tests**: For utility functions, React components, custom hooks, and Express middleware.
- **Integration tests**: For API endpoints and React components that interact with APIs.
- **End-to-end (E2E) tests**: Using Cypress to test critical user flows.

### Client-Side
- **Unit tests**: Located in `client/src/tests/unit/` (e.g., Button, useToggle, formatString).
- **Integration tests**: Located in `client/src/tests/integration/` (e.g., PostList).
- **E2E tests**: Located in `client/cypress/e2e/`.

### Server-Side
- **Unit tests**: Located in `server/tests/unit/` (e.g., capitalize utility, logger middleware).
- **Integration tests**: Located in `server/tests/integration/` (e.g., posts API).

## How to Run Tests

### Install dependencies
```
npm run install-all
```

### Run all tests
```
npm test
```

### Run only client tests
```
npm --prefix client test
```

### Run only server tests
```
npm --prefix server test
```

### Run E2E tests (Cypress)
```
npm --prefix client run test:e2e
```

## Coverage Reports
- After running tests, coverage reports will be available in the `coverage/` directories.
- To generate coverage reports:
  - For client: `npm --prefix client test -- --coverage`
  - For server: `npm --prefix server test -- --coverage`
- Add screenshots of the HTML coverage report (open `coverage/client/index.html` or `coverage/server/index.html` in your browser).

## Debugging Techniques
- **React Error Boundary**: See `client/src/components/ErrorBoundary.jsx` for UI error handling.
- **Express Global Error Handler**: See `server/src/middleware/errorHandler.js` for server error handling.
- **Logging**: See `server/src/middleware/logger.js` for request logging.
- **Dev Tools**: Use browser dev tools for client-side debugging.

## Submission
- Ensure all tests pass and coverage is above 70% for unit tests.
- Include screenshots of coverage reports in your repository.
- Commit and push all changes to GitHub. 