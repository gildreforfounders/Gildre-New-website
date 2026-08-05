"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const CHAPTERS = new Set(["New York City", "Chicago", "San Francisco", "Austin", "Boston"]);
const GROWING = new Set(["Seattle", "Los Angeles"]);

const CITY_SLUGS: Record<string, string> = {
  "New York City": "/nyc",
  "Chicago": "/chicago",
  "San Francisco": "/bayarea",
  "Austin": "/austin",
  "Boston": "/boston",
  "Seattle": "/seattle",
  "Los Angeles": "/la",
};

const cities: { name: string; coords: [number, number] }[] = [
  { name: "New York City",  coords: [-74.006,  40.713] },
  { name: "Chicago",        coords: [-87.630,  41.878] },
  { name: "Houston",        coords: [-95.370,  29.760] },
  { name: "Los Angeles",    coords: [-118.244, 34.052] },
  { name: "San Diego",      coords: [-117.161, 32.716] },
  { name: "San Francisco",  coords: [-122.419, 37.775] },
  { name: "Austin",         coords: [-97.743,  30.267] },
  { name: "Boston",         coords: [-71.059,  42.360] },
  { name: "Seattle",        coords: [-122.332, 47.606] },
  { name: "Portland",       coords: [-122.677, 45.523] },
  { name: "Denver",         coords: [-104.990, 39.739] },
  { name: "Miami",          coords: [-80.192,  25.762] },
  { name: "Toronto",        coords: [-79.383,  43.653] },
  { name: "Minneapolis",    coords: [-93.265,  44.978] },
  { name: "St. Louis",      coords: [-90.199,  38.627] },
  { name: "Kansas City",    coords: [-94.578,  39.100] },
  { name: "Indianapolis",   coords: [-86.158,  39.768] },
  { name: "Charlotte",      coords: [-80.843,  35.227] },
  { name: "New Orleans",    coords: [-90.071,  29.951] },
  { name: "Mexico City",    coords: [-99.133,  19.433] },
  { name: "Billings",       coords: [-108.501, 45.783] },
];

type Tooltip = {
  name: string;
  slug?: string;
  isGrowing: boolean;
  x: number;
  y: number;
};

