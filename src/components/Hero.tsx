
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import avif from "@/imgs/avatar/jjufmfvslkctxygfca4q.avif"
import webp from "@/imgs/avatar/bn8jvtsp7mxkr7jv5orv.webp"
import png from "@/imgs/avatar/88367cd9-8e70-44ed-a1d1-5ec857ec3093.png"
const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-32 px-4 lg:min-h-[calc(100vh-73px)] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#607CCD]">Web Developer</span> <br />
              Building Modern Web Experiences
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
I am a web developer focused on building modern, responsive, and user-friendly web applications. I care about clean and efficient solutions that are both functional and visually appealing.            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                <Button size="lg" className="bg-[#607CCD] hover:bg-[#4a62a3]">
                  View Projects
                </Button>
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <Button size="lg" variant="outline" className="border-[#607CCD] text-[#607CCD] hover:bg-[#607CCD]/10">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="bg-gradient-to-br from-[#607CCD]/20 to-[#607CCD]/10 p-6 rounded-2xl shadow-lg">
             
<picture>
  <source srcSet={avif} />
  <source srcSet={webp} type="image/webp" />
  <img src={png} className='w-64 h-64 md:w-80 md:h-80 object-cover rounded-xl' alt="avatar" />
</picture>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block animate-bounce">
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
            <ArrowDown className="text-[#607CCD]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
