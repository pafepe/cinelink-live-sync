import { Clock, Play, Users } from 'lucide-react'
import MovieCard from './MovieCard'
import Timeline from './Timeline'
import { Button } from './ui/button'

export default function Dashboard() {
  const upcomingMovies = [
    { 
      id: 1, 
      title: 'Dune: Part Two', 
      genre: 'Sci-Fi', 
      duration: '2h 46m', 
      rating: 8.7, 
      posterColor: 'from-yellow-900 to-yellow-600',
      startTime: '20:00',
      friendsWatching: 3
    },
    { 
      id: 2, 
      title: 'Oppenheimer', 
      genre: 'Biography', 
      duration: '3h 00m', 
      rating: 8.3, 
      posterColor: 'from-orange-900 to-orange-600',
      startTime: '21:30',
      friendsWatching: 5
    },
    { 
      id: 3, 
      title: 'Poor Things', 
      genre: 'Comedy', 
      duration: '2h 21m', 
      rating: 8.4, 
      posterColor: 'from-pink-900 to-pink-600',
      startTime: '19:15',
      friendsWatching: 2
    },
    { 
      id: 4, 
      title: 'Killers of the Flower Moon', 
      genre: 'Crime', 
      duration: '3h 26m', 
      rating: 7.7, 
      posterColor: 'from-red-900 to-red-600',
      startTime: '22:00',
      friendsWatching: 4
    },
  ]

  const activeWatchParties = [
    { id: 1, movieTitle: 'Avengers: Endgame', members: 8, progress: 65 },
    { id: 2, movieTitle: 'Interstellar', members: 5, progress: 42 },
    { id: 3, movieTitle: 'Inception', members: 12, progress: 78 },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-gray-800 rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, John! 👋</h1>
            <p className="text-gray-400 mt-2">Ready to sync up with friends for movie night?</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Play className="mr-2 h-4 w-4" />
              Start Watch Party
            </Button>
            <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
              <Clock className="mr-2 h-4 w-4" />
              View Schedule
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Movies Tonight</p>
                <p className="text-2xl font-bold mt-1">4</p>
              </div>
              <Film className="h-10 w-10 text-purple-500" />
            </div>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Friends Online</p>
                <p className="text-2xl font-bold mt-1">12</p>
              </div>
              <Users className="h-10 w-10 text-pink-500" />
            </div>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Active Parties</p>
                <p className="text-2xl font-bold mt-1">3</p>
              </div>
              <Group className="h-10 w-10 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Movies */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Upcoming Movies</h2>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              View all
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
        
        {/* Timeline */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Timeline</h2>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              Today
            </Button>
          </div>
          
          <Timeline />
        </div>
      </div>
    </div>
  )
}