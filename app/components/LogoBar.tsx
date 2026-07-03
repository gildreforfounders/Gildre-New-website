"use client";
import Image from "next/image";

const logos = [
  { name: "Stripe",              src: "/images/logos/stripe.png"      },
  { name: "ClassPass",           src: "/images/logos/classpass.png"   },
  { name: "Google",              src: "/images/logos/google.png"      },
  { name: "HubSpot",             src: "/images/logos/hubspot.png"     },
  { name: "Meta",                src: "/images/logos/meta.png"        },
  { name: "Techstars",           src: "/images/logos/techstars.png"   },
  { name: "StubHub",             src: "/images/logos/stubhub.jpeg"    },
  { name: "Amazon",              src: "/images/logos/amazon.webp"     },
  { name: "Propellant Ventures", src: "/images/logos/propellant.jpeg", scale: 1.9 },
];

export default function LogoBar() {
  const track = [...logos, ...logos, ...logos];

  return (
    <section
      className="py-14 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f1524 0%, #1C2744 50%, #0f1524 100%)",
      }}
    >
      <p className="mb-10 text-center text-[0.6rem] font-bold uppercase tracking-[0.28em] text-white/40">
        Where Our Members Come From
      </p>

      {/*
        The filter + blend mode MUST sit on a wrapper OUTSIDE the CSS-animated
        element. A CSS transform creates a new compositing layer, so blend-mode
        on children inside it blends against that layer's transparent background
        rather than the dark section background — resulting in white blocks.
        Wrapping outside means the composed (filtered) strip is screen-blended
        as a unit against the dark section background, making inverted-white
        logo backgrounds vanish correctly.
      */}
      <div
        style={{
          filter: "grayscale(1) invert(1)",
          mixBlendMode: "screen",
        }}
      >
        <div
          className="flex items-center"
          style={{
            width: "max-content",
            animation: "logoScroll 32s linear infinite",
          }}
        >
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              style={{
                position: "relative",
                flexShrink: 0,
                width: 148,
                height: 60,
                marginLeft: 40,
                marginRight: 40,
              }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="148px"
                className="object-contain"
                style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
