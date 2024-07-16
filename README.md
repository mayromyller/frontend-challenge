# Challenge - Front End Developer

Deploy: [frontend-challenge-pied.vercel.app](https://frontend-challenge-pied.vercel.app)

## Prerequisites

Before starting, you need to have installed on your machine:

- Node.js (version 18.x)
- npm, yarn, or pnpm

## Installation

Follow the steps below to install and configure the project on your local machine.

1. **Clone the repository**
   ```bash
   https://github.com/mayromyller/frontend-challenge.git
   ```
2. **Navigate to the project directory**
   ```bash
   cd frontend-challenge
   ```
3. **Using one of the Node package managers, install the dependencies**
   ```bash
   npm install
   ```
   or use `yarn` or `pnpm`, if you prefer.

## Running the Project

To start the local server, run the following command:

```bash
pnpm dev
```

The project will run on `http://localhost:5173/`.

## Technologies

Among the technologies used, I highlight:

- TypeScript
- React
- Axios
- Tailwind CSS
- Vitest

## About the Project

The application was developed using a React, Redux, and TypeScript. For styling, I chose TailwindCSS due to its numerous benefits: it enhances productivity, ensures visual consistency, is easy to configure, and optimizes the application's performance.

### Key Components Developed

Several crucial components were created during the development process: **Modal**, **Accordion**, **Carousel**, **Skeleton**, **Form Components**

### Handling API Integration and CORS Issues

When integrating the application with the provided API, I faced Cross-Origin Resource Sharing (CORS) errors. To work around this issue during development, I used mock data based on the JSON responses from the API endpoints:

- Venue: `https://cdn-dev.preoday.com/challenge/venue/9`
- Menu: `https://cdn-dev.preoday.com/challenge/menu`

This allowed me to proceed with development despite the CORS issues.

### Using a Browser Extension for CORS

To bypass the CORS restrictions, I utilized a browser extension called [`Allow CORS: Access-Control-Allow-Origin`](https://chromewebstore.google.com/detail/lhobafahddgcelffkeicbaginigeejlf). This extension modifies the browser's request headers to allow cross-origin requests, enabling me to test API calls without being blocked.

Using this extension, I successfully integrated the data while running the application locally. However, after deploying the application, the CORS issue re-emerged. To address this, I implemented a check in the API call logic to fallback to mock data whenever a CORS error was detected.

### Architectural Approach

I developed the application following the Model-View-Presenter (MVP) pattern, combined with principles of clean architecture, obviously abstracted to the front-end context specifically to React with Hooks. The application is consistent in the separation of responsibilities, between the UI and the business rules, separating the logic into customized hooks, which can be interpreted as the Presenter layer, the business rule interfaces as the Model layer, and the components the View layer.

### Summary

This architectural pattern ensures a clear separation of responsibilities, promoting isolation between components and enhancing flexibility. As a result, the application is easier to maintain, update, and test.

In conclusion, the application demonstrates a well-organized structure with a strong emphasis on modularity and scalability, making it robust and adaptable for future enhancements.

## Tests

To run the tests, use the command `pnpm test`.

I tested the main rules of the application, i.e., the cart and its functionalities, as well as the integration of the UI with the methods, using `Vitest` and the `React Testing Library`.

## Contact

- [LinkedIn - Mayro Myller](https://www.linkedin.com/in/mayromyller/)
- Email: mayro.mmdev@gmail.com
