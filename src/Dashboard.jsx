import React, { useEffect, useState } from "react";
import "./css/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBrain,
  faAward,
  faUser,
  faPowerOff,
  faTrophy,
  faCrown,
  faGem,
  faDiamond,
  faShieldAlt,
  faStar,
  faEnvelope,
  faUserGraduate,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const badgeTiers = [
  {
    tier: "Bronze",
    icon: faAward,
    desc: "Entry mentor badge",
    prog: 40,
    goal: 100,
  },
  {
    tier: "Silver",
    icon: faTrophy,
    desc: "Emerging coach",
    prog: 80,
    goal: 200,
  },
  {
    tier: "Gold",
    icon: faCrown,
    desc: "Notable teacher",
    prog: 120,
    goal: 400,
  },
  {
    tier: "Platinum",
    icon: faGem,
    desc: "Trusted expert",
    prog: 318,
    goal: 800,
  },
  {
    tier: "Diamond",
    icon: faDiamond,
    desc: "Elite educator",
    prog: 780,
    goal: 1600,
  },
  {
    tier: "Heroic",
    icon: faShieldAlt,
    desc: "Mentor hero",
    prog: 1200,
    goal: 2800,
  },
  {
    tier: "Grandmaster",
    icon: faStar,
    desc: "Legendary mentor",
    prog: 2800,
    goal: Infinity,
  },
];

const skills = [
  "JavaScript",
  "React",
  "Web Design",
  "Python",
  "Public Speaking",
];
const skillsToLearn = ["TypeScript", "GraphQL", "3D CSS", "Blockchain Basics"];
const matches = [
  {
    name: "Aarav",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    tags: ["Python", "ML"],
  },
  {
    name: "Sara",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
    tags: ["React", "TypeScript"],
  },
  {
    name: "Rishi",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    tags: ["Web Design", "Figma"],
  },
  {
    name: "Alia",
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
    tags: ["Blockchain", "Solidity"],
  },
];

const leaderboard = [
  {
    name: "Sara",
    badge: 5,
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    name: "Aarav",
    badge: 4,
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Rishi",
    badge: 3,
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Alia",
    badge: 2,
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
  },
];

const Dashboard = () => {
  const [welcomeText, setWelcomeText] = useState("");

  useEffect(() => {
    // Animate welcome text
    const fullText = "Welcome to Skill Hire – Advance, Mentor, Earn Badges!";
    let idx = 0;
    const interval = setInterval(() => {
      setWelcomeText(fullText.slice(0, idx));
      idx++;
      if (idx > fullText.length) clearInterval(interval);
    }, 26);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Background Shapes */}
      <div className="bg-shape circle"></div>
      <div className="bg-shape square"></div>
      <div className="bg-shape blob"></div>

      {/* Navbar */}
      {/* <nav className="navbar">
        <div className="logo">Skill Hire</div>
        <div className="nav-links">
          <button className="nav-btn">Dashboard</button>
          <button className="nav-btn">Skills</button>
          <button className="nav-btn">Badges</button>
          <button className="nav-btn">Profile</button>
          <button className="nav-btn">Logout</button>
        </div>
      </nav> */}

      {/* Sidebar */}
      {/* <aside className="sidebar">
        <div className="icon-group">
          <button className="sidebar-btn"><FontAwesomeIcon icon={faHome} /><span>Dashboard</span></button>
          <button className="sidebar-btn"><FontAwesomeIcon icon={faBrain} /><span>Skills</span></button>
          <button className="sidebar-btn"><FontAwesomeIcon icon={faAward} /><span>Badges</span></button>
          <button className="sidebar-btn"><FontAwesomeIcon icon={faUser} /><span>Profile</span></button>
          <button className="sidebar-btn"><FontAwesomeIcon icon={faPowerOff} /><span>Logout</span></button>
        </div>
      </aside> */}

      {/* Main Content */}
      <main>
        <div className="welcome-container">
          <span className="welcome-text">{welcomeText}</span>
        </div>

        {/* Leaderboard */}
        <div className="leaderboard-card">
          <div className="lb-title">
            <FontAwesomeIcon icon={faTrophy} /> Mentor Leaderboard
          </div>
          <div className="lb-list">
            {leaderboard.map((u, i) => {
              const badge =
                badgeTiers[u.badge] || badgeTiers[badgeTiers.length - 1];
              return (
                <div key={i} className={`lb-user${i === 0 ? " top1" : ""}`}>
                  <div>
                    <img
                      className="lb-av"
                      src={u.avatar}
                      alt={u.name}
                      style={{ "--badge-glow": badge ? badge.tier : "" }}
                    />
                  </div>
                  <span className="lb-rank">
                    {i === 0 ? <FontAwesomeIcon icon={faCrown} /> : i + 1}
                  </span>
                  <span style={{ fontWeight: 600 }}>{u.name}</span>
                  <span
                    className="lb-badge"
                    style={{ "--badge-glow": badge ? badge.tier : "" }}
                  >
                    <FontAwesomeIcon icon={badge.icon} />
                  </span>
                  <span style={{ fontSize: "0.98em", color: "#88e6ff99" }}>
                    {badge.tier}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dashboard Grid */}
        <section className="dashboard-grid">
          {/* Badge Rankings */}
          <div className="card">
            <div className="card-title">
              <FontAwesomeIcon icon={faAward} /> Teaching Badge Rankings
            </div>
            <div className="badge-rankings">
              {badgeTiers.map((b, i) => (
                <div key={i} className="badge-tier" title={b.tier}>
                  <div className="badge-icon" data-tier={b.tier}>
                    <FontAwesomeIcon icon={b.icon} />
                  </div>
                  <div className="badge-tier-title">{b.tier}</div>
                  <div className="badge-tier-txt">{b.desc}</div>
                  <div className="progressbar-cont">
                    <div
                      className="progressbar-fill"
                      style={{
                        width: `${Math.min(
                          Math.ceil(
                            (100 * b.prog) /
                              (b.goal === Infinity ? b.prog + 400 : b.goal)
                          ),
                          99
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      color: "#ace9f3b3",
                      fontSize: "0.93em",
                      marginTop: "2px",
                    }}
                  >
                    {b.goal === Infinity
                      ? "Maxed"
                      : `${b.prog}/${b.goal} points`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Your Skills */}
          <div className="card">
            <div className="card-title">
              <FontAwesomeIcon icon={faBrain} /> Your Skills
            </div>
            <div className="skills-list">
              {skills.map((s, i) => (
                <span key={i} className="skill-pill">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Skills to Learn */}
          <div className="card">
            <div className="card-title">
              <FontAwesomeIcon icon={faUserGraduate} /> Skills to Learn
            </div>
            <ul className="learn-list">
              {skillsToLearn.map((s, i) => (
                <li key={i} style={{ animationDelay: `${0.18 + 0.18 * i}s` }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Suggested Matches */}
          <div className="card">
            <div className="card-title">
              <FontAwesomeIcon icon={faUserFriends} /> Suggested Matches
            </div>
            <div className="matches-list">
              {matches.map((m, i) => (
                <div key={i} className="match-card" tabIndex="0">
                  <div className="match-inner">
                    <div className="match-front">
                      <img
                        src={m.avatar}
                        alt={m.name}
                        className="match-avatar"
                      />
                      <div className="match-name">{m.name}</div>
                      <div className="tag-list">
                        {m.tags.map((t, j) => (
                          <span key={j} className="tag">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="match-back">
                      <FontAwesomeIcon icon={faEnvelope} />
                      <span>Connect with {m.name}!</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
