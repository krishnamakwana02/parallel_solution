import "./Services.scss";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <ServiceCard
          index={0}
          title="CONTENT"
          description="Words, film and design that earn attention and hold it — the raw material every campaign is built from."
          list={[
            "Editorial & copywriting",
            "Video & motion",
            "Social content",
            "Brand & visual identity",
          ]}
        />

        <ServiceCard
          index={1}
          title="ADVERTISING"
          description="Ideas big enough to be seen and sharp enough to be remembered, across every screen and street."
          list={[
            "Campaign concepts",
            "Art direction",
            "Production",
            "Print, OOH & digital",
          ]}
        />

        <ServiceCard
          index={2}
          title="MARKETING"
          description="Media, data and growth planning that compounds — turning attention into measurable movement."
          list={[
            "Media planning & buying",
            "Performance marketing",
            "SEO & analytics",
            "Growth strategy",
          ]}
        />
      </div>
    </section>
  );
}