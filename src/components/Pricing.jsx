import React from 'react';

const Pricing = () => {
  const tiers = [
    { name: "Starter", price: "$0", desc: "For hobbyists and curious learners.", features: ["Free Trial Access", "Basic Support", "3 Tools Allowed"] },
    { name: "Pro", price: "$29", desc: "For professionals and small teams.", features: ["Full Catalog Access", "Priority Support", "Unlimited Tools", "Custom Domain"], highlighted: true },
    { name: "Enterprise", price: "$99", desc: "For large organizations scaling up.", features: ["Dedicated Account Manager", "Custom Integrations", "Security Audits"] }
  ];

  return (
    <div className="py-24 px-4 md:px-12 bg-gray-50">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold mb-4">Flexible <span className="text-primary italic">Pricing</span></h2>
        <p className="text-gray-500 text-lg">Select a plan that scales with your growth.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tiers.map((tier, i) => (
          <div key={i} className={`p-10 rounded-3xl border flex flex-col items-center text-center transition-all ${tier.highlighted ? 'border-primary bg-white shadow-2xl scale-105' : 'border-gray-200 bg-white shadow-lg'}`}>
            <h3 className="text-2xl font-bold mb-2 text-secondary">{tier.name}</h3>
            <p className="text-gray-400 text-sm mb-6">{tier.desc}</p>
            <div className="text-5xl font-black text-primary mb-8">{tier.price}<span className="text-xl text-gray-300 font-medium">/mo</span></div>
            <div className="space-y-4 mb-10 text-left w-full">
              {tier.features.map((feature, j) => (
                <div key={j} className="flex items-center gap-3 text-gray-600">
                  <i className="fa-solid fa-circle-check text-primary"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className={`btn w-full btn-lg rounded-2xl ${tier.highlighted ? 'btn-primary text-white' : 'btn-outline border-gray-300'}`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
