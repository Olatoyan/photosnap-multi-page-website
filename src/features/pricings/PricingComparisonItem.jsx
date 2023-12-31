import Reveal from "../../ui/Reveal";

function PricingComparisonItem({ feature, basic, pro, business }) {
  return (
    <Reveal>
      <div className="grid grid-cols-[30rem_1fr_1fr_1fr] justify-items-center border-b border-solid border-[#dfdfdf] pb-9 text-[1.2rem] font-bold uppercase tracking-[0.2rem] mobile:grid-cols-3 mobile:justify-items-start mobile:gap-y-6">
        <h4 className="justify-self-start pl-4 mobile:col-span-full mobile:pl-0">
          {feature}
        </h4>
        <div>
          <h3 className="hidden pb-2 text-[1rem] font-bold uppercase tracking-[0.1667rem] opacity-50 mobile:block">
            Basic
          </h3>
          <img
            src="./pricing/desktop/check.svg"
            alt="check icon"
            className={`${basic === true ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        <div>
          <h3 className="hidden pb-2 text-[1rem] font-bold uppercase tracking-[0.1667rem] opacity-50 mobile:block">
            Pro
          </h3>
          <img
            src="./pricing/desktop/check.svg"
            alt="check icon"
            className={`${pro === true ? "opacity-100" : "opacity-0"}`}
          />
        </div>
        <div>
          <h3 className="hidden pb-2 text-[1rem] font-bold uppercase tracking-[0.1667rem] opacity-50 mobile:block">
            Business
          </h3>
          <img
            src="./pricing/desktop/check.svg"
            alt="check icon"
            className={`${business === true ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
    </Reveal>
  );
}

export default PricingComparisonItem;
