import { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-section-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect! I'm always interested in discussing new opportunities and collaborative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:contact@sunwookang.dev" className="text-foreground hover:text-accent transition-smooth">
                    contact@sunwookang.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+1234567890" className="text-foreground hover:text-accent transition-smooth">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Connect Online</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/swkang73" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-card hover:shadow-elegant hover:scale-110 transition-bounce text-muted-foreground hover:text-accent"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/sunwookang" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-card hover:shadow-elegant hover:scale-110 transition-bounce text-muted-foreground hover:text-accent"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:contact@sunwookang.dev"
                  className="w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-card hover:shadow-elegant hover:scale-110 transition-bounce text-muted-foreground hover:text-accent"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg shadow-card">
              <h3 className="text-2xl font-semibold text-card-foreground mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold transition-smooth"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border mt-20 pt-8 text-center">
          <p className="text-muted-foreground">
            © Sunwoo Kang, 2025. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};