import React, { useState, useEffect, useRef } from 'react';
import { 
  Rocket, 
  Cpu, 
  Car, 
  Layers, 
  Award, 
  Terminal, 
  Wrench, 
  Shield, 
  Zap, 
  Mail, 
  Phone, 
  Menu, 
  X, 
  ArrowRight, 
  Download, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Eye,
  Maximize2, 
  Languages, 
  Clock, 
  MessageSquare, 
  Lightbulb, 
  Briefcase,
  GitBranch,
  Gauge,
  Activity,
  Sliders,
  Play,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function LinkedInIcon({ size = 16, className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [loadSlider, setLoadSlider] = useState(40);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [isMinorDropdownOpen, setIsMinorDropdownOpen] = useState(false);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('all');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // Navigation Links
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form submit simulator
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setContactSuccess(true);
      setTimeout(() => {
        setContactSuccess(false);
        setContactForm({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  const galleryItems = [
    {
      id: 1,
      title: "Crank Slider Paperweight",
      category: "prototypes",
      image: `${import.meta.env.BASE_URL}images/crank_slider_1.jpg`,
      description: "Assembled aluminum and 3D printed mechanical four-bar linkage mechanism.",
      tools: ["Manual Milling", "3D Printing"],
      details: "ME 470 Project. Constructed a physical paperweight verifying kinematic synthesis and mechanical tolerances, resolving joints binding using washers."
    },
    {
      id: 2,
      title: "4-Bar Slingshot Total Deformation",
      category: "simulations",
      image: `${import.meta.env.BASE_URL}images/slingshot_fea.jpg`,
      description: "ANSYS FEA simulation showing deformation profile under rotational torque.",
      tools: ["ANSYS FEA", "Structural Dynamics"],
      details: "Static structural FEA validating deflection scales under peak rotational kick force, verifying the rigid aluminum structure maintains joint safety margins."
    },
    {
      id: 3,
      title: "Formula SAE Garage & Track Prep",
      category: "testing",
      image: `${import.meta.env.BASE_URL}images/fsae_pit.jpg`,
      description: "Formula SAE vehicles prepared in the garage for track testing and dynamic runs.",
      tools: ["Track Prep", "Tech Inspection", "Vehicle Assembly"],
      details: "Hands-on technical inspection preparation and track tuning in the Formula SAE garage. Verified fuel system integrity, chassis packaging, and general assembly layout under racing regulations."
    },
    {
      id: 4,
      title: "Capstone Storage Cart Design & FEA",
      category: ["cad", "simulations"],
      image: `${import.meta.env.BASE_URL}images/capstone_cart_cad.jpg`,
      images: [
        `${import.meta.env.BASE_URL}images/capstone_cart_cad.jpg`,
        `${import.meta.env.BASE_URL}images/capstone_cart_fea.jpg`
      ],
      imageLabels: ["CAD Model", "FEA Analysis"],
      description: "CAD wireframe model and structural FEA deformation simulation of the storage cart structure.",
      tools: ["SolidWorks CAD", "ANSYS FEA", "Structural Analysis"],
      details: "Capstone project storage cart redesigned using T-slot 6063-T6 aluminum extrusions. Evaluated stress concentrations and dynamic load displacements under a simulated 150lb load, achieving a 25µm maximum deflection constraint and a 10% weight reduction."
    }
  ];

  const projectItems = [
    {
      id: "rocket",
      title: "Prototype Rocket Design",
      category: "Aerospace System",
      shortDescription: "Design, construction, and structural optimization of an experimental model rocket. Engineered to record flight dynamics metrics and validate simulations against actual test flights.",
      role: "Aerospace Design Lead",
      tools: ["Aerodynamics", "SolidWorks", "Composite Materials", "Data Logging"],
      result: "Stability: +25% Increase, 5+ Successful Launches",
      metricBadge: "Stability: +25%",
      featured: true,
      problem: "Experimental model rockets often suffer from flight instability due to manual alignment errors and aerodynamic lift variations under high thrust-to-weight ratios.",
      responsibilities: "Responsible for full aerodynamic design, structural stress checks, and mechanical telemetry logging integration.",
      methods: [
        "Synthesized nose cone and fin layout using OpenRocket and SolidWorks CAD flow analysis.",
        "Fabricated composite fiberglass body tube and lightened internal bulkheads.",
        "Conducted 5+ experimental launches, collecting real-time barometer and 3-axis accelerometer data via an onboard microcontroller.",
        "Compared telemetry logs to flight predictions to refine aerodynamic coefficients."
      ],
      learned: "Mastered practical data collection under high-G launch conditions, vibration mitigation techniques for electronics, and composite structural fabrications."
    },
    {
      id: "fsae",
      title: "Formula SAE Fuel System Integration",
      category: "Fluid Dynamics / Powertrain",
      shortDescription: "Designed and integrated a high-performance fuel system for the Formula SAE racing car. Configured system packaging and vibration insulation.",
      role: "Fuel System Lead",
      tools: ["Fluid Flow", "Chassis Packaging", "Vibration Mitigation", "Pressure Regulators"],
      result: "Leak Reductions: -20%, FSAE Rules Compliant",
      metricBadge: "Leak reduction: -20%",
      featured: true,
      problem: "High-G cornering and engine-vibration frequency caused mechanical fatigue and fluid delivery instability, violating strict FSAE safety rules.",
      responsibilities: "Led a 15-member subteam to design, package, and dynamically inspect the fuel system structure.",
      methods: [
        "Packaged custom aluminum fuel cell and lines inside steel spaceframe pick-ups using SolidWorks.",
        "Designed insulated routing lines and custom rubber-isolated brackets to reduce high-vibration stress fatigue.",
        "Maintained a continuous 3.0 bar fuel pressure rail delivery across extreme cornering states.",
        "Conducted static hydrostatic pressure tests confirming leak-free seals."
      ],
      learned: "Gained hands-on experience in packaging routing envelopes, leading multi-member cross-functional subteams, and strict regulatory compliance verification."
    },
    {
      id: "cooling",
      title: "Electronics Cooling System Optimization",
      category: "Thermal Systems / Capstone Design",
      shortDescription: "Tested and optimized multiple cooling configurations to reduce peak electronics temperatures using fins, elevation, airflow, and thermal paste.",
      role: "Thermal Analyst & Test Engineer",
      tools: ["Thermal Testing", "Data Analysis", "Heat Transfer", "Experimental Validation", "Design Recommendations"],
      result: "Peak Temperature Reduced by ~29°C (from 71.7°C control to 42.35°C best setup)",
      metricBadge: "Temp Reduction: -29°C",
      featured: true,
      problem: "High-performance enclosed electronic control assemblies experience thermal throttling due to insufficient heat dissipation and localized hot spots.",
      responsibilities: "Set up heat load tests, processed thermal resistance models, and analyzed heat sink configurations.",
      methods: [
        "Established a controlled heating test bench using power resistors simulating heat-dissipating chips.",
        "Compared control setup peak temperature (71.7°C) against optimized configurations.",
        "Evaluated thermal performance across multiple variables: heatsink fin spacing, thermal interface paste (TIM), base elevation, and cooling fan velocity.",
        "Validated thermal resistance circuits and achieved a 42.35°C state on the best setup."
      ],
      learned: "Developed a strong understanding of heat conduction limits, thermal interface matching, airflow boundary layers, and structured test design."
    },
    {
      id: "crank",
      title: "ME 470 Crank Slider Paperweight",
      category: "Kinematics & Synthesis",
      shortDescription: "Led design and manual machining of a Grashof-compliant crank-slider mechanism to resolve mechanical binding.",
      role: "Design & Machining Lead",
      tools: ["Kinematic Synthesis", "SolidWorks CAD", "Metal Machining", "3D Printing", "Tolerance Design"],
      result: "Motion: Grashof Compliant, Team of 4 Members",
      metricBadge: "Grashof Compliant",
      featured: false,
      problem: "Collegiate kinematics design team had to synthesize a linkages system avoiding dead-centers while maintaining strict geometric tolerances on manual mills.",
      responsibilities: "Responsible for link-synthesis, tolerances assembly, and manual milling of components.",
      methods: [
        "Synthesized link length bounds to verify Grashof compliance using mechanical synthesis equations.",
        "Milled aluminum slide rail and sliding blocks to within +/- 0.002 inch tolerances.",
        "Resolved mechanical binding by adding custom washers and enlarging clearances at joints."
      ],
      learned: "Learned manual machining techniques (lathe, mill, band saw), tapping, and how to design for manufacturability."
    },
    {
      id: "slingshot",
      title: "4-Bar Slingshot Kicking Mechanism",
      category: "Structural Dynamics",
      shortDescription: "Designed, modeled, and structural-stress optimized an aluminum (Al-6061) 4-bar kicking slingshot mechanism.",
      role: "FEA Simulation Engineer",
      tools: ["ANSYS FEA", "Aluminum Machining", "Stress Calculations", "Fatigue Life"],
      result: "Launch Distance: 432 ft, Rigid Aluminum Fabricated",
      metricBadge: "ANSYS FEA: 25µm Max Deflection",
      featured: false,
      problem: "A high-torque kicking slingshot mechanism required maximum force launch capability without yielding joint pivots.",
      responsibilities: "Conducted structural analysis, fatigue life estimation, and weight optimization.",
      methods: [
        "Constructed 3D model of the 4-bar kicking slingshot mechanism.",
        "Conducted static structural finite element analysis (FEA) under maximum rotational torque.",
        "Verified maximum shear loading at joints and fillet concentrations to prevent yield failure."
      ],
      learned: "Deepened expertise in finite element mesh convergence, joint contact constraints, and metal fatigue estimation."
    },
    {
      id: "robot",
      title: "Autonomous Robotic Car",
      category: "Robotics & Control",
      shortDescription: "Programmed an autonomous robotic car using LEGO building blocks, DC motors, bumpers, and photo-resistor sensors.",
      role: "Embedded Logic Programmer",
      tools: ["LEGO System", "Embedded C", "Actuators & Motors", "Group Collaboration"],
      result: "Successful Autonomous Navigation, Team of 4",
      metricBadge: "Team of 4 members",
      featured: false,
      problem: "Freshman robotics team tasked with developing an autonomous system capable of obstacle avoidance and maze traversal.",
      responsibilities: "Collaborated in programming logic in Embedded C, sensor feedback loop tuning, and mechanical chassis design.",
      methods: [
        "Programmed photo-resistor sensors and bumper switches to detect walls and light gradients.",
        "Wrote obstacle-avoidance logic managing differential speed steering of two geared DC motors.",
        "Assembled gear structures on a custom LEGO Technic frame."
      ],
      learned: "First exposure to feedback loop logic, motor control interfaces, and multidisciplinary group organization."
    },
    {
      id: "cart",
      title: "MSU IMPART Alliance Storage Cart Redesign",
      category: "Capstone System Design",
      shortDescription: "Reengineered a mobile equipment storage cart for a folding medical bed and 150lb training manikin.",
      role: "Structural Design Lead",
      tools: ["SolidWorks CAD", "ANSYS FEA", "80/20 Extrusions", "Material Testing"],
      result: "25µm Max Deflection, -10% Weight Reduction",
      metricBadge: "Deflection: 25µm",
      featured: false,
      problem: "IMPART Alliance mobile training cart was too heavy and had inadequate vehicle lift clearance for transit.",
      responsibilities: "Responsible for cart frame redesign, finite element verification, and material selection.",
      methods: [
        "Re-engineered frame using 1-inch T-slot 6063-T6 aluminum extrusions and 1/4-inch Sandeply paneling.",
        "Conducted ANSYS FEA verifying a maximum structural deflection of only 25 micrometers under a 150lb load.",
        "Configured 8-inch pneumatic swivel casters with integrated suspensions to optimize lift clearance."
      ],
      learned: "Learned assembly packaging constraints, weight reduction methods, and structural FEA mapping."
    }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden grid-bg grid-bg-fine">
      
      {/* Background Glowing Ambient Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse duration-[6000ms]"></div>
      <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-800/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-white font-mono font-bold text-sm tracking-wider shadow-md group-hover:scale-105 transition-transform">
              NN
            </div>
            <span className="text-lg font-mono font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 group-hover:text-blue-400 transition-colors">
              NIKHIL.NARAYANA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-2 rounded-md text-sm font-medium font-mono transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 border border-transparent'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 text-xs font-mono font-bold tracking-wider rounded border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 transition-all flex items-center space-x-1.5 glow-orange"
            >
              <Download size={14} />
              <span>RESUME.PDF</span>
            </a>
          </nav>

          {/* Mobile hamburger menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-slate-200 p-2 rounded-md hover:bg-slate-800/50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-md text-base font-medium font-mono ${
                      activeSection === link.id
                        ? 'text-blue-400 bg-blue-500/10 border-l-2 border-blue-500'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 w-full flex items-center justify-center space-x-2 py-3 rounded border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 font-mono font-bold text-sm tracking-wider"
                >
                  <Download size={16} />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-64px)] flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Futuristic CAD Animated Interactive Background */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <CanvasMeshBackground />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 font-mono text-xs font-semibold text-blue-400 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              <span>Available for Mechanical Design, Product Development, Test, Aerospace, and Automotive Engineering roles</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans">
              <span className="block text-slate-100">Nikhil Narayana</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-orange-400">
                Mechanical Engineer
              </span>
            </h1>

            <h2 className="text-lg sm:text-xl font-mono text-slate-200 border-l-2 border-orange-500 pl-4 py-1">
              CAD | FEA | Mechanical Design | Testing | Aerospace &amp; Automotive Systems
            </h2>

            <p className="max-w-2xl text-slate-200 text-base sm:text-lg leading-relaxed font-sans">
              Mechanical Engineering graduate focused on mechanical design, CAD, FEA, testing, and aerospace/automotive systems. I enjoy turning concepts into functional hardware through modeling, analysis, prototyping, and hands-on validation.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-4 max-w-lg border-y border-slate-800/60 font-mono">
              <div>
                <p className="text-xs text-slate-500">UNIVERSITY</p>
                <p className="text-sm font-semibold text-slate-200 mt-1">Michigan State University</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">MAJOR</p>
                <p className="text-sm font-semibold text-orange-400 mt-1">Mechanical Engineering</p>
              </div>
              <div>
                <p className="text-xs text-slate-500">MINOR</p>
                <p className="text-sm font-semibold text-blue-400 mt-1">Aerospace</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold tracking-wider text-sm text-center transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-500/20 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-mono font-bold tracking-wider text-sm text-center transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded border border-orange-500/50 hover:bg-orange-500/10 text-orange-400 font-mono font-bold tracking-wider text-sm text-center transition-all cursor-pointer"
              >
                Contact Me
              </a>
            </div>

            {/* Social Badges */}
            <div className="flex items-center space-x-4 pt-4 text-slate-400 font-mono text-xs">
              <a 
                href="mailto:nikhilnaray04@gmail.com" 
                className="hover:text-blue-400 transition-colors flex items-center space-x-2"
              >
                <Mail size={16} />
                <span>nikhilnaray04@gmail.com</span>
              </a>
              <span className="text-slate-800">|</span>
              <a 
                href="https://www.linkedin.com/in/nikhil-narayana/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors flex items-center space-x-2"
              >
                <LinkedInIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Interactive Engineering Cad / FEA Bracket Render Widget */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-sm glass-panel rounded-xl overflow-hidden shadow-2xl relative border border-slate-800/80 glow-blue">
              <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-blue-400 tracking-wider flex items-center gap-1.5">
                  <Activity size={12} className="animate-pulse" />
                  ANSYS STRESS RE-SIMULATION
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
              </div>
              <div className="p-6 space-y-6">
                <div className="text-left">
                  <h3 className="text-sm font-mono text-slate-300">FEA Model: 4-Bar Linkage Bracket</h3>
                  <p className="text-xs text-slate-500 mt-1 font-mono">Structural load stress assessment</p>
                </div>
                
                {/* Visual Stress Color Scale Mock */}
                <div className="relative h-40 bg-slate-950 rounded flex items-center justify-center overflow-hidden border border-slate-900 crosshair-container">
                  <FEABracketGraphic load={loadSlider} />
                  
                  {/* Strain scale indicators */}
                  <div className="absolute top-2 right-2 bg-slate-900/90 border border-slate-800 rounded px-1.5 py-1 text-[10px] font-mono text-slate-300 space-y-0.5">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      <span>Max: {(loadSlider * 3.6).toFixed(1)} MPa</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span>Min: 0.1 MPa</span>
                    </div>
                  </div>
                </div>

                {/* Slider control */}
                <div className="space-y-2 text-left">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Sliders size={12} />
                      APPLIED FORCE LOAD:
                    </span>
                    <span className={`font-bold ${loadSlider > 80 ? 'text-red-400 font-extrabold animate-pulse' : 'text-orange-400'}`}>
                      {loadSlider * 10} N
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={loadSlider}
                    onChange={(e) => setLoadSlider(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>100 N</span>
                    <span>550 N (Nominal)</span>
                    <span>1000 N (Yield Peak)</span>
                  </div>
                </div>

                {/* Simulated Warning Info */}
                <div className={`p-3 rounded border text-xs font-mono text-left transition-all ${
                  loadSlider > 80 
                    ? 'bg-red-500/10 border-red-500/30 text-red-300' 
                    : 'bg-blue-500/5 border-blue-500/10 text-slate-400'
                }`}>
                  {loadSlider > 80 ? (
                    <span className="flex items-start gap-2">
                      <Shield size={14} className="text-red-400 shrink-0 mt-0.5" />
                      <span><strong>CRITICAL FAILURE PREDICTED:</strong> Safety Factor drops below 1.25. High risk of plastic deformation. Fillet shear stress exceeds design criteria.</span>
                    </span>
                  ) : (
                    <span className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-green-400 shrink-0 mt-0.5" />
                      <span>Safety Factor: {((120 / loadSlider) * 1.5).toFixed(2)} (Safe limits). Displacement: {(loadSlider * 0.012).toFixed(3)} mm. Normal elastic state.</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currently Seeking Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-950/20 relative z-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-xl border border-blue-500/15 hover:border-blue-500/25 transition-all duration-300 shadow-lg relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-left">
            <div className="space-y-3 max-w-3xl">
              <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-1.5">
                <Briefcase size={14} />
                CURRENT STATUS
              </span>
              <h2 className="text-2xl font-bold font-sans tracking-tight text-slate-100">
                Currently Seeking
              </h2>
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base font-sans">
                Entry-level Mechanical Engineer, Mechanical Design Engineer, Test Engineer, Product Development Engineer, Aerospace Engineering, and Automotive Engineering opportunities.
              </p>
            </div>
            
            <div className="w-full lg:w-auto flex flex-col gap-2 shrink-0 font-mono text-xs">
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded bg-slate-900/80 border border-slate-800 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Open to relocation across the U.S.</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded bg-slate-900/80 border border-slate-800 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Interested in CAD, FEA, testing, &amp; prototyping</span>
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-2 rounded bg-slate-900/80 border border-slate-800 text-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Available for full-time entry-level engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest">01 / DISCIPLINE &amp; MISSION</span>
            <h2 className="text-3xl font-bold font-sans mt-2 tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-blue-500 mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Profile Info */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h3 className="text-xl font-mono text-slate-200">
                Bridging Theoretical Foundations with Practical Engineering
              </h3>
              
              <p className="text-slate-200 leading-relaxed text-base sm:text-lg font-sans">
                I’m a Mechanical Engineering graduate from Michigan State University with a minor in Aerospace Engineering. My background combines hands-on engineering experience, CAD design, FEA analysis, mechanical testing, and leadership in team-based technical projects.
              </p>

              <p className="text-slate-200 leading-relaxed font-sans">
                I’m especially interested in aerospace systems, automotive design, energy-efficient solutions, and experimental product development. I’m enthusiastic about learning new fields, expanding my horizons, and applying engineering fundamentals to solve real-world problems.
              </p>

              {/* Mini Timeline Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 font-mono text-sm">
                <div className="p-4 rounded bg-slate-900/60 border border-slate-800/40 hover:border-slate-800 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-blue-400 font-semibold">
                      <Award size={16} />
                      <span>Michigan State University</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">B.S. Mechanical Engineering</p>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Class of 2026</p>
                </div>
                
                <div className="p-4 rounded bg-slate-900/60 border border-slate-800/40 hover:border-slate-800 transition-all flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-orange-400 font-semibold">
                      <Rocket size={16} />
                      <span>Aerospace Minor</span>
                    </div>
                    <button
                      onClick={() => setIsMinorDropdownOpen(!isMinorDropdownOpen)}
                      className="px-2 py-1 rounded bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px] font-semibold font-mono border border-slate-700/50 cursor-pointer"
                    >
                      <span>Courses</span>
                      <ChevronDown size={12} className={`transform transition-transform duration-250 ${isMinorDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  
                  {isMinorDropdownOpen ? (
                    <div className="mt-3 bg-slate-950/90 border border-slate-800 rounded p-2.5 space-y-1.5 shadow-xl animate-fadeIn z-10">
                      {[
                        'Aerospace Propulsion',
                        'Aerodynamics and Aircraft Performance',
                        'Composite Materials',
                        'Turbomachinery'
                      ].map((course, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 mt-2">Click "Courses" to see core focus subjects.</p>
                  )}
                </div>
              </div>
            </div>

            {/* At a Glance Side Card */}
            <div className="lg:col-span-5 w-full">
              <div className="glass-panel p-6 sm:p-8 rounded-xl border border-orange-500/15 hover:border-orange-500/25 transition-all duration-300 shadow-xl text-left bg-slate-900/40 relative">
                <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest flex items-center gap-1.5 mb-4">
                  <Terminal size={14} />
                  AT A GLANCE
                </span>
                <h3 className="text-lg font-bold font-sans text-slate-100 mb-6 border-b border-slate-800 pb-2">
                  Quick Profile
                </h3>
                <ul className="space-y-4 font-sans text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>B.S. Mechanical Engineering</strong> — Michigan State University</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>Minor in Aerospace Engineering</strong></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>CAD / FEA / Testing</strong> focused</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>Formula SAE</strong> Fuel Systems Lead</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>Rocket prototype</strong> design/testing experience</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span><strong>Hands-on lab</strong> & mechanical troubleshooting experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest">02 / CAPABILITIES &amp; METHODS</span>
            <h2 className="text-3xl font-bold font-sans mt-2 tracking-tight">Engineering Toolset</h2>
            <div className="h-1 w-20 bg-blue-500 mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-sans">
            
            {/* Category 1: CAD & Mechanical Design */}
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-blue-500/5 group text-left">
              <div className="w-12 h-12 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-mono font-bold text-slate-100 mb-4 border-b border-slate-850 pb-2 flex items-center justify-between">
                <span>CAD &amp; MECHANICAL DESIGN</span>
              </h3>
              <ul className="space-y-3.5 text-slate-200 text-sm font-mono leading-relaxed">
                {['Siemens NX', 'SolidWorks', 'Autodesk Inventor', 'Creo', 'GD&T', 'Tolerance Analysis'].map((skill, index) => (
                  <li key={index} className="flex items-center space-x-2.5">
                    <ChevronRight size={14} className="text-blue-500 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 2: Simulation & Analysis */}
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-800 hover:border-orange-500/30 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-orange-500/5 group text-left">
              <div className="w-12 h-12 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
                <Activity size={24} />
              </div>
              <h3 className="text-lg font-mono font-bold text-slate-100 mb-4 border-b border-slate-850 pb-2 flex items-center justify-between">
                <span>SIMULATION &amp; ANALYSIS</span>
              </h3>
              <ul className="space-y-3.5 text-slate-200 text-sm font-mono leading-relaxed">
                {['ANSYS FEA', 'Abaqus', 'Stress Analysis', 'Thermal Analysis', 'Structural Analysis'].map((skill, index) => (
                  <li key={index} className="flex items-center space-x-2.5">
                    <ChevronRight size={14} className="text-orange-500 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 3: Testing & Prototyping */}
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-emerald-500/5 group text-left">
              <div className="w-12 h-12 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <Wrench size={24} />
              </div>
              <h3 className="text-lg font-mono font-bold text-slate-100 mb-4 border-b border-slate-850 pb-2 flex items-center justify-between">
                <span>TESTING &amp; PROTOTYPING</span>
              </h3>
              <ul className="space-y-3.5 text-slate-200 text-sm font-mono leading-relaxed">
                {['Mechanical Testing', 'Data Collection', 'Troubleshooting', 'Lab Equipment', 'Assembly &amp; Fixture Design'].map((skill, index) => (
                  <li key={index} className="flex items-center space-x-2.5">
                    <ChevronRight size={14} className="text-emerald-500 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 4: Programming & Tools */}
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-purple-500/5 group text-left">
              <div className="w-12 h-12 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <Terminal size={24} />
              </div>
              <h3 className="text-lg font-mono font-bold text-slate-100 mb-4 border-b border-slate-850 pb-2 flex items-center justify-between">
                <span>PROGRAMMING &amp; TOOLS</span>
              </h3>
              <ul className="space-y-3.5 text-slate-200 text-sm font-mono leading-relaxed">
                {['MATLAB', 'Python', 'JavaScript', 'Excel', 'Technical Documentation'].map((skill, index) => (
                  <li key={index} className="flex items-center space-x-2.5">
                    <ChevronRight size={14} className="text-purple-500 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 5: Professional Strengths */}
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-800 hover:border-pink-500/30 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-pink-500/5 group text-left">
              <div className="w-12 h-12 rounded bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-600 group-hover:text-white transition-all">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-mono font-bold text-slate-100 mb-4 border-b border-slate-850 pb-2 flex items-center justify-between">
                <span>PROFESSIONAL STRENGTHS</span>
              </h3>
              <ul className="space-y-3.5 text-slate-200 text-sm font-mono leading-relaxed">
                {['Problem Solving', 'Team Leadership', 'Communication', 'Time Management', 'Cross-functional Collaboration'].map((skill, index) => (
                  <li key={index} className="flex items-center space-x-2.5">
                    <ChevronRight size={14} className="text-pink-500 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest">03 / EXPERIENCE CHRONOLOGY</span>
            <h2 className="text-3xl font-bold font-sans mt-2 tracking-tight">Engineering Experience</h2>
            <div className="h-1 w-20 bg-blue-500 mt-4"></div>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l-2 border-slate-800 max-w-4xl mx-auto pl-6 sm:pl-8 space-y-12">
            
            {/* Exp Item 1 */}
            <div className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all shadow">
                <Rocket size={12} className="text-blue-400 group-hover:text-white" />
              </div>
              
              <div className="glass-panel p-6 rounded-xl border border-slate-800/85 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 text-left bg-slate-900/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold font-sans text-slate-100 flex items-center gap-2">
                      Engineering Intern 
                      <span className="text-xs font-mono font-medium text-slate-500">|</span> 
                      <span className="text-sm font-mono text-blue-400 font-semibold">Michigan State University</span>
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">Experimental Space Flight Systems Lab</p>
                  </div>
                  <span className="inline-block mt-2 sm:mt-0 px-3 py-1 text-xs font-mono font-bold tracking-wider rounded bg-slate-900 border border-slate-850 text-slate-300">
                    May 2024 – August 2024
                  </span>
                </div>
                
                <p className="text-xs font-mono text-slate-400 mb-4 italic">
                  Hands-on research internship focused on mechanical design, aerodynamic testing, and structure optimization for high-performance aerospace systems.
                </p>
                
                <ul className="space-y-2.5 text-sm text-slate-200 list-disc list-outside pl-4 leading-relaxed font-sans mb-6">
                  <li>Designed and constructed a high-efficiency prototype rocket using advanced materials and lightweight structures.</li>
                  <li>Conducted <strong className="text-orange-400 font-extrabold">5+ experimental launches</strong> and collected real aerodynamic and mechanical diagnostic data.</li>
                  <li>Optimized nose cone geometry and fin alignment.</li>
                  <li>Improved flight stability by <strong className="text-orange-400 font-extrabold">25%</strong>.</li>
                  <li>Researched aerodynamics, thrust calculations, and strictly adhered to safety and launch readiness procedures.</li>
                </ul>

                <div className="border-t border-slate-850 pt-4 flex flex-wrap gap-2">
                  {['Aerospace Propulsion', 'SolidWorks CAD', 'Aerodynamics', 'Experimental Testing', 'Composite Materials'].map((tag, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-850 text-[10px] font-mono text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Exp Item 2 */}
            <div className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-orange-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-600 transition-all shadow">
                <Car size={12} className="text-orange-400 group-hover:text-white" />
              </div>
              
              <div className="glass-panel p-6 rounded-xl border border-slate-800/85 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1 text-left bg-slate-900/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold font-sans text-slate-100 flex items-center gap-2">
                      Fuel System Lead
                      <span className="text-xs font-mono font-medium text-slate-500">|</span>
                      <span className="text-sm font-mono text-orange-400 font-semibold">Formula SAE Racing Team</span>
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">High-Performance Powertrain Division</p>
                  </div>
                  <span className="inline-block mt-2 sm:mt-0 px-3 py-1 text-xs font-mono font-bold tracking-wider rounded bg-slate-900 border border-slate-850 text-slate-300">
                    May 2023 – December 2023
                  </span>
                </div>
                
                <p className="text-xs font-mono text-slate-400 mb-4 italic">
                  Led engineering subteam in CAD modeling and system packaging of a custom high-performance fuel delivery system for collegiate Formula SAE racing.
                </p>
                
                <ul className="space-y-2.5 text-sm text-slate-200 list-disc list-outside pl-4 leading-relaxed font-sans mb-6">
                  <li>Led a dedicated <strong className="text-orange-400 font-extrabold">15-member engineering subteam</strong>.</li>
                  <li>Modeled, optimized, and integrated the high-performance fuel system.</li>
                  <li>Reduced fuel leakage risk by <strong className="text-orange-400 font-extrabold">20%</strong>.</li>
                  <li>Designed insulated routing lines and mounting brackets.</li>
                  <li>Collaborated with chassis, engine, and electrical subteams.</li>
                </ul>

                <div className="border-t border-slate-850 pt-4 flex flex-wrap gap-2">
                  {['System Packaging', 'Vibration Insulation', 'SolidWorks CAD', 'Pressure Regulators', 'Formula SAE Compliance'].map((tag, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-850 text-[10px] font-mono text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Exp Item 3 */}
            <div className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-emerald-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 transition-all shadow">
                <Wrench size={12} className="text-emerald-400 group-hover:text-white" />
              </div>
              
              <div className="glass-panel p-6 rounded-xl border border-slate-800/85 hover:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1 text-left bg-slate-900/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold font-sans text-slate-100 flex items-center gap-2">
                      Teaching Assistant
                      <span className="text-xs font-mono font-medium text-slate-500">|</span>
                      <span className="text-sm font-mono text-emerald-400 font-semibold">Automotive Technology Dept.</span>
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">MSU Engineering Lab Assistant</p>
                  </div>
                  <span className="inline-block mt-2 sm:mt-0 px-3 py-1 text-xs font-mono font-bold tracking-wider rounded bg-slate-900 border border-slate-850 text-slate-300">
                    August 2021 – December 2023
                  </span>
                </div>
                
                <p className="text-xs font-mono text-slate-400 mb-4 italic">
                  Provided academic and practical lab instruction in mechanical systems diagnostic testing, engine performance cycles, and shop safety protocols.
                </p>
                
                <ul className="space-y-2.5 text-sm text-slate-200 list-disc list-outside pl-4 leading-relaxed font-sans mb-6">
                  <li>Mentored and instructed over <strong className="text-orange-400 font-extrabold">35+ engineering students</strong>.</li>
                  <li>Supported automotive labs covering engine cycles, drivetrains, and testing tools.</li>
                  <li>Diagnosed and resolved <strong className="text-orange-400 font-extrabold">50+ mechanical issues</strong>.</li>
                  <li>Maintained safety protocols and calibration readiness.</li>
                </ul>

                <div className="border-t border-slate-850 pt-4 flex flex-wrap gap-2">
                  {['Mechanical Systems', 'Experimental Testing', 'Lab Safety', 'Troubleshooting', 'Technical Mentorship'].map((tag, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-850 text-[10px] font-mono text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest">04 / APPLICATION &amp; PROTOTYPES</span>
            <h2 className="text-3xl font-bold font-sans mt-2 tracking-tight">Engineering Projects</h2>
            <div className="h-1 w-20 bg-blue-500 mt-4"></div>
          </div>

          {/* Featured Projects Area */}
          <div className="mb-16">
            <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest mb-6 text-left flex items-center gap-2">
              <Award size={14} className="text-orange-500" />
              FEATURED PROJECTS
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projectItems.filter(p => p.featured).map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="glass-panel rounded-xl overflow-hidden border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 group text-left flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {project.id === 'rocket' ? <Rocket size={20} /> : project.id === 'fsae' ? <Car size={20} /> : <Gauge size={20} />}
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold font-sans text-slate-100 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-xs font-mono text-slate-400">
                      <strong>My Role:</strong> {project.role}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans line-clamp-4">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tools.slice(0, 3).map((tool, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-850 text-[10px] font-mono text-slate-400">
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-850 text-[10px] font-mono text-slate-500">
                          +{project.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="bg-slate-900/50 border-t border-slate-850/80 px-6 py-4 flex justify-between items-center text-xs font-mono">
                    <span className="text-emerald-400 font-extrabold flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      {project.metricBadge}
                    </span>
                    <span className="text-blue-400 group-hover:underline flex items-center gap-1">
                      View Details <Maximize2 size={10} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Projects Area */}
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-6 text-left flex items-center gap-2">
              <Wrench size={14} />
              OTHER ENGINEERING PROJECTS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectItems.filter(p => !p.featured).map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="glass-panel rounded-xl overflow-hidden border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5 group text-left flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
                >
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded bg-slate-850 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        {project.id === 'crank' ? <Gauge size={16} /> : project.id === 'slingshot' ? <Activity size={16} /> : project.id === 'robot' ? <Cpu size={16} /> : <Award size={16} />}
                      </div>
                      <span className="text-[9px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h4 className="text-base font-bold font-sans text-slate-100 group-hover:text-orange-400 transition-colors line-clamp-1">
                      {project.title}
                    </h4>

                    <p className="text-[11px] font-mono text-slate-400 line-clamp-1">
                      <strong>Role:</strong> {project.role}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {project.tools.slice(0, 2).map((tool, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-850 text-[9px] font-mono text-slate-400">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900/30 border-t border-slate-850/60 px-5 py-3 flex justify-between items-center text-[10px] font-mono">
                    <span className="text-orange-400 font-bold">
                      {project.metricBadge}
                    </span>
                    <span className="text-slate-500 group-hover:text-slate-300 flex items-center gap-0.5">
                      Details <Maximize2 size={8} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest">05 / ENGINEERING VISUALS &amp; DRAFTS</span>
            <h2 className="text-3xl font-bold font-sans mt-2 tracking-tight">Visual Gallery</h2>
            <div className="h-1 w-20 bg-blue-500 mt-4"></div>
          </div>

          {/* Gallery Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-start">
            {[
              { id: 'all', label: 'ALL VISUALS' },
              { id: 'cad', label: 'CAD MODELS' },
              { id: 'simulations', label: 'SIMULATIONS & FEA' },
              { id: 'prototypes', label: 'PROTOTYPES' },
              { id: 'testing', label: 'TESTING & HANDS-ON' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveGalleryFilter(tab.id)}
                className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded border transition-all cursor-pointer ${
                  activeGalleryFilter === tab.id
                    ? 'text-orange-400 border-orange-500 bg-orange-500/10 glow-orange-sm'
                    : 'text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems
              .filter(item => activeGalleryFilter === 'all' || item.category === activeGalleryFilter || (Array.isArray(item.category) && item.category.includes(activeGalleryFilter)))
              .map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedGalleryItem(item);
                    setActiveImageIdx(0);
                  }}
                  className="glass-panel rounded-xl overflow-hidden border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 group cursor-pointer hover:shadow-xl hover:shadow-blue-500/5 relative flex flex-col h-[320px]"
                >
                  {/* Image container */}
                  <div className="relative h-44 overflow-hidden bg-slate-950 flex items-center justify-center shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform shadow-lg">
                        <Eye size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-4 flex flex-col flex-grow justify-between text-left">
                    <div>
                      <h3 className="text-sm font-bold font-sans text-slate-100 group-hover:text-blue-400 transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-2 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>

                    {/* Tools Tag */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tools.slice(0, 2).map((tool, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-850 text-[9px] font-mono text-slate-400">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Engineering Interests Section */}
      <section id="interests" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest">05 / FOCUS &amp; ASPIRATIONS</span>
            <h2 className="text-3xl font-bold font-sans mt-2 tracking-tight">Engineering Interests</h2>
            <div className="h-1 w-20 bg-blue-500 mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto text-left space-y-8 font-sans">
            <p className="text-slate-200 leading-relaxed text-base sm:text-lg">
              I’m most interested in work that combines mechanical design, analysis, prototyping, and testing. I enjoy aerospace systems, automotive performance, structural design, thermal systems, and emerging technologies where engineering decisions can be validated through both simulation and real-world testing.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 font-mono text-xs">
              {[
                { name: "Aerospace Systems", icon: <Rocket size={20} className="text-blue-400" /> },
                { name: "Automotive Design", icon: <Car size={20} className="text-orange-400" /> },
                { name: "Mechanical Design", icon: <Layers size={20} className="text-emerald-400" /> },
                { name: "FEA & Structural Analysis", icon: <Activity size={20} className="text-purple-400" /> },
                { name: "Product Development", icon: <Cpu size={20} className="text-pink-400" /> },
                { name: "Experimental Testing", icon: <Wrench size={20} className="text-blue-400" /> },
                { name: "Thermal Systems", icon: <Gauge size={20} className="text-orange-400" /> },
                { name: "Emerging Tech", icon: <Zap size={20} className="text-emerald-400" /> }
              ].map((interest, idx) => (
                <div 
                  key={idx}
                  className="glass-panel p-5 rounded-lg border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/5 flex flex-col justify-between items-start h-28 group"
                >
                  <div className="p-2 rounded bg-slate-900 group-hover:bg-slate-800 transition-colors">
                    {interest.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-200 mt-3 block">
                    {interest.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-slate-950/40 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest">05 / LEADERSHIP &amp; COMMUNITY</span>
            <h2 className="text-3xl font-bold font-sans mt-2 tracking-tight">Leadership &amp; Extracurriculars</h2>
            <div className="h-1 w-20 bg-blue-500 mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leadership card 1: MSU Rocketry */}
            <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col text-left group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Rocket size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold font-sans text-slate-100">
                    MSU Rocketry Team
                  </h3>
                  <p className="text-xs font-mono text-slate-400">Design &amp; Manufacturing Member</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-grow font-sans">
                Coordinated within a multidisciplinary team of <strong className="text-blue-400">100+ members</strong>, driving technical teamwork and design communication. Utilized Siemens NX CAD for aerospace component layouts, collaborated on drone prototype assembly drafts, and conducted high-pressure structural integration tests.
              </p>
              
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-850 pt-3">
                <span className="flex items-center gap-1"><Cpu size={12} /> Siemens NX CAD</span>
                <span className="text-slate-500">Sep 2023 – Present</span>
              </div>
            </div>

            {/* Leadership card 2: Resell Org */}
            <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col text-left group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <Zap size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold font-sans text-slate-100">
                    Resell Organization
                  </h3>
                  <p className="text-xs font-mono text-slate-400">Vice President</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-grow font-sans">
                Managed operational strategy and supply logistics under pressure for a <strong className="text-orange-400">100+ member</strong> student organization. Directed cross-functional teams to scale sales revenue by <strong className="text-orange-400">15%</strong>, optimized item availability to <strong className="text-orange-400">95%</strong>, and secured <strong className="text-orange-400">$5,000+</strong> in profit to fund outreach programs.
              </p>
              
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-850 pt-3">
                <span className="flex items-center gap-1"><Zap size={12} /> $5k+ Net Profit</span>
                <span className="text-slate-500">Jan 2023 – May 2024</span>
              </div>
            </div>

            {/* Leadership card 3: Phi Gamma Nu (PGN) */}
            <div className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col text-left group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold font-sans text-slate-100">
                    Phi Gamma Nu (PGN)
                  </h3>
                  <p className="text-xs font-mono text-slate-400">Professional Development Chair</p>
                </div>
              </div>
              
              <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-grow font-sans">
                Led peer mentoring, resume workshops, and public speaking exercises to drive professional development. Coordinated recruitment events, managed cross-functional teamwork under pressure, and delivered technical presentations to scale members' career readiness.
              </p>
              
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-850 pt-3">
                <span className="flex items-center gap-1"><Award size={12} /> Professional Growth</span>
                <span className="text-slate-500">Jan 2023 – Apr 2023</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-16">
            <span className="font-mono text-xs font-bold text-orange-500 uppercase tracking-widest">06 / COMMUNICATION CHANNEL</span>
            <h2 className="text-3xl font-bold font-sans mt-2 tracking-tight">Get In Touch</h2>
            <div className="h-1 w-20 bg-blue-500 mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Information Cards */}
            <div className="lg:col-span-4 space-y-4 text-left font-sans">
              <div className="glass-panel p-6 rounded-xl border border-slate-800/80">
                <h3 className="text-base font-mono font-bold text-slate-200 mb-4 border-b border-slate-800 pb-2">
                  CONTACT CHANNELS
                </h3>
                
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  I’m open to entry-level engineering opportunities, project collaborations, technical discussions, and networking with professionals in aerospace, automotive, mechanical design, and product development.
                </p>
                
                <div className="space-y-4">
                  {/* Email */}
                  <a 
                    href="mailto:nikhilnaray04@gmail.com" 
                    className="flex items-start gap-3 p-3 rounded hover:bg-slate-900/60 transition-colors border border-transparent hover:border-slate-800 group"
                  >
                    <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500">EMAIL</p>
                      <p className="text-sm font-semibold text-slate-300 mt-0.5">nikhilnaray04@gmail.com</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a 
                    href="tel:248-854-8616" 
                    className="flex items-start gap-3 p-3 rounded hover:bg-slate-900/60 transition-colors border border-transparent hover:border-slate-800 group"
                  >
                    <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500">PHONE</p>
                      <p className="text-sm font-semibold text-slate-300 mt-0.5">248-854-8616</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/nikhil-narayana/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-3 p-3 rounded hover:bg-slate-900/60 transition-colors border border-transparent hover:border-slate-800 group"
                  >
                    <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                      <LinkedInIcon size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500">LINKEDIN</p>
                      <p className="text-sm font-semibold text-slate-300 mt-0.5">linkedin.com/in/nikhil-narayana</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Informative Note */}
              <div className="p-4 rounded border border-blue-500/10 bg-blue-500/5 text-xs font-mono text-slate-400 leading-relaxed">
                <p>
                  <strong>Recruiter Tip:</strong> You can download a digital copy of my complete professional history by clicking the "Resume.pdf" link in the navbar or hero sections.
                </p>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className="lg:col-span-8">
              <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-800/80 text-left">
                <h3 className="text-base font-mono font-bold text-slate-200 mb-6 border-b border-slate-800 pb-2">
                  SEND AN INQUIRY
                </h3>

                <AnimatePresence mode="wait">
                  {contactSuccess ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-8 rounded border border-emerald-500/30 bg-emerald-500/5 text-center space-y-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 size={24} />
                      </div>
                      <h4 className="text-lg font-bold font-sans text-slate-100">Transmission Complete!</h4>
                      <p className="text-sm font-mono text-slate-400 max-w-md mx-auto">
                        Thank you for your message, {contactForm.name}. A transmission diagnostic log has been created, and I will get back to you shortly at {contactForm.email}.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleContactSubmit} 
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase">
                            Your Name <span className="text-orange-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:outline-none rounded px-4 py-2.5 text-sm font-mono transition-colors"
                            placeholder="e.g. John Doe"
                          />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase">
                            Your Email <span className="text-orange-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:outline-none rounded px-4 py-2.5 text-sm font-mono transition-colors"
                            placeholder="e.g. email@domain.com"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase">
                          Message Body <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          required
                          rows="5"
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 focus:border-blue-500 focus:outline-none rounded px-4 py-2.5 text-sm font-mono transition-colors"
                          placeholder="Please enter details of your project, opportunity, or connection request..."
                        ></textarea>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="px-6 py-3.5 rounded bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono font-bold tracking-wider text-sm transition-all flex items-center justify-center space-x-2 w-full sm:w-auto shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                      >
                        <span>Send Inquiry</span>
                        <ArrowRight size={16} />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-center text-xs font-mono text-slate-500">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex justify-center space-x-6 flex-wrap gap-y-2">
            <a href="#home" className="hover:text-slate-300 transition-colors">Top</a>
            <span>•</span>
            <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
            <span>•</span>
            <a href="#skills" className="hover:text-slate-300 transition-colors">Skills</a>
            <span>•</span>
            <a href="#experience" className="hover:text-slate-300 transition-colors">Experience</a>
            <span>•</span>
            <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
            <span>•</span>
            <a href="#gallery" className="hover:text-slate-300 transition-colors">Gallery</a>
            <span>•</span>
            <a href="#leadership" className="hover:text-slate-300 transition-colors">Leadership</a>
          </div>
          <p>© {new Date().getFullYear()} Nikhil Narayana. All rights reserved.</p>
          <p className="text-[10px] text-slate-600">
            Engineered using React, Vite, Tailwind CSS v4, and Lucide React.
          </p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedGalleryItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGalleryItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row cursor-default z-10"
            >
              {/* Image side */}
              <div className="w-full md:w-3/5 bg-slate-950 flex items-center justify-center p-2 relative h-[250px] sm:h-[350px] md:h-[450px]">
                <img
                  src={selectedGalleryItem.images ? selectedGalleryItem.images[activeImageIdx] : selectedGalleryItem.image}
                  alt={selectedGalleryItem.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                />
                
                {/* Image toggles for multi-image gallery items */}
                {selectedGalleryItem.images && selectedGalleryItem.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex bg-slate-900/90 border border-slate-800 rounded-lg p-1 gap-1 shadow-lg backdrop-blur-sm z-20">
                    {selectedGalleryItem.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`px-3 py-1.5 text-[10px] font-mono font-bold tracking-wider rounded transition-all cursor-pointer ${
                          activeImageIdx === idx
                            ? 'text-orange-400 bg-orange-500/10 border border-orange-500/30'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                        }`}
                      >
                        {selectedGalleryItem.imageLabels ? selectedGalleryItem.imageLabels[idx] : `IMAGE ${idx + 1}`}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setSelectedGalleryItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer md:hidden animate-pulse"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Detail side */}
              <div className="w-full md:w-2/5 p-6 flex flex-col justify-between text-left border-t md:border-t-0 md:border-l border-slate-800/80 bg-slate-900/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 px-2.5 py-1 rounded">
                      {Array.isArray(selectedGalleryItem.category)
                        ? selectedGalleryItem.category.map(c => c === 'simulations' ? 'Simulation & FEA' : c === 'cad' ? 'CAD Model' : c === 'prototypes' ? 'Prototype' : c === 'testing' ? 'Testing & Hands-on' : 'Engineering Visual').join(' / ')
                        : (selectedGalleryItem.category === 'simulations' ? 'Simulation & FEA' : selectedGalleryItem.category === 'cad' ? 'CAD Model' : selectedGalleryItem.category === 'prototypes' ? 'Prototype' : selectedGalleryItem.category === 'testing' ? 'Testing & Hands-on' : 'Engineering Visual')}
                    </span>
                    <button
                      onClick={() => setSelectedGalleryItem(null)}
                      className="hidden md:flex p-1.5 rounded-full hover:bg-slate-800 border border-transparent hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold font-sans text-slate-100">
                    {selectedGalleryItem.title}
                  </h3>

                  <div className="h-[1px] w-full bg-slate-800/80"></div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">ENGINEERING DETAIL</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2 font-sans">
                      {selectedGalleryItem.details}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">TOOLS &amp; METHODS</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedGalleryItem.tools.map((tool, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-850 text-xs font-mono text-slate-300">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md cursor-zoom-out overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-slate-900 border border-slate-800/80 rounded-xl shadow-2xl p-6 sm:p-8 cursor-default z-10 text-left max-h-[90vh] overflow-y-auto relative font-sans space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-800 border border-transparent hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Header */}
              <div className="space-y-2.5">
                <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-orange-400 uppercase bg-orange-500/10 px-2.5 py-1 rounded">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-sans text-slate-100 pr-8">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  <strong>Role:</strong> {selectedProject.role}
                </p>
              </div>

              <div className="h-[1px] w-full bg-slate-800/80"></div>

              {/* Problem & Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">PROBLEM STATEMENT</h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-sans">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">MY RESPONSIBILITIES</h4>
                  <p className="text-sm text-slate-200 leading-relaxed font-sans">
                    {selectedProject.responsibilities}
                  </p>
                </div>
              </div>

              {/* Engineering Methods */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">ENGINEERING METHODS &amp; ACTIONS</h4>
                <ul className="space-y-2 text-sm text-slate-200 leading-relaxed list-disc list-outside pl-4 font-sans">
                  {selectedProject.methods.map((method, idx) => (
                    <li key={idx}>{method}</li>
                  ))}
                </ul>
              </div>

              {/* Outcome / Result */}
              <div className="p-4 rounded border border-emerald-500/20 bg-emerald-500/5 space-y-1">
                <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  PROJECT OUTCOME / RESULT
                </h4>
                <p className="text-sm font-semibold text-slate-100 font-sans">
                  {selectedProject.result}
                </p>
              </div>

              {/* What I Learned */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">KEY LESSONS LEARNED</h4>
                <p className="text-sm text-slate-200 leading-relaxed font-sans">
                  {selectedProject.learned}
                </p>
              </div>

              {/* Tools tags */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">TOOLS USED</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tools.map((tool, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-850 text-xs font-mono text-slate-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// FEA bracket stress simulation graphic rendering in SVG based on force slider inputs
function FEABracketGraphic({ load }) {
  // Generates stress color transitions. When load is low, colors are cool (blue, cyan). 
  // When load is high, color transitions to hot colors (yellow, orange, red) at fillet concentration.
  const getFilletColor = () => {
    if (load < 35) return 'rgb(59, 130, 246)'; // blue-500
    if (load < 60) return 'rgb(34, 197, 94)'; // green-500
    if (load < 80) return 'rgb(234, 179, 8)'; // yellow-500
    return 'rgb(239, 68, 68)'; // red-500
  };

  const getMidBracketColor = () => {
    if (load < 55) return 'rgb(59, 130, 246)'; // blue-500
    if (load < 85) return 'rgb(34, 197, 94)'; // green-500
    return 'rgb(249, 115, 22)'; // orange-500
  };

  return (
    <svg width="240" height="130" viewBox="0 0 240 130" className="w-full h-full max-h-40">
      <defs>
        {/* Gradients that adapt based on the applied load input */}
        <linearGradient id="feaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(59, 130, 246)" /> {/* Fixed low stress anchoring */}
          <stop offset="55%" stopColor={getMidBracketColor()} />
          <stop offset="90%" stopColor={getFilletColor()} />
        </linearGradient>
      </defs>
      
      {/* Blueprint background grid inside SVG */}
      <pattern id="svgGrid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.5" />
      </pattern>
      <rect width="240" height="130" fill="url(#svgGrid)" />

      {/* Bracket geometry */}
      {/* Anchored end */}
      <rect x="20" y="30" width="15" height="70" fill="#1e293b" stroke="#334155" strokeWidth="1" />
      <circle cx="27.5" cy="45" r="3" fill="#030712" stroke="#475569" />
      <circle cx="27.5" cy="85" r="3" fill="#030712" stroke="#475569" />

      {/* Main Structural Body */}
      <path 
        d="M 35 45 
           L 130 45 
           Q 150 45 155 60 
           L 165 90 
           Q 170 100 190 100 
           L 210 100 
           L 210 70 
           L 180 70 
           Q 160 70 155 55 
           L 145 25 
           Q 135 15 110 15 
           L 35 15 Z" 
        fill="url(#feaGradient)" 
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1.5"
        className="transition-all duration-300"
      />

      {/* Load application force vector arrow */}
      <g className="transition-transform duration-300" style={{ transform: `translateX(${load * 0.15}px)` }}>
        {/* Dynamic displacement line */}
        <line x1="210" y1="85" x2="235" y2="85" stroke="#ea580c" strokeWidth="2" strokeDasharray="3,3" />
        
        {/* Load Force Arrow */}
        <line x1="230" y1="85" x2="212" y2="85" stroke="#ea580c" strokeWidth="2.5" />
        <polygon points="210,85 216,81 216,89" fill="#ea580c" />
        
        <text x="212" y="77" fill="#ea580c" fontSize="8" fontFamily="monospace" fontWeight="bold">
          F
        </text>
      </g>
    </svg>
  );
}

// 3D Isometric CAD rocket engine wireframe graphic that slowly rotates
function CADNozzleWireframe() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animId;
    const animate = () => {
      setRotation((prev) => (prev + 0.5) % 360);
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div 
      className="w-48 h-48 relative flex items-center justify-center transition-transform cursor-pointer"
      style={{ transform: `rotateY(${rotation}deg) rotateX(20deg)` }}
    >
      <svg width="180" height="180" viewBox="0 0 180 180" className="w-full h-full text-blue-500/40">
        {/* Isometric circles (ellipses) representing slices of a rocket nozzle draft */}
        {/* Circle 1: Top Injector Inlet */}
        <ellipse cx="90" cy="30" rx="35" ry="12" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,2" />
        
        {/* Circle 2: Combustion chamber collar */}
        <ellipse cx="90" cy="65" rx="32" ry="11" fill="none" stroke="currentColor" strokeWidth="1" />
        
        {/* Circle 3: Throat (Narrowest section) */}
        <ellipse cx="90" cy="95" rx="14" ry="5" fill="none" stroke="#f97316" strokeWidth="1.5" />
        <ellipse cx="90" cy="95" rx="17" ry="6.5" fill="none" stroke="#f97316" strokeWidth="0.5" strokeDasharray="2,2" />

        {/* Circle 4: Exit nozzle cone bell */}
        <ellipse cx="90" cy="150" rx="55" ry="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="90" cy="150" rx="50" ry="16" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,2" />

        {/* Longitudinal rib lines connecting circles */}
        <path d="M 55 30 L 58 65 L 76 95 L 35 150" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M 125 30 L 122 65 L 104 95 L 145 150" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M 90 42 L 90 76 L 90 100 L 90 168" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
        
        {/* Cross ribs */}
        <path d="M 72 30 C 72 50, 75 75, 82 95 L 75 150" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <path d="M 108 30 C 108 50, 105 75, 98 95 L 105 150" fill="none" stroke="currentColor" strokeWidth="0.75" />

        {/* Center line (axis of symmetry) */}
        <line x1="90" y1="10" x2="90" y2="170" stroke="rgba(249,115,22,0.3)" strokeWidth="1" strokeDasharray="8,4" />
        
        {/* Dynamic CAD dimensions markers */}
        <line x1="25" y1="150" x2="15" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="155" y1="150" x2="165" y2="150" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="15" y1="140" x2="15" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <line x1="165" y1="140" x2="165" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <text x="90" y="175" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle" fontFamily="monospace">
          D_EXIT = 110.00 mm
        </text>
      </svg>
    </div>
  );
}

// Particle/Node network mesh animated canvas to showcase FEA elements
function CanvasMeshBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Node list
    const nodeCount = 40;
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1
      });
    }

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background CAD-grid inside canvas for precision
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & Draw nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Boundary bounce
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
        ctx.fill();
      });

      // Draw triangular/connecting meshes (FEA element style)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // If nodes are close enough, link them with a line
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.12;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" />;
}
