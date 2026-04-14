import React from "react";
import { VscAdd } from "react-icons/vsc";

const Banner = () => {
  return (
    <section className="bg-base-200/50 py-16 md:py-24 px-6 rounded-3xl mt-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-base-content tracking-tight mb-6">
          Friends to keep close <br className="hidden md:block" />
          <span className="text-primary">in your life</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1">
            <VscAdd className="text-2xl" />
            Add a Friend
          </button>
        </div>

        {/* 4 Summary Cards (Requirement 2.2) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300">
            <p className="text-xs font-bold uppercase tracking-wider text-base-content/50">
              Total Friends
            </p>
            <h3 className="text-3xl font-black mt-1">10</h3>
          </div>
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300 text-error">
            <p className="text-xs font-bold uppercase tracking-wider opacity-70">
              On Track
            </p>
            <h3 className="text-3xl font-black mt-1">3</h3>
          </div>
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300 text-warning">
            <p className="text-xs font-bold uppercase tracking-wider opacity-70">
             Need Attention
            </p>
            <h3 className="text-3xl font-black mt-1">6</h3>
          </div>
          <div className="bg-base-100 ms:p-6 pt-6 rounded-2xl shadow-sm border border-base-300 text-success">
            <p className="text-xs font-bold uppercase tracking-wider opacity-70">
              Interactions This Month
            </p>
            <h3 className="text-3xl font-black mt-1">12</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
