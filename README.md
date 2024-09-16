# Web Technical Test

You will build a tiny Yego Web app with React and ViteJS. The objective will be to test your technical skills and knowledge of this language and followings stack. You will be evaluated on the code structure and graphical structure of your application. The goal is to have a complete overview of your skills.

**Please, try to aim for a maximum of 3 hours of work. We are not looking for a perfect solution, but a good one that is scalable, and surely we will have time to discuss it.**

Feel free to ask me questions if needed, by email at <erwan.leprado@rideyego.com>

Good luck and have fun! :)

## Introduction

This is a simple web application that allows you to test your web application.
The goal is to create a mini dashboard of vehicles.

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

**You are not required to use these technologies, but we recommend you to use them.**

## Installation

```bash
bun install
```

## Usage of web app

```bash
cd packages/web-app
bun dev
```

## Usage of backend

```bash
cd packages/ws-backend
bun start
```

## How to connect to the WS backend

The WS engine is based on Socket IO.

The backend will be simulated by a bun script that will send an initial payload and updates.
It is allowed to use the type definition of the backend directly in the frontend (exposed by TS or zod).

## Subject

Please find what we are going to review in your project :

- The design should follow the guidelines provided in the linked figma file (cf Specifications).

- You must display our scooters on a map using any map provider, represented by markers.

- Display an orange marker if the scooter status is available,
- Display a black marker if the scooter status is booked,
- Display a red marker if the scooter status is maintenance,
- DO NOT display a marker if the scooter status is disabled.

- The system should be able to let the user select a scooter and display the information of the scooter.
- The system should be able to let the user select a scooter and update the information of the scooter.

## Specifications

### Assets

Assets provided in `packages/web-app/assets/images`.

### Mapbox API

API Key is provided in the email.

### Figma

Figma file available in the email.
