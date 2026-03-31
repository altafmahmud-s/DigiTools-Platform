import React from 'react';

const Steps = () => {
  const steps = [
    { title: "Browse Tools", desc: "Find the tools you need from our extensive catalog.", number: "01" },
    { title: "Review & Choose", desc: "Check features and pricing to select the best fit.", number: "02" },
    { title: "Digital Delivery", desc: "Get instant access to your tools after checkout.", number: "03" }
  ];

  return (
    <div className="py-20 px-4 md:px-12 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">How it <span className="text-primaryitalic italic">Works</span></h2>
        <p className="text-gray-500 text-lg">Fast and simple steps to elevate your workflow.</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="flex-1 relative p-12 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow bg-white text-center">
            <div className="absolute top-4 right-8 text-5xl font-black text-primary/10">{step.number}</div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">{step.title}</h3>
            <p className="text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
