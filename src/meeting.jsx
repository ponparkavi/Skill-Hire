import React, { useState } from 'react';
import './Meeting.css';
import { useNavigate } from 'react-router-dom';

const Meeting = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [isScheduling, setIsScheduling] = useState(false);
    const navigate = useNavigate();
  const [meetingForm, setMeetingForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    duration: 60,
    participants: []
  });

  // Mock data - in real app, this would come from API
  const meetings = {
    upcoming: [
      {
        id: 1,
        title: 'React Code Review',
        participant: 'Jane Smith',
        date: '2024-01-15',
        time: '14:00',
        duration: 60,
        type: 'mentoring'
      },
      {
        id: 2,
        title: 'Project Planning',
        participant: 'Mike Johnson',
        date: '2024-01-16',
        time: '10:30',
        duration: 90,
        type: 'collaboration'
      }
    ],
    past: [
      {
        id: 3,
        title: 'JavaScript Interview Prep',
        participant: 'Sarah Wilson',
        date: '2024-01-10',
        time: '15:00',
        duration: 45,
        type: 'interview',
        recording: true
      }
    ]
  };

  const handleJoinMeeting = (meetingId) => {
    // In real app, this would redirect to video call
    console.log('Joining meeting:', meetingId);
    alert(`Joining meeting ${meetingId}`);
  };

  const handleScheduleMeeting = () => {
    // In real app, this would make an API call
    console.log('Scheduling meeting:', meetingForm);
    alert('Meeting scheduled successfully!');
    setIsScheduling(false);
    setMeetingForm({
      title: '',
      description: '',
      date: '',
      time: '',
      duration: 60,
      participants: []
    });
  };

  const handleInputChange = (field, value) => {
    setMeetingForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="meeting-container">
      <div className="meeting-header">
        <h1>Meetings</h1>
        <p>Manage your scheduled sessions and meetings</p>
        <button 
          className="btn-primary schedule-btn"
          onClick={() => setIsScheduling(true)}
        >
          Schedule New Meeting
        </button>
      </div>

      <div className="meeting-tabs">
        <button 
          className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Meetings
        </button>
        <button 
          className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          Past Meetings
        </button>
      </div>

      {isScheduling ? (
        <div className="schedule-meeting-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Schedule New Meeting</h2>
              <button 
                className="close-btn"
                onClick={() => setIsScheduling(false)}
              >
                ×
              </button>
            </div>
            
            <div className="meeting-form">
              <div className="form-group">
                <label>Meeting Title</label>
                <input 
                  type="text"
                  value={meetingForm.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter meeting title"
                />
              </div>
              
              <div className="form-group">
                <label>Description</label>
                <textarea 
                  value={meetingForm.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Enter meeting description"
                  rows="3"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input 
                    type="date"
                    value={meetingForm.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <label>Time</label>
                  <input 
                    type="time"
                    value={meetingForm.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                  />
                </div>
                
                <div className="form-group">
                  <label>Duration (minutes)</label>
                  <select 
                    value={meetingForm.duration}
                    onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
                  >
                    <option value={30}>30 min</option>
                    <option value={60}>60 min</option>
                    <option value={90}>90 min</option>
                    <option value={120}>120 min</option>
                  </select>
                </div>
              </div>
              
              <div className="form-actions">
                <button 
                  className="btn-primary"
                  onClick={handleScheduleMeeting}
                  disabled={!meetingForm.title || !meetingForm.date || !meetingForm.time}
                >
                  Schedule Meeting
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => setIsScheduling(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="meetings-list">
          {meetings[activeTab].length === 0 ? (
            <div className="empty-state">
              <h3>No {activeTab} meetings</h3>
              <p>You don't have any {activeTab} meetings scheduled.</p>
              {activeTab === 'upcoming' && (
                <button 
                  className="btn-primary"
                  onClick={() => setIsScheduling(true)}
                >
                  Schedule Your First Meeting
                </button>
              )}
            </div>
          ) : (
            meetings[activeTab].map(meeting => (
              <div key={meeting.id} className="meeting-card">
                <div className="meeting-info">
                  <h3>{meeting.title}</h3>
                  <p className="meeting-participant">With: {meeting.participant}</p>
                  <div className="meeting-details">
                    <span className="meeting-date">
                      {formatDate(meeting.date)} at {meeting.time}
                    </span>
                    <span className="meeting-duration">{meeting.duration} min</span>
                    <span className={`meeting-type ${meeting.type}`}>
                      {meeting.type}
                    </span>
                  </div>
                </div>
                
                <div className="meeting-actions">
                  {activeTab === 'upcoming' ? (
                    <>
                      <button 
                        className="btn-primary"
                        onClick={() => handleJoinMeeting(meeting.id)}
                      >
                        Join Meeting
                      </button>
                      <button className="btn-secondary">
                        Reschedule
                      </button>
                      <button className="btn-secondary">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      {meeting.recording && (
                        <button className="btn-primary">
                          Watch Recording
                        </button>
                      )}
                      <button className="btn-secondary">
                        View Details
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {selectedMeeting && (
        <div className="meeting-detail-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Meeting Details</h2>
              <button 
                className="close-btn"
                onClick={() => setSelectedMeeting(null)}
              >
                ×
              </button>
            </div>
            {/* Meeting detail content would go here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Meeting;