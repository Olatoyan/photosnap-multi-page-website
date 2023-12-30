import StoriesItems from "../../ui/StoriesItems";

const items = [
  {
    imageDesktop: "./stories/desktop/mountains.jpg",
    imageTablet: "./stories/tablet/mountains.jpg",
    imageMobile: "./stories/mobile/mountains.jpg",
    title: "The Mountains",
    author: "John Appleseed",
  },
  {
    imageDesktop: "./stories/desktop/cityscapes.jpg",
    imageTablet: "./stories/tablet/cityscapes.jpg",
    imageMobile: "./stories/mobile/cityscapes.jpg",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
  },
  {
    imageDesktop: "./stories/desktop/18-days-voyage.jpg",
    imageTablet: "./stories/tablet/18-days-voyage.jpg",
    imageMobile: "./stories/mobile/18-days-voyage.jpg",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
  },
  {
    imageDesktop: "./stories/desktop/architecturals.jpg",
    imageTablet: "./stories/tablet/architecturals.jpg",
    imageMobile: "./stories/mobile/architecturals.jpg",
    title: "Architecturals",
    author: "Samantha Brooke",
  },
];

function HomeStories() {
  return (
    <section className="desktop:grid-cols-2 mobileSmall:grid-cols-1 grid grid-cols-4">
      {items.map((item) => (
        <StoriesItems
          key={item.title}
          imageDesktop={item.imageDesktop}
          imageTablet={item.imageTablet}
          imageMobile={item.imageMobile}
          title={item.title}
          author={item.author}
        />
      ))}
    </section>
  );
}

export default HomeStories;
