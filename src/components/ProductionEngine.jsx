import React from 'react';
import { motion } from 'framer-motion';

export default function ProductionEngine({ onOpenGateway }) {
  const benefits = [
    { title: 'Dedicated execution', desc: 'You focus purely on delivery; our studio takes care of every cut, sound layer, and caption.' },
    { title: 'Faster turnaround', desc: 'One 2-hour recording session turned into an entire month of master video assets in days.' },
    { title: 'Consistent quality', desc: 'Backed by Ottobon Professional Services engineering and editorial quality control.' },
    { title: 'Strategic support', desc: 'Continuous guidance on algorithm trends, hook structures, and search dominance.' }
  ];

  const steps = [
    {
      num: '01',
      title: 'Brief & Strategy',
      desc: 'Identify patient/audience questions and draft high-retention hook architecture.'
    },
    {
      num: '02',
      title: 'Create & Produce',
      desc: 'Guided 2-hour shoot with pro teleprompter, framing, and studio lighting.'
    },
    {
      num: '03',
      title: 'Publish & Optimize',
      desc: 'Post-production cuts, motion design, and scheduled dispatch across platforms.'
    },
    {
      num: '04',
      title: 'Measure & Improve',
      desc: 'Continuous performance tracking, inbound lead analytics, and SEO review.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="production-engine-section" id="engine" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background glow */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="split-engine-layout">
          
          {/* Left Column: Headline & Benefits */}
          <motion.div 
            className="engine-left-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="section-eyebrow">
              The Production Standard
            </motion.span>

            <motion.h2 variants={itemVariants} className="font-serif section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Your production engine.<br />
              <span style={{ color: 'var(--gold-vibrant)', position: 'relative', display: 'inline-block' }}>
                Your fallback partner.
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    height: '2px',
                    background: 'var(--gold-vibrant)',
                    opacity: 0.3
                  }}
                />
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="engine-lead-text" style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              Growing digitally shouldn't require burning out on video editing software or managing dozens of unreliable freelancers. S Bloom handles the heavy operational execution so you bloom effortlessly.
            </motion.p>

            <motion.ul variants={containerVariants} className="engine-benefits-list" style={{ gap: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              {benefits.map((b, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants} 
                  className="benefit-item"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', cursor: 'default' }}
                >
                  <div className="benefit-icon" style={{
                    width: '28px', height: '28px', minWidth: '28px',
                    borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid var(--gold-vibrant)', color: 'var(--gold-vibrant)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: 'bold',
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.2)'
                  }}>✓</div>
                  <div className="benefit-text">
                    <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '6px', color: '#FFF' }}>{b.title}</strong>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.5' }}>{b.desc}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} style={{ marginTop: '3rem' }}>
              <motion.button 
                className="btn btn-primary"
                onClick={() => onOpenGateway('businesses')}
                whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: 'linear-gradient(135deg, var(--gold-vibrant) 0%, #B89600 100%)',
                  border: 'none',
                  color: '#000',
                  fontWeight: '700',
                  padding: '16px 32px',
                  borderRadius: '30px',
                  boxShadow: '0 4px 15px rgba(212, 175, 55, 0.2)',
                  transition: 'box-shadow 0.3s ease'
                }}
              >
                Explore Production Workflows &rarr;
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Process UI */}
          <motion.div 
            className="process-ui-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Soft highlight over the card */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 60%)',
              pointerEvents: 'none'
            }}/>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              paddingBottom: '1.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              position: 'relative'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: '700', color: 'var(--gold-vibrant)', marginBottom: '6px' }}>
                  Execution Roadmap
                </div>
                <strong style={{ fontSize: '1.25rem', color: '#FFF' }}>
                  The 4-Step S Bloom Engine
                </strong>
              </div>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
                style={{
                  background: 'rgba(56, 199, 147, 0.15)',
                  border: '1px solid rgba(56, 199, 147, 0.3)',
                  color: '#38C793',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                Ottobon Standard
              </motion.span>
            </div>

            <motion.div 
              className="process-steps-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', position: 'relative' }}
            >
              {steps.map((step, idx) => (
                <motion.div 
                  key={step.num} 
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    borderColor: 'rgba(212,175,55,0.4)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.015)',
                    border: '1px solid rgba(255, 255, 255, 0.04)',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: 'var(--gold-vibrant)',
                    fontFamily: 'var(--font-serif)',
                    opacity: 0.9,
                    background: 'linear-gradient(135deg, var(--gold-vibrant), #B89600)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <h5 style={{ fontSize: '1.15rem', color: '#FFF', marginBottom: '8px' }}>{step.title}</h5>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
