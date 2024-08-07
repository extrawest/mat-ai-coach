# MAT-AI-COACH

A NextJS-based AI fitness coaching application.

## Features

- AI-powered chat assistant with motivational responses
- User authentication (sign-in and sign-up functionality)
- Profile management
- OpenAI integration for intelligent responses
- Xata cloud service integration

## Tech Stack

- Frontend & Backend: NextJS
- Authentication: Custom implementation (sign-in and sign-up routes)
- Database: Postgres using Xata cloud service(Prisma ORM)
- AI Integration: OpenAI API
- Styling: Tailwind

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env` (see Environment Variables section)
4. Configure [Xata database connection with Prisma ORM](https://xata.io/docs/integrations/prisma)
5. Run the development server: `npm run dev`

## Environment Variables

Create a `.env` file in the root directory and add the following variables:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
OPENAI_API_KEY=
DATABASE_URL=
APP_SECRET_KEY=
NEXT_PUBLIC_BASE_URL=
```

## Deployment

The app is deployed on Vercel. Automatic deployments are triggered on pushes to the main branch.
