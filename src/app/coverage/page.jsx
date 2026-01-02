import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";

const coverageSections = [
  {
    title: "Redland City Council (complete area)",
    description:
      "Chandler borders Redland City, so almost all mainland suburbs in this council are within the standard 25km service radius.",
    groups: [
      {
        name: "Suburbs",
        items: [
          "Alexandra Hills",
          "Birkdale",
          "Capalaba",
          "Cleveland",
          "Mount Cotton",
          "Ormiston",
          "Redland Bay",
          "Sheldon",
          "Thorneside",
          "Thornlands",
          "Victoria Point",
          "Wellington Point",
        ],
      },
      {
        name: "Islands within range",
        items: [
          "Coochiemudlo Island",
          "Macleay Island",
          "Lamb Island",
          "Karragarra Island",
          "Peel Island",
        ],
      },
    ],
    note:
      "North Stradbroke Island (Dunwich) is at the edge of the 25km radius.",
  },
  {
    title: "Brisbane City Council",
    description:
      "Service coverage includes the eastern, southern, inner city, northern, and western suburbs listed below.",
    groups: [
      {
        name: "Eastern suburbs (immediate vicinity)",
        items: [
          "Belmont",
          "Burbank",
          "Gumdale",
          "Ransome",
          "Wakerley",
          "Wynnum",
          "Wynnum West",
          "Manly",
          "Manly West",
          "Lota",
          "Tingalpa",
          "Hemmant",
          "Murarrie",
          "Cannon Hill",
          "Morningside",
          "Seven Hills",
          "Balmoral",
          "Bulimba",
          "Hawthorne",
          "Norman Park",
          "Camp Hill",
          "Carina",
          "Carina Heights",
          "Carindale",
        ],
      },
      {
        name: "Southern suburbs",
        items: [
          "Mackenzie",
          "Mansfield",
          "Wishart",
          "Mount Gravatt",
          "Mount Gravatt East",
          "Upper Mount Gravatt",
          "Holland Park",
          "Holland Park West",
          "Tarragindi",
          "Greenslopes",
          "Stones Corner",
          "Coopers Plains",
          "Robertson",
          "Macgregor",
          "Eight Mile Plains",
          "Rochedale",
          "Sunnybank",
          "Sunnybank Hills",
          "Runcorn",
          "Kuraby",
          "Stretton",
          "Calamvale",
          "Algester",
          "Parkinson",
          "Drewvale",
          "Larapinta",
          "Heathwood",
          "Pallara",
          "Forest Lake",
          "Doolandella",
          "Durack",
          "Inala",
          "Richlands",
          "Willawong",
          "Acacia Ridge",
          "Archerfield",
          "Rocklea",
          "Salisbury",
          "Moorooka",
          "Yeerongpilly",
          "Yeronga",
          "Annerley",
          "Fairfield",
          "Dutton Park",
        ],
      },
      {
        name: "Inner city and central",
        items: [
          "Brisbane City (CBD)",
          "Fortitude Valley",
          "New Farm",
          "Teneriffe",
          "Newstead",
          "Bowen Hills",
          "Spring Hill",
          "Herston",
          "Kelvin Grove",
          "Red Hill",
          "Paddington",
          "Milton",
          "Auchenflower",
          "Toowong",
          "St Lucia",
          "West End",
          "South Brisbane",
          "Highgate Hill",
          "Kangaroo Point",
          "East Brisbane",
          "Woolloongabba",
        ],
      },
      {
        name: "Northern suburbs (up to Chermside)",
        items: [
          "Albion",
          "Ascot",
          "Hamilton",
          "Eagle Farm",
          "Pinkenba",
          "Clayfield",
          "Hendra",
          "Wooloowin",
          "Lutwyche",
          "Windsor",
          "Wilston",
          "Newmarket",
          "Alderley",
          "Grange",
          "Gordon Park",
          "Kedron",
          "Nundah",
          "Northgate",
          "Virginia",
          "Banyo",
          "Wavell Heights",
          "Chermside",
          "Chermside West",
          "Stafford",
          "Stafford Heights",
          "Everton Park",
          "McDowall",
        ],
      },
      {
        name: "Western suburbs (up to Kenmore)",
        items: [
          "Taringa",
          "Indooroopilly",
          "Chelmer",
          "Graceville",
          "Sherwood",
          "Corinda",
          "Oxley",
          "Darra",
          "Seventeen Mile Rocks",
          "Sinnamon Park",
          "Jindalee",
          "Mount Ommaney",
          "Westlake",
          "Middle Park",
          "Riverhills",
          "Fig Tree Pocket",
          "Chapel Hill",
          "Kenmore",
          "Kenmore Hills",
        ],
      },
    ],
  },
  {
    title: "Logan City Council",
    description:
      "Northern and eastern parts of Logan City fall within the 25km service radius.",
    groups: [
      {
        name: "Suburbs",
        items: [
          "Priestdale",
          "Rochedale South",
          "Springwood",
          "Daisy Hill",
          "Shailer Park",
          "Cornubia",
          "Carbrook",
          "Loganholme",
          "Tanah Merah",
          "Slacks Creek",
          "Underwood",
          "Woodridge",
          "Kingston",
          "Logan Central",
          "Loganlea",
          "Meadowbrook",
          "Waterford",
          "Waterford West",
          "Bethania",
          "Edens Landing",
          "Holmview",
          "Beenleigh",
          "Eagleby",
          "Mount Warren Park",
          "Bahrs Scrub (northern parts)",
          "Berrinba",
          "Marsden",
          "Crestmead",
          "Heritage Park",
          "Browns Plains",
          "Regents Park",
          "Hillcrest",
          "Forestdale",
        ],
      },
    ],
  },
  {
    title: "Edge cases (borderline 25km)",
    description:
      "These suburbs are on the outer rim of the 25km radius. Coverage depends on the exact address.",
    groups: [
      {
        name: "Borderline coverage",
        items: [
          "Wacol",
          "Ellen Grove",
          "Brookfield",
          "The Gap",
          "Aspley",
          "Geebung",
          "Yatala",
          "Dunwich (North Stradbroke Island)",
        ],
      },
    ],
  },
];

