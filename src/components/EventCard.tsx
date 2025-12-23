import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Event, categoryLabels, categoryColors } from '@/types/events';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { format, parseISO } from 'date-fns';

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

const EventCard = ({ event, featured = false }: EventCardProps) => {
  const formattedDate = format(parseISO(event.date), 'EEE, MMM d');
  const formattedTime = event.time;

  return (
    <Link to={`/event/${event.id}`}>
      <Card 
        className={`group overflow-hidden transition-all duration-300 hover:card-shadow-hover card-shadow border-border/50 ${
          featured ? 'md:flex md:h-64' : ''
        }`}
      >
        {/* Image */}
        <div 
          className={`relative overflow-hidden bg-muted ${
            featured ? 'md:w-2/5 h-48 md:h-full' : 'h-44'
          }`}
        >
          {event.imageUrl ? (
            <img
              src={event.imageUrl}
              alt={event.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full hero-gradient flex items-center justify-center">
              <Calendar className="h-12 w-12 text-primary-foreground/60" />
            </div>
          )}
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge className={`${categoryColors[event.category]} border-0 font-medium`}>
              {categoryLabels[event.category]}
            </Badge>
          </div>

          {/* Featured Badge */}
          {event.isFeatured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-secondary text-secondary-foreground border-0 font-semibold">
                Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className={`p-4 ${featured ? 'md:flex-1 md:p-6' : ''}`}>
          <div className="space-y-3">
            {/* Date & Time */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">{formattedDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" />
                <span>{formattedTime}{event.endTime && ` - ${event.endTime}`}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className={`font-serif font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 ${
              featured ? 'text-xl md:text-2xl' : 'text-lg'
            }`}>
              {event.title}
            </h3>

            {/* Description */}
            <p className={`text-muted-foreground line-clamp-2 ${featured ? 'md:line-clamp-3' : ''}`}>
              {event.description}
            </p>

            {/* Venue */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground pt-1">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="truncate">{event.venue.name}</span>
            </div>

            {/* Price */}
            {event.price && (
              <div className="pt-2">
                <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-medium text-foreground">
                  {event.price}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
