import React, { useState } from 'react';

/**
 * SkillHierProfile.jsx
 * Single-file React component (Tailwind CSS) for a profile page inspired by LinkedIn + Instagram.
 * - Default export component: <SkillHierProfile user={...} isOwner={true|false} />
 * - No external data fetching; sample data included. Swap with real props/APIs.
 *
 * How to use:
 * 1. Ensure Tailwind is configured in your project (created with create-react-app + Tailwind or Next.js).
 * 2. Copy this file into your components folder and import it: import SkillHierProfile from './SkillHierProfile';
 * 3. Render: <SkillHierProfile isOwner={true} user={myUserObject} />
 *
 * Design decisions (pragmatic & forward-looking):
 * - Keep UI minimal and modular (skill chips, experience cards, mentor list).
 * - Meetings are visible only when isOwner === true.
 * - All interactions are local-state stubs (replace with API calls).
 */

const sampleUser = {
  id: 'u_001',
  name: 'Amrutha Varshini',
  username: 'amrutha.dev',
  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&q=80',
  bio: "Data-minded educator. Teaching data science fundamentals & Python. Learner first, teacher second.",
  skills: [
    'Python',
    'Pandas',
    'Data Visualization',
    'Machine Learning',
    'SQL',
    'Teaching'
  ],
  followers: 1240,
  following: 180,
  experiences: [
    {
      id: 'e1',
      title: 'Peer Mentor — Intro to Python',
      period: '2024 — Present',
      summary: 'Led weekly workshops for beginners; built hands-on exercises and evaluated mini-projects.'
    },
    {
      id: 'e2',
      title: 'Teaching Assistant — Data Science 101',
      period: '2023 — 2024',
      summary: 'Assisted in curriculum design and office hours; created automated grading scripts.'
    }
  ],
  learnedFrom: [
    { id: 'm1', name: 'Prof. S. Rao', avatar: 'https://i.pravatar.cc/40?img=12', title: 'DS Mentor' },
    { id: 'm2', name: 'Ponparkavi', avatar: 'https://i.pravatar.cc/40?img=47', title: 'Peer' }
  ],
  meetings: [
    { id: 'm_1', title: '1:1 - Resume Review', datetime: '2025-09-20 16:00', duration: '30m' },
    { id: 'm_2', title: 'Mock Interview Practice', datetime: '2025-09-22 10:30', duration: '45m' }
  ]
};
export default function SkillHierProfile({ user = sampleUser, isOwner = false }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [localUser, setLocalUser] = useState(user);

  function toggleFollow() {
    // replace with API call
    setIsFollowing(prev => !prev);
  }

  function handleSaveProfile(updated) {
    // replace with API update
    setLocalUser(prev => ({ ...prev, ...updated }));
    setEditOpen(false);
  }

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex items-center gap-6">
        <img src={localUser.avatar} alt="avatar" className="w-28 h-28 rounded-full object-cover border-2" />

        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">{localUser.name}</h1>
            <span className="text-sm text-slate-500">@{localUser.username}</span>
            <div className="ml-auto flex items-center gap-2">
              {!isOwner && (
                <button
                  onClick={toggleFollow}
                  className={`px-4 py-1 rounded-full border ${isFollowing ? 'bg-slate-100' : 'bg-indigo-600 text-white'}`}>
                  {isFollowing ? 'Following' : 'Follow'}
                </button>
              )}

              {/* settings only show for owner */}
              {isOwner && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditOpen(true)}
                    className="px-3 py-1 border rounded-md text-sm"
                  >
                    Edit Profile
                  </button>

                  <button title="Settings" className="p-2 rounded-md border">
                    {/* simple gear icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 2.6 17.88l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.3-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.12 2.6l.06.06a1.65 1.65 0 0 0 1.82.33H8.5A1.65 1.65 0 0 0 9.5 3.5V3a2 2 0 1 1 4 0v.09c.7 0 1.3.4 1.51 1a1.65 1.65 0 0 0 1.82.33l.06-.06A2 2 0 1 1 20 6.12l-.06.06a1.65 1.65 0 0 0-.33 1.82V8.5c0 .58.26 1.1.69 1.45.43.35.98.55 1.54.55H21a2 2 0 1 1 0 4h-.09c-.56 0-1.11.2-1.54.55-.43.35-.69.87-.69 1.45v.09c0 .58.26 1.1.69 1.45z" stroke="#334155" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                  </button>
                </div>
              )}
            </div>
          </div>

          <p className="mt-2 text-slate-600">{localUser.bio}</p>

          <div className="mt-4 flex items-center gap-6 text-sm text-slate-600">
            <div><strong className="text-slate-800">{localUser.followers}</strong> followers</div>
            <div><strong className="text-slate-800">{localUser.following}</strong> following</div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <section className="mt-6">
        <h3 className="text-md font-medium">Skills</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {localUser.skills.map(s => (
            <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
          ))}
        </div>
      </section>

      {/* Experience & Learned From */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-md font-medium">Experience Teaching</h3>
          <div className="mt-3 space-y-3">
            {localUser.experiences.map(exp => (
              <div key={exp.id} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{exp.title}</div>
                    <div className="text-xs text-slate-500">{exp.period}</div>
                  </div>
                </div>
                <p className="mt-2 text-sm text-slate-600">{exp.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-md font-medium">Learned From</h3>
          <div className="mt-3 space-y-3">
            {localUser.learnedFrom.map(m => (
              <div key={m.id} className="flex items-center gap-3 p-2 border rounded-lg">
                <img src={m.avatar} alt={m.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-xs text-slate-500">{m.title}</div>
                </div>
                <div className="ml-auto text-xs text-slate-500">Trusted</div>
              </div>
            ))}
          </div>
        </div>
      </div>
 {/* Meetings (private) */}
      {isOwner && (
        <section className="mt-6">
          <h3 className="text-md font-medium">Scheduled Meetings (Private)</h3>
          <div className="mt-3 space-y-2">
            {localUser.meetings.map(mt => (
              <div key={mt.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{mt.title}</div>
                  <div className="text-xs text-slate-500">{mt.datetime} • {mt.duration}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1 border rounded-md text-sm">Edit</button>
                  <button className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">Join</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Simple Edit Modal - local only */}
      {editOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-xl p-6 rounded-xl">
            <h4 className="text-lg font-semibold">Edit profile</h4>
            <div className="mt-4 grid grid-cols-1 gap-3">
              <label className="text-sm">Name</label>
              <input className="border p-2 rounded-md" defaultValue={localUser.name} id="_name" />
<label className="text-sm">Bio</label>
              <textarea className="border p-2 rounded-md" defaultValue={localUser.bio} id="_bio" />

              <div className="flex justify-end gap-2 mt-4">
                <button onClick={() => setEditOpen(false)} className="px-3 py-1 border rounded-md">Cancel</button>
                <button
                  onClick={() => handleSaveProfile({ name: document.getElementById('_name').value, bio: document.getElementById('_bio').value })}
                  className="px-4 py-1 rounded-md bg-indigo-600 text-white"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer actions */}
      <div className="mt-6 text-right text-xs text-slate-400">Profile UI — SkillHier (minimal, extensible)</div>
    </div>
  );
}