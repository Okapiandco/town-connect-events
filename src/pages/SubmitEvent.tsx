import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { venues } from '@/data/mockData';
import { EventCategory, categoryLabels } from '@/types/events';
import { Calendar, Clock, MapPin, User, Mail, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const SubmitEvent = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    endTime: '',
    category: '' as EventCategory | '',
    venueId: '',
    organizer: '',
    contactEmail: '',
    price: '',
    ticketUrl: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.description || !formData.date || 
        !formData.time || !formData.category || !formData.venueId || 
        !formData.organizer || !formData.contactEmail) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contactEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Event submitted successfully!');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-md w-full border border-border p-8 text-center animate-scale-in">
            <div className="h-16 w-16 bg-secondary flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
              Event Submitted!
            </h2>
            <p className="text-muted-foreground mb-8">
              Thank you for submitting your event. Our team will review it and 
              get back to you within 2-3 business days.
            </p>
            <div className="space-y-3">
              <Button variant="default" className="w-full" onClick={() => navigate('/')}>
                Back to Events
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    title: '',
                    description: '',
                    date: '',
                    time: '',
                    endTime: '',
                    category: '',
                    venueId: '',
                    organizer: '',
                    contactEmail: '',
                    price: '',
                    ticketUrl: '',
                  });
                }}
              >
                Submit Another Event
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categories: EventCategory[] = [
    'community', 'music', 'sports', 'arts', 'education', 'markets', 'charity', 'council', 'other'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-foreground py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-4">
              Add Your Event
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Share your event with the Langport community. Fill out the form below 
              and our team will review your submission within 2-3 business days.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto border border-border animate-fade-up">
            <div className="p-6 md:p-8 border-b border-border">
              <h2 className="font-display text-2xl font-semibold">Event Details</h2>
              <p className="text-muted-foreground mt-1">
                Fields marked with * are required
              </p>
            </div>
            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Community Garden Workshop"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    maxLength={100}
                    className="rounded-none"
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your event in detail..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleChange('description', e.target.value)}
                    maxLength={1000}
                    className="rounded-none"
                  />
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="date"
                        type="date"
                        className="pl-10 rounded-none"
                        value={formData.date}
                        onChange={(e) => handleChange('date', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Start Time *</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="time"
                        type="time"
                        className="pl-10 rounded-none"
                        value={formData.time}
                        onChange={(e) => handleChange('time', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endTime">End Time</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="endTime"
                        type="time"
                        className="pl-10 rounded-none"
                        value={formData.endTime}
                        onChange={(e) => handleChange('endTime', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Category & Venue */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => handleChange('category', value)}
                    >
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {categoryLabels[cat]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Venue *</Label>
                    <Select
                      value={formData.venueId}
                      onValueChange={(value) => handleChange('venueId', value)}
                    >
                      <SelectTrigger className="rounded-none">
                        <SelectValue placeholder="Select venue" />
                      </SelectTrigger>
                      <SelectContent>
                        {venues.map((venue) => (
                          <SelectItem key={venue.id} value={venue.id}>
                            {venue.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Organizer Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organizer">Organizer Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="organizer"
                        placeholder="Your name or organization"
                        className="pl-10 rounded-none"
                        value={formData.organizer}
                        onChange={(e) => handleChange('organizer', e.target.value)}
                        maxLength={100}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Contact Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="your@email.com"
                        className="pl-10 rounded-none"
                        value={formData.contactEmail}
                        onChange={(e) => handleChange('contactEmail', e.target.value)}
                        maxLength={255}
                      />
                    </div>
                  </div>
                </div>

                {/* Price & Tickets */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Entry Price</Label>
                    <Input
                      id="price"
                      placeholder="e.g., Free, £5, £10-15"
                      value={formData.price}
                      onChange={(e) => handleChange('price', e.target.value)}
                      maxLength={50}
                      className="rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ticketUrl">Ticket URL</Label>
                    <Input
                      id="ticketUrl"
                      type="url"
                      placeholder="https://..."
                      value={formData.ticketUrl}
                      onChange={(e) => handleChange('ticketUrl', e.target.value)}
                      className="rounded-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    variant="default" 
                    size="lg" 
                    className="w-full gap-2 uppercase tracking-wide"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Event for Review
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    By submitting, you agree that all information provided is accurate 
                    and you have permission to organise this event.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitEvent;
