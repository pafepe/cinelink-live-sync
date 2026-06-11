# CineLink Live Sync

🎬 Real-time movie screening sync and timeline app built with modern technologies.

## Features

- **Real-time Sync**: Synchronize movie screenings across devices
- **Movie Timeline**: Visual timeline of movie schedules
- **Multi-User Sync**: Watch parties with friends
- **Cross-Platform**: Web, mobile, and desktop support
- **Modern Stack**: Built with Vite, React 19, TypeScript, and Tailwind CSS

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **State Management**: Zustand
- **Real-time**: Socket.io
- **Authentication**: Supabase
- **Database**: Supabase PostgreSQL
- **Notifications**: react-hot-toast

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/pafepe/cinelink-live-sync.git
   cd cinelink-live-sync
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities and configurations
│   ├── store/         # Zustand state management
│   ├── types/         # TypeScript type definitions
│   └── App.tsx        # Main App component
├── public/            # Static assets
└── ...
```

## License

MIT