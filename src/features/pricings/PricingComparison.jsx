import PricingComparisonItem from "./PricingComparisonItem";

function PricingComparison() {
  return (
    <section className="px-[16.5rem] pb-64 desktop:px-20 mobile:px-8 mobile:pb-28">
      <h2 className="pb-24 text-center text-[4rem] font-bold uppercase leading-[4.8rem] tracking-[0.4167rem]">
        Compare
      </h2>

      <section className="mx-auto flex max-w-[73.1rem] flex-col justify-center gap-9">
        <div className="grid grid-cols-[30rem_1fr_1fr_1fr] justify-items-center border-b border-solid border-black pb-9 text-[1.2rem] font-bold uppercase tracking-[0.2rem]">
          <h3 className="justify-self-start">The features</h3>
          <h3 className="mobile:hidden">basic</h3>
          <h3 className="mobile:hidden">pro</h3>
          <h3 className="mobile:hidden">business</h3>
        </div>
        <PricingComparisonItem
          feature={"Unlimited story posting"}
          basic={true}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"unlimited photo upload"}
          basic={true}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"embedding custom content"}
          basic={false}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"customize metadata"}
          basic={false}
          pro={true}
          business={true}
        />
        <PricingComparisonItem
          feature={"advanced metrics"}
          basic={false}
          pro={false}
          business={true}
        />
        <PricingComparisonItem
          feature={"photo downloads"}
          basic={false}
          pro={false}
          business={true}
        />
        <PricingComparisonItem
          feature={"search engine indexing"}
          basic={false}
          pro={false}
          business={true}
        />
        <PricingComparisonItem
          feature={"custom analytics"}
          basic={false}
          pro={false}
          business={true}
        />
      </section>
    </section>
  );
}

export default PricingComparison;
