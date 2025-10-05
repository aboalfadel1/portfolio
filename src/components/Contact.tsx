
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Mail, MessageSquare, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm(
        'service_rtupciu', // ← استبدله بخدمة EmailJS الخاصة بك
        'template_mumokz6', // ← استبدله بالقالب
        form,
        'Bx1KsNykzgOsSeet7' // ← المفتاح العام
      )
      .then(
        () => {
          toast({
            title: 'Message Sent!',
            description: "Thank you for your message. I'll get back to you soon!",
          });
          form.reset();
        },
        (error) => {
          toast({
            title: 'Error',
            description: 'Something went wrong. Please try again later.',
          });
          console.error(error);
        }
      );
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#607CCD] mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Feel free to reach out to me for job opportunities, collaborations, or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-[#607CCD] mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-[#607CCD]/10 p-3 rounded-full text-[#607CCD]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <a href="mailto:medosaad18@gmail.com" className="text-[#607CCD] hover:underline">
                    medosaad18@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-[#607CCD]/10 p-3 rounded-full text-[#607CCD]">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Social</h4>
                  <a href="https://www.linkedin.com/in/mouayad-saad-eddin-79478a281/" target="_blank" rel="noopener noreferrer" className="text-[#607CCD] hover:underline">
                    LinkedIn: /in/mouayadsaadeddin
                  </a>
                  <br/>
                  <a href="https://www.xing.com/profile/Mouayad_Saadeddin/web_profiles" target="_blank" rel="noopener noreferrer" className="text-[#607CCD] hover:underline">
                    Xing: mouayadsaadeddin
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-[#607CCD] mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your name" required name='name' />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name='email' placeholder="your.email@example.com" required />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message"
                  name='message'
                  placeholder="Your message..." 
                  required
                  rows={4}
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full bg-[#607CCD] hover:bg-[#4a62a3]">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
