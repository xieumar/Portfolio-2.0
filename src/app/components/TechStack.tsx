import React from 'react';
import { skills, Skill } from '@/app/lib/data';

const TechStack = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill: Skill) => (
            <div key={skill.category} className="space-y-4">
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-slate-600 flex items-start gap-2">
                    <span className="text-slate-400 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;