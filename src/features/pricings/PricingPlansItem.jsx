function PricingPlansItem({ plan, text, price, type, color }) {
  return (
    <div
      className={`${
        color === "black"
          ? `before:bg-lin-grad relative bg-[#000] pb-[7.1rem] pt-[8.2rem] text-white before:absolute before:top-0 before:h-[0.6rem] before:w-full tablet:before:h-full tablet:before:w-[0.6rem] mobile:before:h-[0.6rem] mobile:before:w-full`
          : "bg-[#f5f5f5] pb-16 pt-[5.6rem] text-black"
      } grid px-16 text-center tablet:grid-cols-2 tablet:text-start mobile:grid-cols-1 mobile:text-center`}
    >
      <div>
        <h3 className="text-[2.4rem] font-bold leading-[2.5rem]">{plan}</h3>
        <p className="pb-16 pt-8 text-[1.5rem] leading-[2.5rem] opacity-60">
          {text}
        </p>
      </div>
      <div className="tablet:justify-self-end mobile:justify-self-center">
        <p className="text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem]">
          ${price}
        </p>
        <p className="pb-16 text-[1.5rem] leading-[2.5rem]">per {type}</p>
      </div>
      <button
        className={`${
          color === "black" ? "bg-white text-black" : "bg-black text-white"
        } w-full py-[1.2rem] text-[1.2rem] font-bold uppercase tracking-[0.2rem] transition-all duration-300 hover:bg-[#dfdfdf] hover:text-black `}
      >
        Pick plan
      </button>
    </div>
  );
}

export default PricingPlansItem;
