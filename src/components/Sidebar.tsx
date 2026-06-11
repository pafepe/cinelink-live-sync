import { Calendar, Film, Group, Heart, Home, Settings, Star, TrendingUp, Users } from 'lucide-react'

export default function Sidebar() {
  const navigation = [
    { name: 'Dashboard', icon: Home, href: '#', current: true },
    { name: 'Movies', icon: Film, href: '#', current: false },
    { name: 'Watch Parties', icon: Users, href: '#', current: false },
    { name: 'Calendar', icon: Calendar, href: '#', current: false },
    { name: 'Trending', icon: TrendingUp, href: '#', current: false },
    { name: 'Friends', icon: Group, href: '#', current: false },
  ]
  
  const favorites = [
    { name: 'Top Rated', icon: Star, color: 'text-yellow-500' },
    { name: 'My List', icon: Heart, color: 'text-pink-500' },
  ]
  
  const watchParties = [
    { name: 'Marvel Marathon', count: 8 },
    { name: 'Horror Night', count: 5 },
    { name: 'Sci-Fi Club', count: 12 },
  ]

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col border-r border-gray-800 bg-gray-900">
      <div className="flex flex-col flex-1 pt-8">
        {/* Navigation */}
        <nav className="px-4 space-y-1">
          <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Navigation
          </h3>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`
                group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                ${item.current 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }
              `}
            >
              <item.icon className={`mr-3 h-5 w-5 ${item.current ? 'text-purple-500' : 'text-gray-400 group-hover:text-purple-500'}`} />
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Favorites */}
        <div className="mt-8 px-4">
          <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Favorites
          </h3>
          <nav className="space-y-1">
            {favorites.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
              >
                <item.icon className={`mr-3 h-5 w-5 ${item.color}`} />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Active Watch Parties */}
        <div className="mt-8 px-4">
          <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Active Parties
          </h3>
          <div className="space-y-3">
            {watchParties.map((party) => (
              <div 
                key={party.name}
                className="px-3 py-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-md border border-gray-800 hover:border-purple-500 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-white">{party.name}</span>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                    {party.count} members
                  </span>
                </div>
                <div className="mt-1 flex items-center">
                  <span className="text-xs text-gray-400">Now watching: Avengers: Endgame</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Settings */}
        <div className="mt-auto p-4">
          <a
            href="#"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          >
            <Settings className="mr-3 h-5 w-5 text-gray-400" />
            Settings
          </a>
        </div>
      </div>
    </aside>
  )
}