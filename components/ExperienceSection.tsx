'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EXPERIENCE = [
  {
    company: 'Genpact',
    role: 'Senior Principal Consultant',
    dates: 'Nov 2024 – Present',
    duration: '1 yr 5 mo',
    location: 'Charlotte, NC',
    color: '#00d4ff',
    highlights: ['RAG-based risk scoring', 'AKS containerization', 'Azure OpenAI + LangChain'],
    bullets: [
      'Architected AI-driven underwriting automation featuring RAG-based risk scoring that aggregates municipal and county data (crime rates, flood zones, building codes) to provide predictive insights for underwriting decisions',
      'Designed and integrated AI solutions using Azure OpenAI and LangChain for submission triage, quote workflow optimization, and predictive analytics — improving decision-making speed and accuracy',
      'Led migration from IIS servers to Azure VMs and AKS containerization, managing multi-cloud infrastructure across Azure, AWS (Elastic Beanstalk, EC2, RDS, Lambda, S3), and GCP',
      'Implemented comprehensive monitoring using Grafana and Prometheus with security enforcement through Wiz and Checkmarx scans',
      'Drove DevOps practices using GitLab, Jenkins, uDeploy, and GitHub Copilot for accelerated development',
      'Partnered with ML engineers to define technology stack and integration strategy, demonstrating ROI through improved quoting speed, risk accuracy, and operational efficiency',
      'Governed Agile delivery using SAFe methodology with JIRA and Confluence for predictable quarterly releases',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Senior Manager',
    dates: 'Sep 2024 – Nov 2024',
    duration: '3 mo',
    location: 'Charlotte, NC',
    color: '#7b5ea7',
    highlights: ['17 team members mentored', '10+ global teams', '2 migration accelerators'],
    bullets: [
      'Directed end-to-end migration of Java and Python applications to Pivotal Cloud Foundry, coordinating with 10+ global teams',
      'Designed and implemented AWS-based solutions using S3, Lambda, ECS Fargate, SQS, SNS, and API Gateway for secure, scalable applications',
      'Leveraged Terraform for Azure infrastructure automation and Harness for deployment orchestration',
      'Initiated pilot migrations to Azure App Service utilizing Azure Cache, Key Vault, and Application Insights',
      'Developed two migration accelerators that significantly boosted productivity and streamlined processes',
      "Led 'Let's Grow Together' training campaign, delivering comprehensive PCF and Agile training to drive skill development",
      'Mentored 17 team members on technical proficiency and career growth',
      'Collaborated with networking teams to establish robust Public Infrastructure for applications',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Software Engineering Manager',
    dates: 'Feb 2021 – Sep 2024',
    duration: '3 yr 8 mo',
    location: 'Charlotte, NC',
    color: '#7b5ea7',
    highlights: ['ColdFusion → Microservices', 'Python + Django + VueJS', 'CI/CD full pipeline'],
    bullets: [
      'Spearheaded strategic migration from Adobe ColdFusion legacy portal to modern microservices-based self-service application',
      'Led conceptualization and design of comprehensive migration strategy from Adobe ColdFusion to modern architecture',
      'Orchestrated domain design workshops to craft scalable microservices architecture',
      'Developed robust backend services using Python and Django with responsive VueJS frontend',
      'Implemented middleware service integrating JIRA Service Desk API for automated ticket creation and tracking',
      'Managed complete CI/CD pipeline onboarding using GitHub, Jenkins, Urban Code Deploy, Sonar, and Pivotal Cloud Foundry',
      'Delivered modernized, user-friendly self-service application meeting both technical and business objectives',
    ],
  },
  {
    company: 'Capgemini',
    role: 'Senior Consultant',
    dates: 'Oct 2018 – Feb 2021',
    duration: '2 yr 5 mo',
    location: 'Charlotte, NC',
    color: '#7b5ea7',
    highlights: ['12 training sessions', '6 agile workshops', 'Transformation Hub'],
    bullets: [
      'Established Transformation Hub providing centralized platform for cloud-native migration across multiple teams and technology stacks',
      'Collaborated with multiple application teams through pair programming for cloud-native migration using 15 Factor methodologies',
      'Championed Test-Driven Development (TDD) practices ensuring application robustness',
      'Led migration of applications to Spring Boot, Java, and Gradle with complete CI/CD integration',
      'Conducted 12 intensive 80-hour classroom training sessions on Cloud Native Applications and DevOps',
      "Facilitated 6 'Roadmap to Enterprise Agile' workshops for Senior Management across four states",
      'Designed and hosted multiple knowledge-sharing sessions and problem-solving workshops',
    ],
  },
  {
    company: 'Syntel',
    role: 'Consultant → Associate Consultant → Software Engineer',
    dates: 'Nov 2013 – Oct 2018',
    duration: '5 yr',
    location: 'Orlando, FL & Pune, India',
    color: '#44445a',
    highlights: ['Software Engineer', 'Associate Consultant', 'Consultant'],
    bullets: [
      'Software Engineer — Nov 2013 – Mar 2017, Pune, Maharashtra, India',
      'Associate Consultant — Apr 2017 – Mar 2018, Pune, Maharashtra, India',
      'Consultant — Apr 2018 – Oct 2018, Orlando, Florida Area',
    ],
  },
];

export default function ExperienceSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="section-pad" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '60px' }}
        >
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#00d4ff',
            marginBottom: '12px',
          }}>
            Career Timeline
          </p>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: '#e8e8f0',
          }}>
            10+ Years of<br />
            <span style={{
              background: 'linear-gradient(135deg, #00d4ff, #7b5ea7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Impact & Leadership
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, #00d4ff, #7b5ea7, rgba(255,255,255,0.05))',
          }} />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              style={{ paddingLeft: '56px', marginBottom: '16px', position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '14px',
                top: '28px',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                background: exp.color,
                boxShadow: `0 0 12px ${exp.color}`,
                border: '2px solid #050508',
                zIndex: 1,
              }} />

              {/* Card */}
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <div style={{
                  padding: '24px 28px',
                  borderRadius: '16px',
                  background: openIdx === i ? 'rgba(15,15,26,0.8)' : 'rgba(15,15,26,0.4)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${openIdx === i ? `${exp.color}33` : 'rgba(255,255,255,0.05)'}`,
                  transition: 'all 0.3s ease',
                  boxShadow: openIdx === i ? `0 0 40px ${exp.color}15` : 'none',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <span style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '0.65rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: exp.color,
                          opacity: 0.8,
                        }}>
                          {exp.company}
                        </span>
                        <span style={{ color: 'rgba(136,136,170,0.3)', fontSize: '0.6rem' }}>·</span>
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'rgba(136,136,170,0.6)' }}>
                          {exp.dates}
                        </span>
                      </div>
                      <h3 style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: '#e8e8f0',
                        letterSpacing: '-0.01em',
                      }}>
                        {exp.role}
                      </h3>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}>
                      <span style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.6rem',
                        color: 'rgba(136,136,170,0.5)',
                      }}>
                        {exp.duration}
                      </span>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: '1px solid rgba(136,136,170,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(136,136,170,0.5)',
                        fontSize: '0.7rem',
                        transform: openIdx === i ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.3s ease',
                      }}>
                        ↓
                      </div>
                    </div>
                  </div>

                  {/* Highlight chips */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {exp.highlights.map(h => (
                      <span key={h} style={{
                        display: 'inline-block',
                        padding: '3px 10px',
                        borderRadius: '100px',
                        fontSize: '0.65rem',
                        fontFamily: 'DM Mono, monospace',
                        border: `1px solid ${exp.color}30`,
                        color: exp.color,
                        background: `${exp.color}08`,
                        opacity: 0.9,
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{
                          marginTop: '20px',
                          paddingTop: '20px',
                          borderTop: '1px solid rgba(255,255,255,0.05)',
                        }}>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {exp.bullets.map((b, j) => (
                              <motion.li
                                key={j}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.04 }}
                                style={{
                                  display: 'flex',
                                  gap: '12px',
                                  fontSize: '0.875rem',
                                  lineHeight: 1.65,
                                  color: 'rgba(232,232,240,0.75)',
                                }}
                              >
                                <span style={{ color: exp.color, flexShrink: 0, marginTop: '2px', fontSize: '0.7rem' }}>▸</span>
                                {b}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
