# YouTube Backend

A simple Node.js backend project for learning and building Express/MongoDB-powered APIs.

## Overview

This repository contains the backend for a YouTube-style application, built with:

- `Node.js` and modern ES module syntax
- `Express` for HTTP routing and middleware
- `Mongoose` for MongoDB interaction
- `dotenv` for environment configuration
- `nodemon` for local development hot-reloading

## Project Structure

- `src/index.js` — application entrypoint and Express server setup
- `src/app.js` — placeholder module for application logic
- `src/constants.js` — configuration/constants placeholder
- `src/controllers/` — API controller logic
- `src/db/` — database connection and persistence setup
- `src/models/` — Mongoose data models and schema definitions
- `src/routes/` — Express route definitions
- `src/utils/` — helper utilities

## Prerequisites

- Node.js 18+ (ES module support)
- npm
- MongoDB instance if using database features

## Installation

```bash
npm install
```

## Development

Start the development server with:

```bash
npm run dev
```

The server listens on port `8000` by default.

## Notes

- The current `package.json` uses `type: "module"`, so source files use ES module syntax.
- If you add environment variables, create a `.env` file in the project root and load them from `src/index.js` or another configuration file.
- Keep `models` separate from `controllers` and `db` so schema definitions stay organized.

## License

ISC
