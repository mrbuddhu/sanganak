'use client'

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ArrowRight, Megaphone, Layout, Grid, Smartphone, Cpu, Brain, ChevronLeft, ChevronRight, Phone, MessageSquare, X, Linkedin, Instagram, Github, Youtube, Play, User, Menu, ExternalLink } from 'lucide-react'

const testimonials = [
  {
    text: "Sanganak's expertise in AI solutions has revolutionized our business processes. Their team's dedication and innovative approach exceeded our expectations.",
    author: "Rajesh Kumar",
    role: "CEO, TechInnovate India",
    videoUrl: "https://example.com/video1.mp4"
  },
  {
    text: "Working with Sanganak transformed our digital presence. Their UI/UX design expertise helped us achieve a 40% increase in user engagement.",
    author: "Sarah Chen",
    role: "Product Manager, FutureScale",
    videoUrl: "https://example.com/video2.mp4"
  },
  {
    text: "The blockchain solution developed by Sanganak has greatly improved our supply chain transparency and efficiency.",
    author: "John Smith",
    role: "COO, LogiChain Solutions",
    videoUrl: "https://example.com/video3.mp4"
  },
  {
    text: "Their mobile app development team delivered a fantastic product that our users love. The attention to detail was impressive.",
    author: "Emily Rodriguez",
    role: "Head of Product, MobileFirst",
    videoUrl: "https://example.com/video4.mp4"
  },
  {
    text: "Sanganak's web development expertise helped us create a scalable platform that handles millions of users seamlessly.",
    author: "Michael Chang",
    role: "CTO, ScaleUp Technologies",
    videoUrl: "https://example.com/video5.mp4"
  },
  {
    text: "The custom SAAS developed by Sanganak resulted in a 200% increase in our revenue.",
    author: "Lisa Anderson",
    role: "Marketing Director, GrowthFirst",
    videoUrl: "https://example.com/video6.mp4"
  }
]

const services = [
  {
    icon: Megaphone,
    title: "Custom SAAS",
    description: "Strategic SAAS solutions to grow your revenue"
  },
  {
    icon: Layout,
    title: "Graphic/UI-UX Design",
    description: "Beautiful, intuitive designs that convert"
  },
  {
    icon: Grid,
    title: "Web App Development",
    description: "Scalable web applications built with modern tech"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile solutions"
  },
  {
    icon: Cpu,
    title: "Blockchain",
    description: "Secure blockchain solutions for your business"
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Cutting-edge AI integration for automation"
  }
]

