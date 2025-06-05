import { useEffect, useRef, useState } from 'react';

const Engagements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const engagementsList = [
    { title: 'Collaborative', description: "Travail en co-construction, transparence." },
    { title: 'Pragmatique', description: "Des solutions AI réalistes, exploitables." },
    { title: 'Orientée résultats', description: "ROI mesurable, performance continue." },
  ];

  return (
    <section className="section engagements" id="engagements" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Nos engagements</h2>
        <div className={`engagements-grid${isVisible ? ' visible' : ''}`}>
          {engagementsList.map((item, idx) => (
            <div key={idx} className="engagement-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;
