import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Dean Roofing Company",
    tagline: "Roofs Built To Last Generations",
    phone: "(727) 446-6077",
    phoneHref: "tel:+17274466077",
    email: "info@deanroofing.com",
    address: "123 Main St",
    city: "St. Petersburg",
    serviceAreas: ["St. Petersburg", "Clearwater", "Tampa Bay Area", "Largo", "Pinellas Park", "Dunedin"],
    license: "CCC020246",
    since: "1946",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ember",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Residential Roofing", desc: "Expert installation and repair for all residential roof types, ensuring lasting protection for your home.", urgent: false },
    { icon: "briefcase", title: "Commercial Roofing", desc: "Specialized roofing solutions for businesses, designed for durability and minimal disruption to your operations.", urgent: false },
    { icon: "wrench", title: "Roof Repair", desc: "Prompt and effective repairs for leaks, storm damage, and wear, extending the life of your existing roof.", urgent: true },
    { icon: "hammer", title: "Roof Replacement", desc: "Complete roof tear-offs and new installations, upgrading your property with modern, high-performance materials.", urgent: false },
    { icon: "shield-check", title: "Emergency Roofing", desc: "24/7 rapid response for critical roof damage, securing your property against further harm.", urgent: true },
    { icon: "droplets", title: "Leaky Roof Repair", desc: "Targeted repair of roof leaks, preventing water damage and mold growth in your home or business.", urgent: true }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Clearwater, FL", stars: 5, text: "Dean Roofing replaced our asphalt shingle roof last summer, and the experience was fantastic. From the initial quote to the final inspection, their team was professional and efficient. They finished the job in just three days, and the new roof looks incredible. We've had several heavy rains since, and not a single leak!" },
    { name: "Mark T.", location: "St. Petersburg, FL", stars: 5, text: "When a tree fell on our roof during a storm, Dean Roofing was there within hours. Their emergency service was a lifesaver. They quickly tarped the damaged area and returned a week later for a full repair. The crew was courteous, and the quality of work was exceptional. Highly recommend their prompt and reliable service." },
    { name: "Emily R.", location: "Dunedin, FL", stars: 5, text: "We chose Dean Roofing for our commercial building's flat roof replacement, and they exceeded our expectations. Their project manager kept us informed every step of the way, and they completed the work on schedule and within budget. The new roof is performing perfectly, and we appreciate their attention to detail and professionalism." }
  ],

  trustBadges: [
    "Owens Corning Platinum Contractor", "State Licensed CCC020246", "A+ BBB Rating", "77+ Years Experience", "Licensed, Bonded & Insured", "Same Location Since 1946"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 77, label: "Yrs Experience", suffix: "+", decimals: 0 },
    { value: 10000, label: "Roofs Installed", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize urgent requests, providing quick assessments and solutions to protect your property." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Receive clear, detailed estimates with no hidden fees, ensuring transparency from start to finish." },
    { icon: "award", title: "Certified Pros", desc: "Our team consists of highly trained and certified roofing specialists dedicated to quality craftsmanship." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction on every project." },
    { icon: "phone", title: "24/7 Support", desc: "Our team is available around the clock for emergency services and to answer your roofing questions." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive with all necessary tools and materials to complete your roofing project efficiently." }
  ],

  formServiceOptions: ["Residential Roofing", "Commercial Roofing", "Roof Repair", "Roof Replacement", "Emergency Roofing", "Leaky Roof Repair"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!