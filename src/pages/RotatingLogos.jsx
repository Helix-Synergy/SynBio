import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.avif";
import img2 from "../assets/tracks/img2.avif"
import img3  from "../assets/tracks/img3.webp";
import img4 from "../assets/tracks/img4.jpg";
import img5 from "../assets/tracks/img5.jpg";
import img6 from "../assets/tracks/img6.jpg"
import img7 from "../assets/tracks/img7.webp";
import img8 from "../assets/tracks/img8.jpg"
import img9 from "../assets/tracks/img9.jpg";
import img10 from "../assets/tracks/img10.jpg"
import img11 from "../assets/tracks/img11.jpeg";
import img12 from "../assets/tracks/img12.jpg"
import img13 from "../assets/tracks/img13.webp";
import img14 from "../assets/tracks/img14.jpg"
import img15 from "../assets/tracks/img15.jpg";
import img16 from "../assets/tracks/img16.jpg"
import img17 from "../assets/tracks/img17.jpg"
import img18 from "../assets/tracks/img18.jpg";
import img19 from "../assets/tracks/img19.webp"
import img20 from "../assets/tracks/img20.png"

export const tracks = [
  {
    image: img1,
    title: "AI in SynBio",
    description: (
      <>
Explore how artificial intelligence is revolutionizing {" "}
        <Link
          to="/synbio-orators"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       synthetic biology
        </Link> through predictive modeling, automated design of genetic circuits, protein structure prediction, and bioinformatics-driven decision-making. AI accelerates research, optimizes experiments, and enables high-throughput analyses, empowering synthetic biologists to develop innovative biotechnological solutions in medicine, agriculture, industrial bioprocesses, and environmental sustainability.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Tissue Engineering",
    description: (
      <>
{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      Tissue engineering
        </Link>{" "} combines cells, scaffolds, and bioactive molecules to create functional tissues and organs for regenerative medicine. This track covers stem cell applications, organoids, 3D bioprinting, biomaterials, and clinical translation strategies. Participants will explore innovations in wound healing, organ replacement, disease modeling, and therapeutic interventions through engineered tissues and regenerative approaches.
       
      </>
    ),
  },

  {
    image: img3,
    title: "Biotechnology",
    description: (
      <>
This track focuses on modern{" "}
        <Link
          to="/about-synbio"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     biotechnology
        </Link>  applications spanning healthcare, agriculture, and industry. It addresses recombinant protein production, gene editing, bio-based manufacturing, bioprocess optimization, and industrial fermentation. Participants will gain insights into technological breakthroughs, regulatory frameworks, sustainability strategies, and the integration of biotech innovations to solve global challenges in food, health, and energy.
      </>
    ),
  },

  {
    image: img4,
    title: "Material Science & Engineering",
    description: (
      <>
       {" "}
        <Link
          to="/synbio-event-schedule" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Material science and engineering
        </Link>{" "} explores the design, synthesis, and application of advanced biomaterials for synthetic biology, tissue scaffolds, and biomanufacturing. Topics include nanomaterials, polymers, biomimetics, and smart materials. Participants will learn how material innovations enhance cellular growth, drug delivery systems, environmental sustainability, and biotechnological solutions for medical, industrial, and research applications.

      </>
    ),
  },

  {
    image: img5 ,
    title: "RNA Engineering",
    description: (
      <>
RNA engineering focuses on designing and manipulating RNA molecules to control gene expression, develop therapeutics, and build synthetic circuits. The track covers RNA-based vaccines, ribozymes, RNA interference, CRISPR-associated RNA tools, and synthetic regulatory networks. Attendees explore RNA’s potential in disease treatment, synthetic networks, and{" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     precision gene regulation technologies.
        </Link>{" "}
   
      </>
    ),
  },

  {
    image: img6,
    title: "Genome Engineering",
    description: (
      <>

        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      Genome engineering 
        </Link>{" "} explores advanced techniques to modify genomes for therapeutic, agricultural, and industrial purposes. This track includes CRISPR-Cas systems, base editing, prime editing, synthetic chromosomes, and genome-scale rewiring. Discussions focus on precision, efficiency, ethical considerations, and real-world applications in medicine, bioeconomy, synthetic organisms, and sustainable biotechnology.
     
      </>
    ),
  },

  {
    image: img7,
    title: "Artificial Cells",
    description: (
      <>
{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Artificial cells
        </Link>{" "} are engineered systems mimicking cellular functions to study biology, produce biomolecules, or serve as therapeutic platforms. This track covers protocells, minimal cells, encapsulation systems, synthetic organelles, and programmable cell-like structures. Participants will explore how artificial cells advance bioengineering research, drug delivery, biosensing, and synthetic biology applications in medicine and industry.
      </>
    ),
  },

  {
    image:  img8,
    title: "Food Biotechnology",
    description: (
      <>
       {" "}
        <Link
          to="/synbio-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Food biotechnology 
        </Link>{" "} applies synthetic biology and molecular tools to improve food quality, safety, and sustainability. Topics include engineered microbes for fermentation, plant-based alternatives, nutrient enrichment, food safety, and bioprocess optimization. Attendees explore innovations in functional foods, sustainable protein production, microbial food production, and technology-driven solutions addressing global nutrition and food security challenges.
      
      </>
    ),
  },

  {
    image: img9,
    title: "DNA Synthesis",
    description: (
      <>
DNA synthesis enables the design and assembly of custom genetic sequences for research and biotechnology applications. This track covers synthetic gene construction, oligonucleotide synthesis, gene circuits, DNA assembly platforms, and genome writing technologies. Participants will explore how DNA synthesis drives{" "}
        <Link
          to="/synbio-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   synthetic biology, 
        </Link>{" "} therapeutic development, bioengineering innovations, and scalable manufacturing of genetically designed organisms.

      </>
    ),
  },

  {
    image: img10,
    title: "Green Chemistry",
    description: (
      <>
 {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 Green chemistry
        </Link>{" "} integrates sustainable principles in chemical and biotechnological processes to minimize environmental impact. This track focuses on bio-based materials, renewable feedstocks, waste reduction, enzyme catalysis, and sustainable industrial practices. Attendees explore the intersection of chemistry, synthetic biology, and engineering to create eco-friendly solutions, low-carbon processes, and circular bioeconomy innovations.

      </>
    ),
  },

  {
    image: img11,
    title: "Metabolic engineering",
    description: (
      <>
     {" "}
        <Link
          to="/about-synbio"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 Metabolic engineering
        </Link>  optimizes cellular pathways to produce high-value chemicals, biofuels, pharmaceuticals, and industrial biomolecules. This track includes pathway design, flux analysis, genome-scale modeling, synthetic regulatory networks, and microbial chassis development. Participants learn strategies for enhancing productivity, sustainability, and scalability in industrial biotechnology and synthetic biology applications.
      </>

    ),
  },

  {
    image: img12,
    title: "Environmental Technologies",
    description: (
      <>
 {" "}
        <Link
          to="/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Environmental technologies
        </Link>{" "}    leverage bioengineering and synthetic biology for ecosystem restoration, pollution mitigation, and sustainable resource management. Topics include bioremediation, engineered microbes for waste treatment, carbon capture, and environmental monitoring. Participants explore innovative solutions to combat climate change, preserve biodiversity, and develop scalable technologies for a sustainable and resilient planet.
      
      </>
    ),
  },

  {
    image: img13,
    title: "Epigenome Engineering",
    description: (
      <>
  Epigenome engineering studies and manipulates epigenetic marks to control gene expression, cell fate, and disease phenotypes. This track covers CRISPR-based epigenetic editing, histone modification, DNA methylation, and chromatin remodeling. Attendees will explore applications in regenerative medicine, synthetic biology, crop improvement, and therapeutic interventions targeting{" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       epigenetic mechanisms
        </Link> 

        
      </>
    ),
  },

  {
    image:img14,
    title: " Molecular Biology",
    description: (
      <>
 {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        Molecular biology
        </Link>  investigates the structure, function, and interactions of biomolecules in living systems. This track includes gene expression, protein function, nucleic acid biology, and regulatory networks. Participants explore cutting-edge molecular techniques and tools to advance synthetic biology, bioengineering research, diagnostics, therapeutics, and fundamental understanding of biological systems.
        
      </>
    ),
  },

  {
    image: img15,
    title: "Biomedical sciences",
    description: (
      <>
      {" "}
        <Link
          to="/about-synbio"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Bio Medical Sciences 
        </Link> combine biology, engineering, and medicine to develop innovative diagnostics, therapies, and biomedical technologies. This track covers translational research, regenerative medicine, biomarker discovery, medical devices, and therapeutic innovations. Attendees will explore the integration of bioengineering and synthetic biology to address global health challenges and advance personalized medicine.
     
      </>
    ),
  },

  {
    image: img16,
    title: "Drug Discovery & Development",
    description: (
      <>
This track explores synthetic production systems. {" "}
        <Link
          to= "/synbio-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
         biology and bioengineering
        </Link> approaches in discovering and developing new therapeutics. Topics include target identification, high-throughput screening, synthetic pathways, biomanufacturing, and precision medicine. Participants gain insights into accelerating drug pipelines, optimizing bioactive compounds, and integrating engineering solutions for safer, more effective therapies.
</>
    ),
  },

  {
    image:img17,
    title: "Cancer Bioengineering",
    description: (
      <>
  {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        Cancer bioengineering
        </Link>  applies synthetic biology and bioengineering tools to study tumor biology, develop therapeutics, and design diagnostics. Topics include engineered cell therapies, cancer-on-chip models, synthetic circuits, and immunotherapy platforms. Participants will explore translational approaches to improve cancer detection, personalized treatments, and innovative therapeutic strategies.
  
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Epitranscriptomics",
    description: (
      <>
   {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
           Epitranscriptomics
        </Link>  studies chemical modifications on RNA that regulate gene expression and cellular function. This track explores RNA modifications, regulatory networks, detection technologies, and therapeutic implications. Attendees will learn how epitranscriptomic insights inform synthetic biology, disease modeling, drug development, and precision interventions in genetic and cellular engineering applications.

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: "Protein Engineering",
    description: (
      <>
  {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 Protein engineering
        </Link>  designs and optimizes proteins for therapeutic, industrial, and research applications. This track covers rational design, directed evolution, enzyme engineering, synthetic scaffolds, and biomolecular modeling. Participants explore strategies to enhance protein function, stability, and specificity, enabling innovative solutions in medicine, industry, and synthetic biology applications.
      </>
    ),
  },
  {
    image:img20,
    title: "Robotics in Bioengineering",
    description: (
      <>
      {" "}
        <Link
          to= "/about-synbio"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      Robotics in bioengineering 
        </Link>{" "}  integrates automation, lab robotics, and AI-driven systems for precision experiments, high-throughput screening, and synthetic biology workflows. This track explores biofabrication, robotic-assisted biomanufacturing, and automated diagnostics. Attendees learn how robotics accelerates research, increases reproducibility, and enables scalable bioengineering solutions.
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
