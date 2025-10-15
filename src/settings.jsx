import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Settings.css";

const Settings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Full-stack developer with 5+ years of experience",
    skills: ["JavaScript", "React", "Node.js"],
    notifications: { email: true, push: true, sms: false },
    privacy: { profileVisibility: "public", showOnlineStatus: true },
    paymentMethods: [{ type: "credit card", last4: "4242", expiry: "12/24" }],
  });

  const handleInputChange = (section, field, value) => {
    setUserData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const handleSave = () => {
    console.log("Settings saved:", userData);
    alert("Settings saved successfully!");
    navigate("/profile"); // redirect after save
  };

  const addPaymentMethod = () => {
    alert("Add payment method functionality");
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account preferences and settings</p>
      </div>

      <div className="settings-content">
        {/* Sidebar Tabs */}
        <div className="settings-sidebar">
          {[
            "profile",
            "notifications",
            "privacy",
            "payments",
            "preferences",
            "help",
          ].map((tab) => (
            <button
              key={tab}
              className={`sidebar-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1).replace("_", " & ")}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="settings-main">
          {activeTab === "profile" && (
            <div className="settings-section">
              <h2>Profile Information</h2>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  value={userData.bio}
                  onChange={(e) =>
                    setUserData({ ...userData, bio: e.target.value })
                  }
                  rows="4"
                />
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="settings-section">
              <h2>Notification Preferences</h2>
              {Object.keys(userData.notifications).map((key) => (
                <div className="toggle-item" key={key}>
                  <span>
                    {key.charAt(0).toUpperCase() + key.slice(1)} Notifications
                  </span>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={userData.notifications[key]}
                      onChange={(e) =>
                        handleInputChange(
                          "notifications",
                          key,
                          e.target.checked
                        )
                      }
                    />
                    <span className="slider"></span>
                  </label>
                </div>
              ))}
            </div>
          )}

          {activeTab === "privacy" && (
            <div className="settings-section">
              <h2>Privacy & Security</h2>
              <div className="form-group">
                <label>Profile Visibility</label>
                <select
                  value={userData.privacy.profileVisibility}
                  onChange={(e) =>
                    handleInputChange(
                      "privacy",
                      "profileVisibility",
                      e.target.value
                    )
                  }
                >
                  <option value="public">Public</option>
                  <option value="connections">Connections Only</option>
                  <option value="private">Private</option>
                </select>
              </div>
              <div className="toggle-item">
                <span>Show Online Status</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={userData.privacy.showOnlineStatus}
                    onChange={(e) =>
                      handleInputChange(
                        "privacy",
                        "showOnlineStatus",
                        e.target.checked
                      )
                    }
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          )}

          {activeTab === "payments" && (
            <div className="settings-section">
              <h2>Payment Methods</h2>
              {userData.paymentMethods.map((method, idx) => (
                <div key={idx} className="payment-method">
                  <span>
                    {method.type.toUpperCase()} •••• {method.last4}
                  </span>
                  <span>Expires {method.expiry}</span>
                </div>
              ))}
              <button className="btn-primary" onClick={addPaymentMethod}>
                Add Payment Method
              </button>
            </div>
          )}

          {activeTab === "preferences" && (
            <div className="settings-section">
              <h2>Preferences</h2>
              <div className="form-group">
                <label>Language</label>
                <select>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="form-group">
                <label>Time Zone</label>
                <select>
                  <option>UTC-5 (Eastern Time)</option>
                  <option>UTC-8 (Pacific Time)</option>
                  <option>UTC+0 (GMT)</option>
                </select>
              </div>
            </div>
          )}

          {activeTab === "help" && (
            <div className="settings-section">
              <h2>Help & Support</h2>
              <button className="btn-secondary">Contact Support</button>
              <button className="btn-secondary">FAQ</button>
              <button className="btn-secondary">Report a Problem</button>
            </div>
          )}

          {/* Save / Cancel */}
          <div className="settings-actions">
            <button className="btn-primary" onClick={handleSave}>
              Save Changes
            </button>
            <button
              className="btn-secondary"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