export default function CoveragePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Cleaning Service Areas",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Moppit Clean",
      "url": "https://moppitclean.com.au",
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Brisbane City Council",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Redland City Council",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Logan City Council",
      },
    ],
    "serviceType": "Commercial cleaning",
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <section className="bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="max-w-2xl animate-slide-up">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  Brisbane coverage map
                </span>
                <h1 className="mt-4 text-3xl sm:text-5xl font-semibold text-zinc-900">
                  Service Areas for Commercial Cleaning
                </h1>
                <p className="mt-4 text-lg text-zinc-700">
                  Moppit Clean supports businesses across Brisbane, Redland City,
                  and Logan. Coverage is based on a 25km radius from Chandler,
                  QLD.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/contactus"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-md text-white font-medium bg-primary transition-colors hover:bg-primary/90"
                  >
                    Request a Quote
                  </a>
                  <a
                    href="tel:+61404616261"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-md text-zinc-900 font-medium bg-white border border-zinc-200 transition-colors hover:bg-zinc-50"
                  >
                    Call 0404 616 261
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-scale-in">
                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    Primary councils
                  </p>
                  <p className="mt-2 text-xl font-semibold text-zinc-900">
                    Brisbane, Redland, Logan
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">
                    Commercial cleaning across key council areas.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    Radius
                  </p>
                  <p className="mt-2 text-xl font-semibold text-zinc-900">
                    25km from Chandler
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">
                    Address-based confirmation available.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    Support
                  </p>
                  <p className="mt-2 text-xl font-semibold text-zinc-900">
                    24/7 availability
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">
                    Emergency and after-hours cleaning.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">
                    Response time
                  </p>
                  <p className="mt-2 text-xl font-semibold text-zinc-900">
                    1 business day
                  </p>
                  <p className="mt-2 text-sm text-zinc-600">
                    Fast quotes and clear scheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
            {coverageSections.map((section, sectionIndex) => (
              <details className="group rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 sm:p-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-zinc-700 max-w-3xl">
                      {section.description}
                    </p>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-secondary text-zinc-700 transition-transform duration-300 group-open:rotate-180">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 8l4 4 4-4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.groups.map((group, groupIndex) => (
                      <AnimateIn
                        key={group.name}
                        className="rounded-xl border border-zinc-100 bg-secondary/20 p-5"
                        delay={sectionIndex * 80 + groupIndex * 90}
                      >
                        <h3 className="text-lg font-semibold text-zinc-900">
                          {group.name}
                        </h3>
                        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-zinc-700">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </AnimateIn>
                    ))}
                  </div>
                  {section.note && (
                    <p className="mt-6 text-sm text-zinc-600">
                      {section.note}
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-secondary/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 sm:p-10 shadow-sm text-center">
              <p className="text-xs uppercase tracking-wide text-zinc-500">
                Coverage check
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-zinc-900">
                Not sure if you are in range?
              </h2>
              <p className="mt-3 text-zinc-700">
                Share your suburb or address and we will confirm availability
                quickly.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="/contactus"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-md text-white font-medium bg-primary transition-colors hover:bg-primary/90"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+61404616261"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-md text-zinc-900 font-medium bg-secondary border border-zinc-200 transition-colors hover:bg-zinc-50"
                >
                  Call 0404 616 261
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
