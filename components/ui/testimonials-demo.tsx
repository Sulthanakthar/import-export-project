import { TestimonialSection } from "@/components/ui/testimonials";

const testimonialsData = [
  {
    id: 1,
    quote:
      "Clear specifications, packaging options and fast communication make it much easier for our procurement team to evaluate a new supply relationship.",
    name: "A. Rahman",
    role: "Procurement Manager",
    company: "Food Distribution Group",
    market: "UAE",
    imageSrc:
      "https://cdn.21st.dev/assets/mirror/74/745e68f049a196dc76df596f440abe803aa3c70fe529bfecfbc25ed29e1c2072.jpg",
  },
  {
    id: 2,
    quote:
      "The product presentation is structured around the information B2B buyers actually need: grade, quantity, packing, quality process and destination.",
    name: "Meera Patel",
    role: "Sourcing Lead",
    company: "Retail Supply Network",
    market: "Singapore",
    imageSrc:
      "https://cdn.21st.dev/assets/mirror/ee/ee5dc884ecd5d2542c64b63a4b246c9db7fff2faa43b67b29c0c49f914ab82ae.jpg",
  },
  {
    id: 3,
    quote:
      "A professional enquiry flow gives distributors confidence to discuss recurring volume, custom packaging and market-specific requirements from the first conversation.",
    name: "Daniel Okoro",
    role: "Distribution Director",
    company: "Regional Foods Trading",
    market: "Kenya",
    imageSrc:
      "https://cdn.21st.dev/assets/mirror/c9/c9f2bfc1b5fc1ad9a703dc7a3a84633690bb3d0da8c7606caa4d8dfdddc3ecaf.jpg",
  },
];

export default function TestimonialSectionDemo() {
  return (
    <TestimonialSection
      eyebrow="Global buyer experience"
      title="Confidence that travels beyond the first order."
      subtitle="A premium B2B experience should make sourcing feel clear before the first call — from product fit and quality expectations to packaging and destination requirements."
      testimonials={testimonialsData}
      backgroundVideoSrc="/videos/global-harvest-4k.mp4"
      disclaimer="Demo testimonial content for presentation purposes. Replace names, companies, photos and quotations with verified client testimonials before production launch."
    />
  );
}
