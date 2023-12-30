import Cta from "../../ui/Cta";

function DesignedSection() {
  return (
    <section className="flex items-center mobile:flex-col">
      <div className=" basis-[61rem] px-44 tablet:px-20 mobile:basis-0 mobile:px-8 mobile:py-[7.2rem]">
        <h1 className="text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem] mobile:text-[3.2rem] mobile:leading-[4rem] mobile:tracking-[0.3333rem] ">
          Designed for <br /> everyone
        </h1>
        <p className="max-w-[39rem] pb-20 pt-8 text-[1.5rem] leading-[2.5rem]">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </p>

        <Cta color="black" text="View The stories" />
      </div>
      <div className="w-[61.5%] mobile:-order-1 mobile:w-full">
        <picture>
          <source
            media="(max-width: 43.75em)"
            srcSet="./home/mobile/designed-for-everyone.jpg"
          />
          <source
            media="(max-width: 64em)"
            srcSet="./home/tablet/designed-for-everyone.jpg"
          />
          <img
            src="./home/desktop/designed-for-everyone.jpg"
            alt="beautiful stories image"
            className="w-full"
          />
        </picture>
      </div>
    </section>
  );
}

export default DesignedSection;
