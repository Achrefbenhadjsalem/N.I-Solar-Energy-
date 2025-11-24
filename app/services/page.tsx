import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services | SolisGrid Energy",
  description: "Solar panel design, installation, storage, and maintenance services.",
};

const serviceCatalog = [
  {
    title: "Residential Rooftop",
    description:
      "Architectural-grade systems designed to complement modern and historic homes. Includes structural review, electrical upgrades, monitoring setup, and utility paperwork.",
    highlights: ["Roof replacement coordination", "Premium black-on-black modules", "Microinverters for shade mitigation"],
  },
  {
    title: "Commercial & Industrial",
    description:
      "Large-format arrays, carports, and ground mounts engineered to meet aggressive payback windows. Our in-house EPC team handles permitting, procurement, and commissioning.",
    highlights: ["Power purchase agreements", "24/7 production dashboards", "Preventative maintenance contracts"],
  },
  {
    title: "Battery Storage",
    description:
      "Grid-tied and off-grid battery solutions sized for your critical loads. We integrate with Tesla Powerwall, Enphase IQ, and commercial-scale ESS platforms.",
    highlights: ["Load-shedding automation", "Demand charge reduction", "Generator integration"],
  },
  {
    title: "Operations & Maintenance",
    description:
      "Protect your investment with quarterly inspections, cleaning, and performance audits. Remote diagnostics catch issues before they impact output.",
    highlights: ["Thermal drone inspections", "Module cleaning plans", "Warranty management"],
  },
  {
    title: "Financing & Incentives",
    description:
      "Navigate federal tax credits, local rebates, REAP grants, and custom financing packages. We model multi-year cash flow so you can make confident decisions.",
    highlights: ["Incentive filing", "Green loan marketplace", "Utility rate optimization"],
  },
  {
    title: "Microgrids & EV Infrastructure",
    description:
      "Custom microgrid architecture and EV charging infrastructure for campuses, municipalities, and resorts that need resilience and scalability.",
    highlights: ["Smart switchgear controls", "Interoperable charging networks", "SCADA integrations"],
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">Our expertise</p>
        <h1 className="text-4xl font-semibold text-slate-900">Full-service solar delivery</h1>
        <p className="text-lg text-slate-600">
          From feasibility through long-term performance management, SolisGrid is the partner of choice for forward-thinking
          property owners. Every engagement is led by NABCEP-certified engineers, project managers, and master electricians.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {serviceCatalog.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

