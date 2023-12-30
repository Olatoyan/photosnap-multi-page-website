import Cta from "./Cta";

function Beta() {
  const bgImage =
    window.innerWidth >= 900
      ? "./shared/desktop/bg-beta.jpg"
      : window.innerWidth >= 500
        ? "./shared/tablet/bg-beta.jpg"
        : "./shared/mobile/bg-beta.jpg";

  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative flex items-center justify-between bg-repeat-round px-[16.5rem] py-[6.8rem] text-white desktop:px-36 tablet:px-20 mobile:flex-col mobile:items-start mobile:gap-10 mobile:px-8"
    >
      <h2 className="text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem] mobile:text-[3.2rem] mobile:leading-[4rem] mobile:tracking-[0.3333rem]">
        We’re in beta. <br />
        Get your invite <br /> today!
      </h2>

      <Cta color="white" text="Get an invite" />

      <div className="bg-lin-grad absolute left-0 h-[28rem] w-[0.6rem]"></div>
    </section>
  );
}

export default Beta;
