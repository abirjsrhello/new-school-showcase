import sabujImg from "@/assets/sabuj-ahmed.webp";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <span
              className="inline-block px-5 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: "hsl(var(--tag-bg))",
                color: "hsl(var(--tag-text))",
              }}
            >
              Educator | Scholar | Edupreneur
            </span>
            <h1
              className="text-4xl md:text-5xl font-black leading-tight mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Dr. Sabuj Ahmed,
              <br />
              Principal, NSD
            </h1>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-lg">
              The New School Dhaka is being led by Sabuj Ahmed, an accomplished
              scholar and educator working in this sector for last 27 years. On
              top of being a post graduate in English Literature, he has earned
              B.Ed. and M.Ed. degree that shows his dedication to education
              sector. He has also attended University of Oslo as a NORAD scholar.
              With his leadership, experience and expertise, the New School Dhaka
              is reaching new heights to solidify its position as a prime
              educational institute of the country.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={sabujImg}
              alt="Dr. Sabuj Ahmed, Principal of The New School Dhaka"
              className="rounded-2xl w-full max-w-md object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t mt-12"
        style={{
          backgroundColor: "hsl(var(--footer-bg))",
          borderColor: "hsl(var(--footer-border))",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand + Socials */}
            <div>
              <h3 className="font-bold text-lg mb-1">🏫 The New School Dhaka</h3>
              <p className="text-sm text-muted-foreground mb-4">SOCIALS</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-4 h-4 text-background" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-4 h-4 text-background" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Twitter className="w-4 h-4 text-background" />
                </a>
              </div>
            </div>

            {/* Academics */}
            <div>
              <h4 className="font-bold text-sm uppercase mb-3">Academics</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Board</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">News</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm uppercase mb-3">Email Us</h4>
              <p className="text-sm text-muted-foreground mb-3">info@nsdschool.com</p>
              <h4 className="font-bold text-sm uppercase mb-2">Call Us</h4>
              <p className="text-sm text-muted-foreground">+8801329692494</p>
              <p className="text-sm text-muted-foreground">02 222270393</p>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-bold text-sm uppercase mb-3">Location</h4>
              <p className="text-sm text-muted-foreground">
                House: 41, Road: 1/A, Block: I,
                <br />
                Banani, Dhaka-1213
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
