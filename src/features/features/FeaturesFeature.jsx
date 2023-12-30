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
  {
    img: "./features/desktop/custom-domain.svg",
    title: "Custom Domain",
    text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    img: "./features/desktop/boost-exposure.svg",
    title: "Boost Your Exposure",
    text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    img: "./features/desktop/drag-drop.svg",
    title: "Drag & Drop Image",
    text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];

function FeaturesFeature() {
  return (
    <section className="grid grid-cols-3 gap-x-12 gap-y-52 px-[16.5rem] py-48 desktop:px-36 tablet:grid-cols-2 mobile:grid-cols-1 mobile:gap-y-24 mobile:px-8">
      {items.map((item) => (
        <FeaturesItem key={item.title} {...item} />
      ))}
    </section>
  );
}

export default FeaturesFeature;
