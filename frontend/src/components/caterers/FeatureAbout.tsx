import HygeneIcon from "@/assets/svg/HigeneIcon";
import RupeeIcon from "@/assets/svg/RupeeIcon";
import SupportIcon from "@/assets/svg/SupportIcon";
import TopRatedIcon from "@/assets/svg/TopRatedIcon";

const features = [
  {
    title: "Top Rated Caterers",
    subtitle: "Handpicked and verified",
    icon: <TopRatedIcon />,
  },
  {
    title: "Quality Assured",
    subtitle: "Hygienic and safe food",
    icon: <HygeneIcon />,
  },
  {
    title: "Best Prices",
    subtitle: "Affordable for all budgets",
    icon: <RupeeIcon />,
  },
  {
    title: "24/7 Support",
    subtitle: "We're here to help you",
    icon: <SupportIcon />,
  },
];

const FeatureAbout = () => {
  return (
    <section className="grid gap-5 rounded-2xl bg-orange-50/80 px-6 py-6 shadow-sm ring-1 ring-orange-100 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => (
        <div key={feature.title} className="flex items-center gap-4">
          <span className="grid h-11 w-11 place-items-center rounded-full text-3xl text-brand-orange">
            {feature.icon}
          </span>
          <div>
            <h3 className="font-extrabold text-brand-dark">{feature.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{feature.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FeatureAbout;