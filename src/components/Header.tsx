import { Bell, Search, User } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-r from-purple-600 to-pink-600" />
            <span className="text-xl font-bold tracking-tight">CineLink</span>
            <span className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-0.5 text-xs font-medium">
              Live
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="font-medium text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#" className="font-medium text-gray-300 hover:text-white transition-colors">
              Timeline
            </a>
            <a href="#" className="font-medium text-gray-300 hover:text-white transition-colors">
              Watch Parties
            </a>
            <a href="#" className="font-medium text-gray-300 hover:text-white transition-colors">
              Movies
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search movies, friends..."
              className="w-64 pl-9 bg-gray-800 border-gray-700 focus-visible:ring-purple-500"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}