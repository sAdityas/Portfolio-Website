import React from "react";
import { Sparkles } from "lucide-react";

const Section = ({ id, title, icon: Icon, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="flex items-center gap-3 mb-8">
      {Icon ? <Icon className="w-6 h-6" /> : null}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      <Sparkles className="w-4 h-4 opacity-70" />
    </div>
    {children}
  </section>
);

export default Section;