export default function CommunityMap() {
  const router = useRouter();
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  function handleEnter(e: React.MouseEvent, city: string, isGrowing: boolean) {
    const slug = CITY_SLUGS[city];
    setHovered(city);
    setTooltip({ name: city, slug, isGrowing, x: e.clientX, y: e.clientY });
  }

  function handleMove(e: React.MouseEvent) {
    setTooltip((prev) => prev ? { ...prev, x: e.clientX, y: e.clientY } : null);
  }

  function handleLeave() {
    setHovered(null);
    setTooltip(null);
  }

  function handleClick(slug?: string) {
    if (slug) router.push(slug);
  }

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-20"
      style={{ background: "radial-gradient(ellipse at 50% 40%, #1C2744 0%, #0f1524 65%, #080e1a 100%)" }}
    >
      {/* Floating tooltip */}
      {tooltip && (
        <div
          className="pointer-events-none fixed z-50 rounded-xl px-3.5 py-2.5 shadow-2xl"
          style={{
            left: tooltip.x + 16,
            top: tooltip.y - 52,
            backgroundColor: "rgba(15,21,36,0.96)",
            border: "1px solid rgba(201,169,110,0.4)",
            backdropFilter: "blur(8px)",
            minWidth: "120px",
          }}
        >
          <p className="text-xs font-bold" style={{ color: "#C9A96E" }}>{tooltip.name}</p>
          {tooltip.slug && (
            <p className="mt-0.5 text-[0.65rem]" style={{ color: "rgba(255,255,255,0.5)" }}>
              {tooltip.isGrowing ? "Growing chapter →" : "View chapter →"}
            </p>
          )}
        </div>
      )}

      {/* Heading */}
      <div className="relative z-10 px-6 text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#C9A96E]">
          Gildre Network
        </p>
        <h2
          className="mt-3 text-[2rem] font-bold text-white sm:text-[2.5rem]"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Where High-Caliber{" "}
          <span style={{ color: "#C9A96E" }}>Founders Connect</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/50">
          250+ members across 74 cities and 5 core in-person chapters.
        </p>
      </div>

      {/* Map */}
      <div className="relative mx-auto mt-8 max-w-5xl px-4">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: [-96, 39], scale: 510 }}
          width={900}
          height={520}
          style={{ width: "100%", height: "auto" }}
        >
          <defs>
            <pattern id="gildreDotsMap" x="0" y="0" width="7" height="7" patternUnits="userSpaceOnUse">
              <circle cx="3.5" cy="3.5" r="1.3" fill="rgba(201,169,110,0.22)" />
            </pattern>
            <filter id="pinGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="pinGlowHot" x="-120%" y="-120%" width="340%" height="340%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="url(#gildreDotsMap)"
                  stroke="none"
                  style={{ outline: "none" }}
                />
              ))
            }
          </Geographies>

          {cities.map((city) => {
            const isChapter = CHAPTERS.has(city.name);
            const isGrowing = GROWING.has(city.name);
            const isLinked = isChapter || isGrowing;
            const isHot = hovered === city.name;
            const isNYC = city.name === "New York City";

            if (isChapter) {
              return (
                <Marker key={city.name} coordinates={city.coords}>
                  <g
                    onMouseEnter={(e) => handleEnter(e as unknown as React.MouseEvent, city.name, false)}
                    onMouseMove={(e) => handleMove(e as unknown as React.MouseEvent)}
                    onMouseLeave={handleLeave}
                    onClick={() => handleClick(CITY_SLUGS[city.name])}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Large transparent hit target */}
                    <circle r={18} fill="transparent" />
                    {/* Outer pulse ring on hover */}
                    {isHot && (
                      <circle
                        r={16}
                        fill="rgba(201,169,110,0.12)"
                        stroke="rgba(201,169,110,0.5)"
                        strokeWidth={1}
                      />
                    )}
                    <circle
                      r={isHot ? 11 : 9}
                      fill={isHot ? "rgba(201,169,110,0.28)" : "rgba(201,169,110,0.18)"}
                      stroke="#C9A96E"
                      strokeWidth={isHot ? 2 : 1.5}
                      filter={isHot ? "url(#pinGlowHot)" : "url(#pinGlow)"}
                      style={{ transition: "r 0.15s ease" }}
                    />
                    <circle r={isHot ? 4 : 3} fill="#C9A96E" style={{ transition: "r 0.15s ease" }} />
                    <text
                      textAnchor={isNYC ? "start" : "middle"}
                      x={isNYC ? 13 : 0}
                      y={isNYC ? 4 : -14}
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontSize: isHot ? "9.5px" : "8.5px",
                        fill: isHot ? "#C9A96E" : "#C9A96E",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                        transition: "font-size 0.15s ease",
                      }}
                    >
                      {city.name}
                    </text>
                  </g>
                </Marker>
              );
            }

            if (isGrowing) {
              return (
                <Marker key={city.name} coordinates={city.coords}>
                  <g
                    onMouseEnter={(e) => handleEnter(e as unknown as React.MouseEvent, city.name, true)}
                    onMouseMove={(e) => handleMove(e as unknown as React.MouseEvent)}
                    onMouseLeave={handleLeave}
                    onClick={() => handleClick(CITY_SLUGS[city.name])}
                    style={{ cursor: "pointer" }}
                  >
                    <circle r={18} fill="transparent" />
                    {isHot && (
                      <circle
                        r={14}
                        fill="rgba(201,169,110,0.08)"
                        stroke="rgba(201,169,110,0.35)"
                        strokeWidth={1}
                        strokeDasharray="3 2"
                      />
                    )}
                    <circle
                      r={isHot ? 11 : 9}
                      fill={isHot ? "rgba(201,169,110,0.14)" : "rgba(201,169,110,0.08)"}
                      stroke="#C9A96E"
                      strokeWidth={1.2}
                      strokeDasharray="3 2"
                      filter={isHot ? "url(#pinGlowHot)" : "url(#pinGlow)"}
                    />
                    <circle r={isHot ? 3.5 : 2.5} fill={isHot ? "rgba(201,169,110,0.9)" : "rgba(201,169,110,0.6)"} />
                    <text
                      textAnchor="middle"
                      y={-14}
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontSize: "7.5px",
                        fill: isHot ? "rgba(201,169,110,0.9)" : "rgba(201,169,110,0.65)",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {city.name}
                    </text>
                  </g>
                </Marker>
              );
            }

            // Decorative dot — no interaction
            return (
              <Marker key={city.name} coordinates={city.coords}>
                <circle r={4} fill="rgba(201,169,110,0.25)" stroke="#C9A96E" strokeWidth={1} />
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {/* Chapter pills */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 px-6">
        {[...CHAPTERS].map((c) => (
          <Link
            key={c}
            href={CITY_SLUGS[c] ?? "/"}
            className="rounded-full px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-widest transition-all duration-200 hover:brightness-125 hover:-translate-y-px"
            style={{
              backgroundColor: "rgba(201,169,110,0.1)",
              border: "1px solid rgba(201,169,110,0.3)",
              color: "#C9A96E",
            }}
          >
            {c}
          </Link>
        ))}
        {[...GROWING].map((c) => (
          <Link
            key={c}
            href={CITY_SLUGS[c] ?? "/"}
            className="rounded-full px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-widest flex items-center gap-1.5 transition-all duration-200 hover:brightness-125 hover:-translate-y-px"
            style={{
              backgroundColor: "rgba(201,169,110,0.04)",
              border: "1px dashed rgba(201,169,110,0.3)",
              color: "rgba(201,169,110,0.6)",
            }}
          >
            {c}
            <span className="text-[0.55rem] font-bold tracking-wider" style={{ color: "rgba(201,169,110,0.5)" }}>GROWING</span>
          </Link>
        ))}
      </div>

      {/* Footer stats */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-6">
        {[
          { label: "Active Members", value: "250+" },
          { label: "In-Person Chapters", value: "5" },
          { label: "Countries", value: "8+" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-fraunces)", color: "#C9A96E" }}>
              {s.value}
            </p>
            <p className="text-xs uppercase tracking-widest text-white/40">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
