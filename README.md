# Web Technical Test

## Introduction

This is a simple web application that allows you to test your web application.
The goal is to test is to introduce to us a mini dashboard of vehicles.

The features are simple:

- Connect to the WS backend,
- Display the vehicles according to the types or status,
- and follow the design of the application.

The stack we are aiming to use is:

- Bun
- React
- Socket IO
- Typescript
- Mapbox
- Tailwind
- Zod

**You are not required to use these technologies, but we recommend you to use them.**

## How to connect to the WS backend

The WS engine is based on Socket IO.

The backend will be simulated by a bun script that will send an initial payload and updates.
It is allowed to use the type definition of the backend directly in the frontend (exposed by TS or zod).

## Installation

```bash
bun install
```

## Usage of web app

```bash
cd packages/web-app
bun start
```

## Usage of backend

```bash
cd packages/ws-backend
bun start
```
