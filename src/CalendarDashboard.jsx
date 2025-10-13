import React, { useState, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
 import "./calendar.css";

export default function CalendarDashboard() {
  const calendarRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedDateInfo, setSelectedDateInfo] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);
  const [filterDate, setFilterDate] = useState("");
  const [sessions, setSessions] = useState([
    { id: "1", title: "React Basics - John", start: "2025-10-08T17:00:00", status: "accepted" },
    { id: "2", title: "Python Coaching - Mary", start: "2025-10-10T10:00:00", status: "declined" },
    { id: "3", title: "UI Design - Ethan", start: "2025-10-15T14:00:00", status: "finished" },
  ]);
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSession, setNewSession] = useState({ learner: "", subject: "", datetime: "" });

  const getEventColor = (status) => {
    switch (status) {
      case "accepted": return "#4c8bf5";
      case "declined": return "#e74c3c";
      case "finished": return "#95a5a6";
      case "ongoing": return "#16a34a";
      default: return "#16a34a";
    }
  };

  const displayedSessions = sessions
    .filter(s => !filterStatus || s.status === filterStatus)
    .filter(s => !filterDate || s.start.split("T")[0] === filterDate);

  const rejectedCount = sessions.filter(s => s.status === "declined").length;
  const finishedCount = sessions.filter(s => s.status === "finished").length;
  const ongoingCount = sessions.filter(s => s.status === "ongoing" || s.status === "accepted").length;

  const handleAddSession = (e) => {
    e.preventDefault();
    if (!newSession.learner || !newSession.subject || !newSession.datetime) return;

    const id = (sessions.length + 1).toString();
    const title = `${newSession.subject} - ${newSession.learner}`;
    const newEntry = { id, title, start: newSession.datetime, status: "ongoing" };

    setSessions(prev => [...prev, newEntry]);
    setNewSession({ learner: "", subject: "", datetime: "" });
    setShowAddModal(false);

    // Optional: navigate calendar to new session date
    const calendarApi = calendarRef.current.getApi();
    calendarApi.gotoDate(newEntry.start);
  };

  const handleDeleteSession = (id) => setSessions(prev => prev.filter(s => s.id !== id));

  const formatDateTime = (dateStr) => {
    const d = new Date(dateStr);
    const day = d.getDate();
    const month = d.toLocaleString("default", { month: "short" });
    const year = d.getFullYear();
    const time = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return `${day} ${month} ${year}, ${time}`;
  };

  const handleDateClick = (dateInfo) => {
    const dateStr = dateInfo.dateStr;
    const sessionsOnDate = sessions.filter(s => s.start.split("T")[0] === dateStr);
    if (sessionsOnDate.length === 0) return;
    const learners = [...new Set(sessionsOnDate.map(s => s.title.split(" - ")[1]))];
    const subjects = [...new Set(sessionsOnDate.map(s => s.title.split(" - ")[0]))];
    const statusCount = {
      finished: sessionsOnDate.filter(s => s.status === "finished").length,
      declined: sessionsOnDate.filter(s => s.status === "declined").length,
      ongoing: sessionsOnDate.filter(s => s.status === "ongoing" || s.status === "accepted").length,
    };
    setSelectedDateInfo({
      date: dateStr,
      totalSessions: sessionsOnDate.length,
      learners,
      subjects,
      statusCount
    });
  };

  return (
    <div className="dashboard">
      {/* Calendar Left */}
      <div className="calendar-section">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
          }}
          events={sessions.map(s => ({ ...s, color: getEventColor(s.status) }))}
          eventClick={(info) => setSelectedEvent({
            title: info.event.title,
            start: info.event.start,
            status: info.event.extendedProps.status,
          })}
          dateClick={handleDateClick}
          dayCellClassNames={(dateInfo) => {
            const hasSession = sessions.some(
              s => new Date(s.start).toDateString() === dateInfo.date.toDateString()
            );
            return hasSession ? "booked-day" : "empty-day";
          }}
          height="auto"
        />
      </div>

      {/* Sidebar Right */}
      <div className="sidebarz sdb">
        <div className="sidebarz-header">
          <h3>Kavi</h3>
          <img src="https://via.placeholder.com/40" alt="User" className="avatar"/>
        </div>

        <button className="add-btn" onClick={() => setShowAddModal(true)}>+ Add Session</button>

        <div style={{marginTop:'10px'}}>
          <label>Filter by Date:</label><br/>
          <input type="date" value={filterDate} onChange={e => setFilterDate(e.target.value)} />
          <button onClick={() => setFilterDate("")} style={{marginLeft:'5px'}} className="add-btn">Clear</button>
        </div>

        <h4>Sessions</h4>
        {displayedSessions.length === 0 ? <p>No sessions</p> :
          displayedSessions.map(s => (
            <div className="session-box" key={s.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div>
                <strong>{s.title.split(" - ")[0]}</strong> with {s.title.split(" - ")[1]}<br/>
                <small>{formatDateTime(s.start)}</small>
                <span className={`tag ${s.status}`} style={{marginLeft:'5px'}}>
                  {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
                </span>
              </div>
              <button onClick={() => handleDeleteSession(s.id)} style={{background:'#e74c3c', border:'none', color:'#fff', borderRadius:'4px', padding:'3px 6px', cursor:'pointer'}}>Delete</button>
            </div>
          ))
        }

        <h4>Stats</h4>
        <div className="stat-box">
          <div className="stat-item" onClick={() => setFilterStatus("declined")}>
            <strong>{rejectedCount}</strong><br/>Rejected
          </div>
          <div className="stat-item" onClick={() => setFilterStatus("finished")}>
            <strong>{finishedCount}</strong><br/>Finished
          </div>
          <div className="stat-item" onClick={() => setFilterStatus("ongoing")}>
            <strong>{ongoingCount}</strong><br/>Ongoing
          </div>
          <div className="stat-item" onClick={() => setFilterStatus(null)}>
            <strong>{sessions.length}</strong><br/>All
          </div>
        </div>
      </div>

      {/* Add Session Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Add New Session</h3>
            <form onSubmit={handleAddSession}>
              <div>
                <label>Learner Name:</label><br/>
                <input type="text" value={newSession.learner} onChange={e => setNewSession({...newSession, learner: e.target.value})} required/>
              </div>
              <div>
                <label>Subject/Topic:</label><br/>
                <input type="text" value={newSession.subject} onChange={e => setNewSession({...newSession, subject: e.target.value})} required/>
              </div>
              <div>
                <label>Date & Time:</label><br/>
                <input type="datetime-local" value={newSession.datetime} onChange={e => setNewSession({...newSession, datetime: e.target.value})} required/>
              </div>
              <div style={{marginTop:'10px'}}>
                <button type="submit">Add</button>
                <button type="button" onClick={()=>setShowAddModal(false)} style={{marginLeft:'10px'}}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