const portfolioProjects = {
  saas: [
    { name: "CloudSync Pro", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D" },
    { name: "TaskMaster Suite", image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D" },
    { name: "AnalyticsHub", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D" },
  ],
  design: [
    { name: "EcoLife Branding", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWNvJTIwZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D" },
    { name: "TechFusion UI/UX", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBpbnRlcmZhY2V8ZW58MHx8MHx8fDA%3D" },
    { name: "Mindful App Design", image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaXRhdGlvbiUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D" },
  ],
  web: [
    { name: "Global Eats Marketplace", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMG1hcmtldHBsYWNlfGVufDB8fDB8fHww" },
    { name: "LearnQuest Platform", image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D" },
    { name: "HealthTrack Portal", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoJTIwdHJhY2tpbmd8ZW58MHx8MHx8fDA%3D" },
  ],
  mobile: [
    { name: "FitnessPal App", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "TravelBuddy Guide", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwYXBwfGVufDB8fDB8fHww" },
    { name: "SecureWallet", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMHdhbGxldHxlbnwwfHwwfHx8MA%3D%3D" },
  ],
  blockchain: [
    { name: "CryptoTrade Exchange", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNyeXB0b2N1cnJlbmN5JTIwZXhjaGFuZ2V8ZW58MHx8MHx8fDA%3D" },
    { name: "SmartContract Manager", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnQlMjBjb250cmFjdHxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "DecentralizedID", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvY2tjaGFpbiUyMGlkZW50aXR5fGVufDB8fDB8fHww" },
  ],
  ai: [
    { name: "AIAssist Chatbot", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFpJTIwY2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "PredictX Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D" },
    { name: "AutoVision Recognition", image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjB2aXNpb258ZW58MHx8MHx8fDA%3D" },
  ],
}

const toolLogos = [
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Framer", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
  { name: "Webflow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Ethereum", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1200px-Ethereum_logo_2014.svg.png" },
  { name: "Solidity", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-plain.svg" },
  { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "Shopify", icon: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "WordPress", icon: "https://s.w.org/style/images/about/WordPress-logotype-standard.png" },
]

const floatKeyframes = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @media (min-width: 640px) {
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
  }
`

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const smoothScroll = (e: Event) => {
    e.preventDefault();
    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")?.slice(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      testimonialRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = floatKeyframes;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []); 

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Space-themed Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-30" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(76, 29, 149, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(29, 78, 216, 0.1) 0%, transparent 40%)
            `
          }}
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-black/90 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-4 md:px-8">
          <Link href="https://sanganak.org" className="text-xl md:text-2xl font-bold text-white hover:text-purple-400">
            Sanganak
          </Link>
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {["about", "services", "portfolio", "testimonials", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm text-gray-300 hover:text-white capitalize"
              >
                {item}
              </a>
            ))}
          </nav>
          <Button size="lg" className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white">
            <Link href="https://cal.com/sanganak/strategycall">
              Free Strategy Call
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {["about", "services", "portfolio", "testimonials", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-2xl text-gray-300 hover:text-white capitalize"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <a href="https://cal.com/sanganak/strategycall" onClick={() => setMobileMenuOpen(false)}>
                Free Strategy Call
              </a>
            </Button>
          </nav>
        </div>
      )}

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="container pt-20 sm:pt-24 md:pt-32 pb-8 text-white">
          <div className="flex flex-col items-center justify-center px-4 md:px-0">
            <div className="text-center max-w-3xl mx-auto">
              <div className="mx-auto mb-8 flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm backdrop-blur-md">
                <div className="flex -space-x-1 sm:-space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
                  ].map((src, i) => (
                    <div key={i} className="h-6 w-6 sm:h-8 sm:w-8 overflow-hidden rounded-full border-2 border-black">
                      <Image
                        src={src}
                        alt={`Client ${i + 1}`}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-300 hidden sm:inline">5+ Clients Love</span>
                  <span className="text-gray-300 sm:hidden">5+</span>
                  <Link href="https://sanganak.org" className="font-semibold text-purple-400 hover:underline">
                    Sanganak
                  </Link>
                </div>
              </div>
              <div className="text-center max-w-3xl mx-auto px-4 sm:px-6">
                <h1 className="mb-6 text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Transform Your Ideas Into Reality with <span className="text-purple-400">Sanganak</span>
                </h1>
                <p className="mb-8 text-sm sm:text-base md:text-lg text-gray-300 max-w-[90%] mx-auto">
                  Expert solutions in Design, Web & Mobile Dev, Blockchain, AI, and SaaS.
                  <br className="hidden sm:inline" /> Elevate your business with cutting-edge technology.
                </p>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white w-[90%] sm:w-auto text-sm sm:text-base">
                  <Link href="https://cal.com/sanganak/strategycall">Schedule Your Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mt-24 md:mt-32 text-white">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold sm:text-4xl text-white">About Sanganak</h2>
            <p className="mt-4 text-base md:text-lg text-purple-400">Innovating for a digital future</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 md:space-y-6 text-gray-300">
              <p className="text-lg">
                Founded in July 2021 by visionaries Aryabhatta and Shabi Kaushal, Sanganak is a trailblazing Bihar-based bootstrap startup that&apos;s redefining the landscape of technological innovation. Our elite team of IT professionals is dedicated to transforming visionary ideas into cutting-edge solutions for businesses of all scales.
              </p>
              <p className="text-lg">
                At Sanganak, we&apos;re driven by a singular mission: to empower businesses in the digital age through innovative, scalable, and efficient IT solutions. Since our inception, we&apos;ve consistently delivered excellence across a spectrum of services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Custom SaaS Development</li>
                <li>Web and Mobile App Creation</li>
                <li>Graphics & UI/UX Design</li>
                <li>Blockchain Technology Solutions </li>
                <li>Artificial Intelligence Integration</li>
              </ul>
              <p className="text-lg">
                We believe in the transformative power of technology to revolutionize businesses and enhance lives. Our commitment to staying ahead of the technological curve ensures that our clients receive state-of-the-art solutions tailored to their unique needs, positioning them at the vanguard of their respective industries.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-white/10 hover:bg-gray-800/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 rounded-full bg-purple-400/20 flex items-center justify-center ring-4 ring-purple-400 shrink-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aryabhatta.jpg-JOgEjTplTIdV5dDYhPFhQF2E7aJc6p.jpeg"
                        alt="Aryabhatta (mrbuddhu)"
                        width={96}
                        height={96}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Aryabhatta (mrbuddhu)</h3>
                      <p className="text-purple-400">Dev Lead & Co-founder</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">
                    Aryabhatta, known as mrbuddhu, is a passionate developer and tech visionary with years of experience in creating innovative solutions. As the Dev Lead of Sanganak, he drives the technical direction and ensures the delivery of high-quality, cutting-edge products that push the boundaries of what&apos;s possible in tech.
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <Link href="https://x.com/_mrbuddhu_" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                      <X className="w-5 h-5" />
                    </Link>
                    <Link href="https://linkedin.com/in/mrbuddhu" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                      <Linkedin className="w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border-white/10 hover:bg-gray-800/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 rounded-full bg-purple-400/20 flex items-center justify-center ring-4 ring-purple-400 shrink-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ShabiK-buGilxwRkR509eYuhDO9xjDRY1qO1n.jpeg"
                        alt="Shabi Kaushal (msbuddhu)"
                        width={96}
                        height={96}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Shabi Kaushal (msbuddhu)</h3>
                      <p className="text-purple-400">Design Lead & Co-founder</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mt-4">
                    Shabi Kaushal, known as msbuddhu, is a creative powerhouse with a keen eye for design and user experience. As the Design Lead of Sanganak, she ensures that all our products are not only functional but also aesthetically pleasing and userfriendly,creating digital experiences that delight andinspire.
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <Link href="https://x.com/msbuddhu" className="text-gray-300 hover:text-purple-400 transition-colors duration-300"><X className="w-5 h-5" />
                    </Link>
                    <Link href="https://linkedin.com/in/msbuddhu" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                      <Linkedin className="w-5" />
                    </Link>                    </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container mt-24 md:mt-32 text-white">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-base md:text-xl text-gray-300">Comprehensive IT solutions for your business needs</p>
          </div>
          <div className="mt-12 md:mt-16 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Card key={i} className="border-white/10 bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-purple-500 rounded-full">
                    <service.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg md:text-xl font-semibold text-purple-400">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-300">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="container mt-24 md:mt-32 text-white">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold sm:text-4xl">Our Portfolio</h2>
            <p className="mt-4 text-base md:text-lg text-gray-300">Explore our latest projects across various domains</p>
          </div>
          <Tabs defaultValue="saas" className="mt-12 md:mt-16">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
              {Object.keys(portfolioProjects).map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs md:text-sm capitalize data-[state=active]:bg-purple-400 data-[state=active]:text-gray-900">
                  {category === 'ai' ? 'AI' : category}
                </TabsTrigger>
              ))}
            </TabsList>
            {Object.entries(portfolioProjects).map(([category, projects]) => (
              <TabsContent key={category} value={category}>
                <div className="mt-6 md:mt-8 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project, i) => (
                    <Card key={i} className="overflow-hidden border-white/10 bg-gray900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 group">
                      <div className="relative">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={400}
                          height={300}
                          className="w-full h-[200px] md:h-[225px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-base md:text-lg font-semibold text-white">{project.name}</h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="container mt-24 md:mt-32 text-white">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold sm:text-4xl">Client Testimonials</h2>
            <p className="mt-4 text-base md:text-lg text-gray-300">
              Hear from our satisfied global clients about their experiences working with Sanganak
            </p>
          </div>
          <div className="relative">
            <button
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/50 p-2 rounded-full backdrop-blur-sm hover:bg-gray-800/50"
            >
              <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </button>
            <div 
              ref={testimonialRef}
              className="grid grid-flow-col auto-cols-[minmax(280px,1fr)] md:auto-cols-[minmax(350px,1fr)] gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 max-w-[calc(280px*3+1rem)] md:max-w-[calc(350px*3+2rem)] mx-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="border-white/10 bg-gray-900/50 backdrop-blur-sm flex-shrink-0 w-[280px] md:w-[350px] snap-center overflow-hidden group relative hover:bg-gray-800/50 transition-colors duration-300"
                >
                  <CardContent className="p-4 md:p-6">
                    <p className="text-sm md:text-base text-white mb-4">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-purple-400/20 flex items-center justify-center ring-2 ring-purple-400">
                        <User className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm md:text-base text-white">{testimonial.author}</p>
                        <p className="text-xs md:text-sm text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <button
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900/50 p-2 rounded-full backdrop-blur-sm hover:bg-gray-800/50"
            >
              <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
            </button>
          </div>
        </section>

        {/* Tools Section */}
        <div id="tools" className="container mt-24 md:mt-32 text-white overflow-hidden">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold sm:text-4xl">Our Tech Stack</h2>
            <p className="mt-4 text-base md:text-lg text-gray-300">Cutting-edge tools and technologies we use to deliver exceptional results</p>
          </div>

          {/* Floating Logos */}
          <div className="relative h-[300px] md:h-[400px]">
            <div className="absolute inset-0">
              <div className="flex flex-wrap justify-center items-center h-full">
                {toolLogos.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center justify-center m-2 sm:m-4 transition-all duration-300 hover:scale-110"
                    style={{
                      animation: `float 6s ease-in-out infinite ${index * 0.2}s`,
                    }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 relative flex items-center justify-center mb-2 bg-gray-800/50 rounded-full p-2">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={48}
                        height={48}
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                    <span className="text-[8px] sm:text-[10px] md:text-xs text-center text-gray-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Bubbles */}
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-2 sm:gap-4 max-w-5xl mx-auto">
            {[
              "Custom SaaS Development",
              "Graphic Design",
              "UI/UX Design",
              "Web Development",
              "Mobile Development",
              "DevOps Solutions",
              "Blockchain Solutions",
              "AI Integration"
            ].map((service) => (
              <div
                key={service}
                className="rounded-full border border-white/10 bg-black/50 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm md:text-base text-white hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="container mb-24 mt-24 md:mb-32 md:mt-32 text-white">
          <div className="rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 md:p-16 hover:bg-gray-800/50 transition-colors duration-300">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-2xl md:text-3xl font-bold sm:text-4xl">Contact Sanganak</h2>
              <p className="mb-6 md:mb-8 text-base md:text-lg text-gray-300 max-w-2xl">
                Ready to transform your business with cutting-edge tech solutions? <br className="hidden md:inline" />Get in touch today!
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white mb-6 md:mb-8 w-full sm:w-auto">
                <Link href="https://cal.com/sanganak/strategycall">
                  Book Your Free Strategy Call
                </Link>
              </Button>
              <p className="mb-4 text-base md:text-lg text-gray-300">Connect with Sanganak on social media:</p>
              <div className="flex justify-center space-x-4 mb-6 md:mb-8">
                <Link href="https://www.instagram.com/sanganakorg/" className="text-gray-300 hover:text-purple-400">
                  <Instagram className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link href="https://github.com/SanganakOrg" className="text-gray-300 hover:text-purple-400">
                  <Github className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link href="https://www.youtube.com/@sanganakorg" className="text-gray-300 hover:text-purple-400">
                  <Youtube className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link href="https://www.linkedin.com/company/sanganakorg/" className="text-gray-300 hover:text-purple-400">
                  <Linkedin className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
                <Link href="https://x.com/sanganakorg" className="text-gray-300 hover:text-purple-400">
                  <X className="h-6 w-6 md:h-8 md:w-8" />
                </Link>
              </div>
              <p className="text-sm md:text-base text-gray-300">Email: <Link href="mailto:contact@sanganak.org" className="text-purple-400 hover:underline">contact@sanganak.org</Link></p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/10 py-6 md:py-8 text-center text-xs md:text-sm text-gray-400">
          <div className="container">
            <p>
              Built with love by{' '}
              <Link href="https://linktr.ee/mrbuddhu" className="text-purple-400 hover:underline">
                mrbuddhu
              </Link>{' '}
              &{' '}
              <Link href="https://linktr.ee/msbuddhu" className="text-purple-400 hover:underline">
                msbuddhu
              </Link>
            </p>
            <p className="mt-2">Sanganak - Transforming ideas into reality since 2021</p>
            <p className="mt-2">
              To view older version visit:{' '}
              <Link href="https://oldsanganak.vercel.app/" className="text-purple-400 hover:underline">
                www.old.sanganak.org
              </Link>
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}

