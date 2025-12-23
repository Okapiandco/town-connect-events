import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VenueCard from '@/components/VenueCard';
import { venues } from '@/data/mockData';
import { MapPin } from 'lucide-react';

const Venues = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="hero-gradient py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm mb-4">
              <MapPin className="h-4 w-4" />
              <span>Local Venues</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Community Venues
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Discover the wonderful spaces available for community events, 
              from our historic Town Hall to beautiful outdoor parks.
            </p>
          </div>
        </section>

        {/* Venues Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <div 
                key={venue.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <VenueCard venue={venue} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Venues;
