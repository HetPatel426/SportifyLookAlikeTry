# SoundVault (MVP)

SoundVault is a Spotify-like personal music locker: users authenticate, upload their own audio files, and stream them back securely via signed URLs.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS (dark theme)
- Supabase (Auth + Postgres + Storage)
- HTML5 Audio (player comes next)

## Local setup

### 1) Create a Supabase project

In the Supabase dashboard:

- Create a new project
- Copy your **Project URL** and **anon public key**

### 2) Configure environment variables

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Set:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3) Install dependencies

```bash
npm install
```

### 4) Run the app

```bash
npm run dev
```

App will be available at `http://localhost:3000`.

## Supabase Auth notes

- This MVP uses **email + password** auth.
- Routes are protected by `middleware.ts` (unauthenticated users are redirected to `/login`).
- The `/auth/callback` route is included for email confirmations (when enabled in Supabase).

## Database + Storage

SQL migrations will live in `supabase/migrations/`.

Storage bucket (to be created in Supabase):

- Bucket name: `audio`
- Files will be stored under: `audio/{user_id}/{track_id}.{ext}`

