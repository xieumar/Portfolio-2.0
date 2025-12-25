import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Me</h2>
        <div className="prose prose-lg text-slate-600 leading-relaxed space-y-4">
          <p>
            I'm a computer engineering student and frontend developer with a passion for building 
            practical, efficient solutions. Whether it's for tech, engineering, or any domain that 
            benefits from hands-on problem-solving, I thrive on diving deep into projects that 
            challenge me to think critically and create meaningful impact.
          </p>
          <p>
            My approach to development centers on writing clean, maintainable code and creating 
            interfaces that feel intuitive. I believe great software is invisible—it works so well 
            that users never have to think about it.
          </p>
          <p>
            When I'm not coding, you'll find me baking, sewing my own clothes, or lost in a good book. 
            These hobbies keep me creative and remind me that the best solutions often come from 
            continuous learning and experimentation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;