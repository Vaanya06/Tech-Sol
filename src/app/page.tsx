import SecuritySimulationPopup from "./security-simulation-popup";

const services = [
  {
    number: "01",
    title: "Digital transformation",
    description:
      "Modernize the way you work with connected systems and workflows built to scale.",
    icon: (
      <>
        <path d="M4 5h16v11H4z" />
        <path d="M8 20h8M12 16v4M8 9h8M8 12h5" />
      </>
    ),
  },
  {
    number: "02",
    title: "Cloud & infrastructure",
    description:
      "Build a resilient foundation with secure cloud architecture that grows with you.",
    icon: (
      <>
        <path d="M7.5 18a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17.6 8a4.5 4.5 0 0 1 .9 8.91" />
        <path d="m9 14 3-3 3 3M12 11v9" />
      </>
    ),
  },
  {
    number: "03",
    title: "AI & automation",
    description:
      "Turn repetitive work into intelligent systems that give your team room to think.",
    icon: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.64 5.64l2.12 2.12m8.48 8.48 2.12 2.12m0-12.72-2.12 2.12m-8.48 8.48-2.12 2.12" />
        <circle cx="12" cy="12" r="5" />
        <path d="m10.5 12 1 1 2-2" />
      </>
    ),
  },
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h13m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <SecuritySimulationPopup />
      <div id="site-content">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Nexora home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span>nexora<span className="brand-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#services">What we do</a>
          <a href="#approach">Our approach</a>
          <a href="#about">About us</a>
        </nav>
        <a className="header-cta" href="mailto:hello@nexora.tech">
          Let&apos;s talk <ArrowIcon diagonal />
        </a>
      </header>

      <section className="hero" id="about">
        <div className="hero-copy">
          <div className="eyebrow"><span /> TECHNOLOGY, WITH INTENTION</div>
          <h1>
            Make your next
            <br />
            move <span>matter.</span>
          </h1>
          <p>
            We help ambitious teams turn complex technology into their
            simplest advantage. Thoughtful strategy, practical solutions,
            measurable progress.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="mailto:hello@nexora.tech">
              Build what&apos;s next <ArrowIcon />
            </a>
            <a className="text-link" href="#services">
              Explore our work <ArrowIcon />
            </a>
          </div>
          <div className="hero-note">
            <div className="avatar-stack" aria-hidden="true">
              <span>A</span><span>M</span><span>J</span>
            </div>
            <span>Good people. Serious technology.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Illustration of connected technology systems">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-orbit orbit-three" />
          <div className="visual-center">
            <div className="center-spark">✳</div>
            <span>YOUR NEXT<br />CHAPTER</span>
          </div>
          <div className="orbit-node node-cloud">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M7.5 18a4.5 4.5 0 0 1-.6-8.96A5.5 5.5 0 0 1 17.6 8a4.5 4.5 0 0 1 .9 8.91M12 12v7m-2.5-4.5L12 12l2.5 2.5" /></svg>
          </div>
          <div className="orbit-node node-data">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M4 19V9m5 10V5m5 14v-7m5 7V3" /></svg>
          </div>
          <div className="orbit-node node-ai">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M12 3v4m0 10v4M3 12h4m10 0h4M5.64 5.64l2.83 2.83m7.06 7.06 2.83 2.83m0-12.72-2.83 2.83m-7.06 7.06-2.83 2.83" /><circle cx="12" cy="12" r="3" /></svg>
          </div>
          <div className="visual-label label-top">BUILT FOR WHAT&apos;S NEXT</div>
          <div className="visual-label label-bottom">HUMAN FIRST. ALWAYS.</div>
          <div className="visual-decoration">N° 01 <span>—</span> 2026</div>
        </div>

        <div className="hero-bottom">
          <span>INDEPENDENT THINKING. CONNECTED SOLUTIONS.</span>
          <a href="#services" aria-label="Scroll to services"><span>SCROLL TO EXPLORE</span><i /></a>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span /> HOW WE HELP</div>
            <h2>Big picture thinkers.<br /><span>Hands-on doers.</span></h2>
          </div>
          <p>
            No off-the-shelf answers. Just the right people and technology,
            brought together to solve the things that matter to your business.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span>{service.number}</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">{service.icon}</svg>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="mailto:hello@nexora.tech" aria-label={`Learn about ${service.title}`}>
                <ArrowIcon diagonal />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-stamp"><span>THOUGHTFUL BY DESIGN</span><b>✳</b><span>BUILT TO MOVE YOU FORWARD</span></div>
        <div>
          <div className="eyebrow"><span /> A BETTER WAY FORWARD</div>
          <h2>Technology should<br />feel like <em>momentum.</em></h2>
          <p>We start with people, not platforms. Then we make the complicated feel clear — and the ambitious feel achievable.</p>
          <a className="button button-light" href="mailto:hello@nexora.tech">Meet your new tech team <ArrowIcon /></a>
        </div>
        <div className="approach-stats">
          <div><strong>01</strong><span>One team, end to end</span></div>
          <div><strong>∞</strong><span>Room to grow, always</span></div>
          <div><strong>100%</strong><span>Built around your people</span></div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#" aria-label="Nexora home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
          <span>nexora<span className="brand-period">.</span></span>
        </a>
        <span>Technology for the people going places.</span>
        <a href="mailto:hello@nexora.tech">hello@nexora.tech <ArrowIcon diagonal /></a>
        <small>© 2026 Nexora Technologies</small>
      </footer>
      </div>
    </main>
  );
}
