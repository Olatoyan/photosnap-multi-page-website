import Cta from "../../ui/Cta";

function BeautifulStories() {
  return (
    <section className="flex items-center mobile:flex-col">
      <div className="w-[61.5%] mobile:-order-1 mobile:w-full">
        <picture>
          <source
            media="(max-width: 43.75em)"
            srcSet="./home/mobile/beautiful-stories.jpg"
          />
          <source
            media="(max-width: 64em)"
            srcSet="./home/tablet/beautiful-stories.jpg"
          />
          <img
            src="./home/desktop/beautiful-stories.jpg"
            alt="beautiful stories image"
            className="w-full"
          />
        </picture>
      </div>
      <div className="basis-[61rem] px-44 tablet:px-20 mobile:basis-0 mobile:px-8 mobile:py-[7.2rem]">
        <h1 className="text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem] mobile:text-[3.2rem] mobile:leading-[4rem] mobile:tracking-[0.3333rem] ">
          Beautiful <br /> stories <br /> every time
        </h1>
        <p className="max-w-[39rem] pb-20 pt-8 text-[1.5rem] leading-[2.5rem]">
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </p>

        <Cta color="black" text="View The stories" />
      </div>
    </section>
  );
}

export default BeautifulStories;
