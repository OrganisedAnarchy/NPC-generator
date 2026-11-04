# TTRPG NPC Generator

An early-stage Node.js project exploring tools for creating non-player characters for tabletop role-playing games.

## Project status

This is a prototype, not a finished generator. The Express app currently renders an EJS home page and exposes placeholder routes at `/api/npc`; NPC creation, database persistence, and the planned guided builder are not implemented yet.

The intended direction is to support both quick generation from configurable name and character details and a guided builder for more distinctive NPCs.

## Run locally

Install Node.js and npm, then run:

```sh
npm install
npm run devStart
```

Open <http://localhost:3000>. The current prototype does not require a database to start.
