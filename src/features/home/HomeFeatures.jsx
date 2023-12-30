import FeaturesItem from "../../ui/FeaturesItem";

const items = [
  {
    img: "./features/desktop/responsive.svg",
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    img: "./features/desktop/no-limit.svg",
    title: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    img: "./features/desktop/embed.svg",
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
  },
];

function HomeFeatures() {
  return (
    <section className="desktop:grid-cols-1 desktop:px-36 mobile:px-8 grid grid-cols-3 gap-12 px-[16.5rem] py-48">
      {items.map((item) => (
        <FeaturesItem key={item.title} {...item} />
      ))}
    </section>
  );
}

export default HomeFeatures;
