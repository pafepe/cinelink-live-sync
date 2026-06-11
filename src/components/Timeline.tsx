import { CheckCircle2, Clock, Video } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Timeline() {
  const timelineEvents = [
    { 
      id: 1, 
      time: '18:00', 
      title: 'Movie Prep', 
      description: 'Getting ready for movie night', 
      status: 'completed',
      icon: CheckCircle2,
      iconColor: 'text-green-500'
    },
    { 
      id: 2, 
      time: '19:00', 
      title: 'Friends Join', 
      description: 'Invite friends to the watch party', 
      status: 'completed',
      icon: CheckCircle2,
      iconColor: 'text-green-500'
    },
    { 
      id: 3, 
      time: '19:30', 
      title: 'Movie Selection', 
      description: 'Vote on tonight\'s movie', 
      status: 'current',
      icon: Clock,
      iconColor: 'text-yellow-500'
    },
    { 
      id: 4, 
      time: '20:00', 
      title: 'Movie Start', 
      description: 'Time sync & live reactions', 
      status: 'upcoming',
      icon: Video,
      iconColor: 'text-blue-500'
    },
    { 
      id: 5, 
      time: '21:30', 
      title: 'Intermission', 
      description: 'Discussion break', 
      status: 'upcoming',
      icon: Video,
      iconColor: 'text-blue-500'
    },
  ]

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <div className="space-y-4">
        {timelineEvents.map((event, index) => (
          <div key={event.id} className="relative flex items-start gap-4">
            {/* Vertical Line */}
            {index < timelineEvents.length - 1 && (
              <div className="absolute left-5 top-8 h-[calc(100%+1rem)] w-0.5 bg-gray-700" />
            )}
            
            {/* Icon */}
            <div className="relative z-10 flex-shrink-0">
              <div className={cn(
                "h-10 w-10 rounded-full flex items-center justify-center",
                event.status === 'completed' ? "bg-green-500/10" :
                event.status === 'current' ? "bg-yellow-500/10" :
                "bg-gray-800"
              )}>
                <event.icon className={cn("h-5 w-5", event.iconColor)} />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-400">{event.time}</p>
                  <h4 className="font-semibold text-white mt-1">{event.title}</h4>
                </div>
                {event.status === 'current' && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400">
                    Now
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 mt-1">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-400">Timeline Progress</span>
          <span className="text-sm font-medium">40%</span>
        </div>
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            style={{ width: '40%' }}
          />
        </div>
      </div>
    </div>
  )
}