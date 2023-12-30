function StoriesItems({ imageDesktop, imageMobile, title, author, date }) {
  const bgImage = window.innerWidth >= 500 ? imageDesktop : imageMobile;

  return (
    <div
      className="relative flex h-[50rem] cursor-pointer flex-col justify-end bg-repeat-round p-16 text-white transition-all duration-300 hover:-translate-y-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="z-10 border-b border-solid border-white border-opacity-25 pb-7">
        <p className="text-[1.3rem] opacity-60">{date}</p>
        <h3 className="text-[1.8rem] font-bold leading-[2.5rem]">{title}</h3>
        <h4 className="text-[1.3rem] leading-[normal] opacity-60">
          by {author}
        </h4>
      </div>

      <div className="z-10 flex items-center justify-between pt-8">
        <p className="text-[1.2rem] font-bold uppercase tracking-[0.2rem]">
          Read Story
        </p>
        <svg className="h-[1.4rem] w-[4.5rem] stroke-white">
          <use xlinkHref="./shared/desktop/arrow.svg#arrow"></use>
        </svg>
      </div>

      <div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-30"></div>
    </div>
  );
}

export default StoriesItems;
