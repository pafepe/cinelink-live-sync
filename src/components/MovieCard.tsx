import { Clock, Play, Star, Users } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface MovieProps {
  movie: {
    id: number
    title: string
    genre: string
    duration: string
    rating: number
    posterColor: string
    startTime: string
    friendsWatching: number
  }
}

export default function MovieCard({ movie }: MovieProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500 transition-colors duration-300">
      <div className="p-4 flex items-start gap-4">
        {/* Movie Poster */}
        <div 
          className={cn(
            "h-20 w-16 rounded-lg bg-gradient-to-br",
            movie.posterColor
          )}
        />
        
        {/* Movie Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-lg">{movie.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{movie.genre}</p>
            </div>
            <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-full">
              <Star className="h-3 w-3 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{movie.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {movie.duration}
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              {movie.startTime}
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(Math.min(movie.friendsWatching, 3))].map((_, i) => (
                  <div 
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-gray-900 bg-gradient-to-br from-purple-500 to-pink-500"
                  />
                ))}
                {movie.friendsWatching > 3 && (
                  <div className="h-8 w-8 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center">
                    <span className="text-xs">+{movie.friendsWatching - 3}</span>
                  </div>
                )}
              </div>
              <span className="text-sm text-gray-400">
                {movie.friendsWatching} friends watching
              </span>
            </div>
            
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Play className="mr-1 h-4 w-4" />
              Join
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}