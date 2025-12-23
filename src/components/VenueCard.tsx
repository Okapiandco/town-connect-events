import { Link } from 'react-router-dom';
import { MapPin, Users } from 'lucide-react';
import { Venue } from '@/types/events';
import { Card, CardContent } from '@/components/ui/card';

interface VenueCardProps {
  venue: Venue;
}

const VenueCard = ({ venue }: VenueCardProps) => {
  return (
    <Link to={`/venue/${venue.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:card-shadow-hover card-shadow border-border/50">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          {venue.imageUrl ? (
            <img
              src={venue.imageUrl}
              alt={venue.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full hero-gradient flex items-center justify-center">
              <MapPin className="h-12 w-12 text-primary-foreground/60" />
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {venue.name}
            </h3>
            
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              <span>{venue.address}</span>
            </div>

            {venue.capacity && (
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>Capacity: {venue.capacity.toLocaleString()}</span>
              </div>
            )}

            {venue.description && (
              <p className="text-muted-foreground text-sm line-clamp-2 pt-1">
                {venue.description}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VenueCard;
