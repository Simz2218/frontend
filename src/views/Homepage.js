import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import bluesky from "../views/pictures/bluesky.png";

function Homepage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const profiles = [
    {
      name: "Samson Chidzurira",
      title: "District Schools Inspector (DSI)",
      bio: "Oversees all schools in the district, monitors teaching staff, and serves as the Accounting Officer.",
      duties: [
        "Coordinates recruitment, transfers, promotions, and placements",
        "Maintains updated establishment strength",
        "Declares vacancies and endorses interviews"
      ]
    },
    {
      name: "Inspectorate Team",
      title: "Schools Inspectors",
      bio: "Team of four inspectors responsible for school inspections and curriculum implementation.",
      members: ["Mr Bangamuseve J", "Mr Fusirai T", "Mr Chivingira C", "Mr Mucheki V"],
      duties: [
        "Inspect primary and secondary schools",
        "Organize PLAP and ERI workshops",
        "Supervise curriculum rollout and teacher training"
      ]
    },
    {
      name: "Ms Simbo N & Mr Manyuni N",
      title: "Human Resources Department",
      bio: "Manage staffing, grievances, disciplinary cases, allowances, and teacher records.",
      duties: [
        "Process appointments, leave, and terminations",
        "Handle salary queries and misconduct tracking",
        "Maintain teacher data and training records"
      ]
    },
    {
      name: "Mr Manyeruke D & Mrs Chikasha P",
      title: "Accounts Department",
      bio: "Oversee financial records, budgeting, payments, and compliance across district schools.",
      duties: [
        "Produce financial reports and statutory returns",
        "Advise schools on finance policies",
        "Manage SIG and GPE funds"
      ]
    },
    {
      name: "Ms Chidzurira G",
      title: "Administration Department",
      bio: "Handles procurement, transport, maintenance, secretarial services, asset tracking, and office accommodation.",
      duties: [
        "Manage requisitions, stores, and monthly reports",
        "Supervise transport and emergency repairs",
        "Maintain asset and housing records"
      ]
    },
    {
      name: "Mrs Muyambo R",
      title: "Adult Literacy Department",
      bio: "Promotes Non-Formal Education and supervises adult literacy centres and facilitators.",
      duties: [
        "Conduct workshops and collect NFE statistics",
        "Coordinate registration and policy rollout",
        "Support community engagement and reporting"
      ]
    },
    {
      name: "Mr Chitingwiza P",
      title: "Special Needs Education Department",
      bio: "Supports remedial teams, organizes screening, and monitors special needs programmes.",
      duties: [
        "Coordinate early identification and remediation",
        "Liaise with psychologists and trained teachers",
        "Ensure inclusive education practices"
      ]
    }
  ];

  return (
    <div
      className="animated-background homepage-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bluesky})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        color: '#fff',
        textShadow: '1px 1px 4px rgba(0,0,0,0.8)',
      }}
    >
      <h1 className="animate__animated animate__fadeInDown" style={{ fontSize: '2.5rem', textAlign: 'center' }}>
        Better Schools Program Of Zimbabwe
      </h1>
      <h2 className="animate__animated animate__fadeInUp" style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        Zaka District, Masvingo Province
      </h2>

      <p style={{ lineHeight: '1.6', fontSize: '1rem' }} data-aos="fade-up">
        Zaka is a district located 86km southeast of Masvingo under Ndanga communal land...
      </p>

      <div data-aos="fade-up" style={{ textAlign: 'center', maxWidth: '900px', margin: '3rem auto' }}>
        <h2 data-aos="fade-right">Organisational Vision</h2>
        <p>To be the leading provider of inclusive quality Education...</p>

        <h2 data-aos="fade-left">Organisational Mission</h2>
        <p>To provide equitable, quality, inclusive, relevant and competence-driven...</p>

        <h2 data-aos="fade-right">Core Values</h2>
        <p>Accountability, Integrity, Transparency, Empathy, Teamwork, and Commitment...</p>

        <h2 data-aos="fade-left">Organisational Objectives</h2>
        <p>The Ministry aims to provide education for all, improve teaching standards...</p>
      </div>

      <div style={{ margin: '2rem 0' }} data-aos="zoom-in">
        <iframe
          title="Zaka District Map"
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div style={{ marginTop: '3rem' }} data-aos="fade-up">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>District Leadership Profiles</h2>

        {profiles.map((profile, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            className="profile-card"
            style={{
              background: 'rgba(0,0,0,0.6)',
              padding: '1.5rem',
              borderRadius: '10px',
              marginBottom: '2rem',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center',
              transition: 'transform 0.3s ease-in-out'
            }}
          >
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#444',
              margin: '0 auto 1rem'
            }}>
              {/* Placeholder for profile image */}
            </div>
            <h3>{profile.name}</h3>
            <h4 style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{profile.title}</h4>
            <p>{profile.bio}</p>
            {profile.members && (
              <p><strong>Team Members:</strong> {profile.members.join(', ')}</p>
            )}
            <div style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
              {profile.duties.map((duty, i) => (
                <p key={i}>• {duty}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer
        style={{
          background: '#333',
          color: '#fff',
          textAlign: 'center',
          padding: '10px',
          marginTop: 'auto'
        }}
        data-aos="fade-up"
      >
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2025 - till date Copyright :
          <a className="text-dark" href="https://mdbootstrap.com/">
            SoftSimz +263783237453
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
