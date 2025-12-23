import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { venues, events } from '@/data/mockData';
import { MapPin, Users, ArrowLeft, Calendar } from 'lucide-react';

const VenueDetail = () => {
  const { id } = useParams();
  const venue = venues.find(v => v.id === id);
  
  const venueEvents = events.filter(
    e => e.venue.id === id && e.status === 'approved'
  );

  if (!venue) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Venue Not Found</h1>
            <p className="text-muted-foreground mb-6">The venue you're looking for doesn't exist.</p>
            <Link to="/venues">
              <Button variant="default">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Venues
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          {venue.imageUrl ? (
            <img
              src={venue.imageUrl}
              alt={venue.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full hero-gradient" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-4 left-4">
            <Link to="/venues">
              <Button variant="secondary" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Venues
              </Button>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl animate-fade-up">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {venue.name}
            </h1>

            <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span>{venue.address}</span>
              </div>
              {venue.capacity && (
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Capacity: {venue.capacity.toLocaleString()}</span>
                </div>
              )}
            </div>

            {venue.description && (
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                {venue.description}
              </p>
            )}
          </div>

          {/* Events at this Venue */}
          {venueEvents.length > 0 && (
            <section className="mt-12 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Upcoming Events at {venue.name}
                </h2>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {venueEvents.map((event, index) => (
                  <div 
                    key={event.id}
                    className="animate-fade-up"
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <EventCard event={event} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VenueDetail;
