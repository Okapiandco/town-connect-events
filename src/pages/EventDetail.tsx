import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { events } from '@/data/mockData';
import { categoryLabels, categoryColors } from '@/types/events';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Mail, 
  ArrowLeft,
  ExternalLink,
  Share2,
  Users
} from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { toast } from 'sonner';

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Event Not Found</h1>
            <p className="text-muted-foreground mb-6">The event you're looking for doesn't exist.</p>
            <Link to="/">
              <Button variant="default">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Events
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = format(parseISO(event.date), 'EEEE, MMMM d, yyyy');

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text: event.description,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          {event.imageUrl ? (
            <img
              src={event.imageUrl}
              alt={event.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full hero-gradient" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-4 left-4">
            <Link to="/">
              <Button variant="secondary" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>

          {/* Category Badge */}
          <div className="absolute bottom-4 left-4">
            <Badge className={`${categoryColors[event.category]} border-0 font-medium text-base px-4 py-1`}>
              {categoryLabels[event.category]}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="animate-fade-up">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {event.title}
                </h1>
                
                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>{event.time}{event.endTime && ` - ${event.endTime}`}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground/80 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Organizer */}
                <div className="flex items-center gap-3 pt-6 border-t border-border mt-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Organised by</p>
                    <p className="font-semibold text-foreground">{event.organizer}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {/* Action Card */}
              <Card className="card-shadow">
                <CardContent className="p-6 space-y-4">
                  {event.price && (
                    <div className="text-center pb-4 border-b border-border">
                      <p className="text-sm text-muted-foreground">Entry</p>
                      <p className="text-2xl font-serif font-bold text-foreground">{event.price}</p>
                    </div>
                  )}

                  <div className="space-y-3">
                    {event.ticketUrl && (
                      <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="amber" size="lg" className="w-full gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Get Tickets
                        </Button>
                      </a>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full gap-2"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4" />
                      Share Event
                    </Button>
                  </div>

                  {event.contactEmail && (
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-2">Questions?</p>
                      <a 
                        href={`mailto:${event.contactEmail}`}
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <Mail className="h-4 w-4" />
                        {event.contactEmail}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Venue Card */}
              <Card className="card-shadow">
                <CardContent className="p-0">
                  {event.venue.imageUrl && (
                    <img
                      src={event.venue.imageUrl}
                      alt={event.venue.name}
                      className="h-40 w-full object-cover rounded-t-lg"
                    />
                  )}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {event.venue.name}
                    </h3>
                    
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5 text-accent mt-0.5" />
                      <span>{event.venue.address}</span>
                    </div>

                    {event.venue.capacity && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-5 w-5 text-primary" />
                        <span>Capacity: {event.venue.capacity.toLocaleString()}</span>
                      </div>
                    )}

                    <Link to={`/venue/${event.venue.id}`}>
                      <Button variant="ghost" size="sm" className="w-full mt-2">
                        View Venue Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
