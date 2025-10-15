// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import './ProfilePage.css';

// // const SkillHierProfile = () => {
// //   // Sample user data - current logged in user
// //   const [user, setUser] = useState({
// //     name: "John Doe",
// //     username: "@johndoe",
// //     bio: "Full Stack Developer | React & Node.js Expert | Tech Enthusiast | Passionate about building amazing user experiences",
// //     followers: "1.2K",
// //     following: 345,
// //     posts: 56,
// //     rating: 4.8,
// //     reviews: 128,
// //     isActive: true,
// //     isCurrentUser: true, // This indicates it's the profile owner
// //     profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
// //     bannerImage: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1200&h=400&fit=crop"
// //   });

// //   const [isEditing, setIsEditing] = useState(false);
// //   const [editForm, setEditForm] = useState({
// //     name: user.name,
// //     bio: user.bio
// //   });

// //   // Sample posts data
// //   const userPosts = [
// //     { id: 1, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=300&fit=crop", likes: 45, comments: 12 },
// //     { id: 2, image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=300&h=300&fit=crop", likes: 23, comments: 5 },
// //     { id: 3, image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=300&fit=crop", likes: 67, comments: 8 },
// //     { id: 4, image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop", likes: 34, comments: 3 },
// //     { id: 5, image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop", likes: 89, comments: 15 },
// //     { id: 6, image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=300&fit=crop", likes: 12, comments: 2 }
// //   ];

// //   const handleEdit = () => {
// //     setIsEditing(true);
// //   };

// //   const handleSave = () => {
// //     setUser({
// //       ...user,
// //       name: editForm.name,
// //       bio: editForm.bio
// //     });
// //     setIsEditing(false);
// //   };

// //   const handleCancel = () => {
// //     setEditForm({
// //       name: user.name,
// //       bio: user.bio
// //     });
// //     setIsEditing(false);
// //   };

// //   const handleChange = (e) => {
// //     setEditForm({
// //       ...editForm,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   // Function to render appropriate action buttons based on whether it's current user or other user
// //   const renderActionButtons = () => {
// //     if (user.isCurrentUser) {
// //       // Current user's profile - Show Edit Profile and Create Post buttons
// //       return (
// //         <div className="action-buttons-group">
// //           <button className="facebook-btn facebook-btn-primary" onClick={handleEdit}>
// //             <span className="btn-icon">✏</span>
// //             Edit Profile
// //           </button>
// //           <Link to="/post" className="facebook-btn facebook-btn-secondary">
// //             <span className="btn-icon">➕</span>
// //             Create Post
// //           </Link>
// //         </div>
// //       );
// //     } else {
// //       // Other user's profile - Show Follow and Message buttons
// //       return (
// //         <div className="action-buttons-group">
// //           <button className="facebook-btn facebook-btn-primary">
// //             <span className="btn-icon">👤</span>
// //             Follow
// //           </button>
// //           <button className="facebook-btn facebook-btn-secondary">
// //             <span className="btn-icon">💬</span>
// //             Message
// //           </button>
// //         </div>
// //       );
// //     }
// //   };

// //   return (
// //     <div className="profile-container">
// //       {/* Banner Section - Fixed Overlay */}
// //       <div className="banner-section">
// //         <div className="banner-image-container">
// //           <img
// //             src={user.bannerImage}
// //             alt="Profile banner"
// //             className="banner-image"
// //           />
// //           <div className="banner-overlay"></div>
// //         </div>

// //         {/* Profile Picture - Perfectly Overlaid on Banner */}
// //         <div className="profile-picture-overlay">
// //           <div className="profile-picture-wrapper">
// //             <img
// //               src={user.profilePicture}
// //               alt="Profile"
// //               className="profile-picture-main"
// //             />
// //             {/* Active Status Indicator */}
// //             {user.isActive && (
// //               <div className="active-status-badge">
// //                 <div className="active-pulse"></div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Profile Info Section */}
// //       <div className="profile-info-section">
// //         {/* Name and Username */}
// //         <div className="name-section">
// //           {isEditing ? (
// //             <input
// //               type="text"
// //               name="name"
// //               value={editForm.name}
// //               onChange={handleChange}
// //               className="edit-input"
// //               placeholder="Enter your name"
// //             />
// //           ) : (
// //             <h1 className="user-name">{user.name}</h1>
// //           )}
// //           <p className="user-username">{user.username}</p>
// //         </div>

// //         {/* Bio Section */}
// //         <div className="bio-section">
// //           {isEditing ? (
// //             <textarea
// //               name="bio"
// //               value={editForm.bio}
// //               onChange={handleChange}
// //               className="edit-textarea"
// //               rows="3"
// //               placeholder="Tell something about yourself..."
// //             />
// //           ) : (
// //             <p className="user-bio">{user.bio}</p>
// //           )}
// //         </div>

// //         {/* Stats Section */}
// //         <div className="stats-section-main">
// //           <div className="stat-item">
// //             <span className="stat-number">{user.posts}</span>
// //             <span className="stat-label">Posts</span>
// //           </div>
// //           <div className="stat-item">
// //             <span className="stat-number">{user.followers}</span>
// //             <span className="stat-label">Followers</span>
// //           </div>
// //           <div className="stat-item">
// //             <span className="stat-number">{user.following}</span>
// //             <span className="stat-label">Following</span>
// //           </div>
// //         </div>

// //         {/* Rating Section */}
// //         <div className="rating-section-main">
// //           <div className="rating-display-main">
// //             <div className="stars-main">
// //               {"★".repeat(5).split('').map((star, index) => (
// //                 <span
// //                   key={index}
// //                   className={index < Math.floor(user.rating) ? "star-main filled" : "star-main"}
// //                 >
// //                   {star}
// //                 </span>
// //               ))}
// //             </div>
// //             <span className="rating-value-main">{user.rating}</span>
// //             <span className="rating-count-main">({user.reviews} reviews)</span>
// //           </div>
// //         </div>

// //         {/* Action Buttons - Dynamic based on user */}
// //         <div className="action-buttons-main">
// //           {isEditing ? (
// //             <div className="edit-buttons-main">
// //               <button className="action-btn action-btn-primary" onClick={handleSave}>
// //                 Save Changes
// //               </button>
// //               <button className="action-btn action-btn-secondary" onClick={handleCancel}>
// //                 Cancel
// //               </button>
// //             </div>
// //           ) : (
// //             renderActionButtons()
// //           )}
// //         </div>
// //       </div>

// //       {/* Posts Grid Section */}
// //       <div className="posts-section-main">
// //         <div className="posts-header-main">
// //           <h2 className="posts-title-main">Posts</h2>
// //           {user.isCurrentUser && (
// //             <Link to="/post" className="create-post-link">
// //               <span className="create-post-icon">➕</span>
// //               Create New Post
// //             </Link>
// //           )}
// //         </div>
// //         {userPosts.length > 0 ? (
// //           <div className="posts-grid-main">
// //             {userPosts.map(post => (
// //               <div key={post.id} className="post-item-main">
// //                 <img
// //                   src={post.image}
// //                   alt={`Post ${post.id}`}
// //                   className="post-image-main"
// //                 />
// //                 <div className="post-overlay-main">
// //                   <div className="post-stats-main">
// //                     <span className="post-stat-main">
// //                       <span className="stat-icon-main">❤</span>
// //                       {post.likes}
// //                     </span>
// //                     <span className="post-stat-main">
// //                       <span className="stat-icon-main">💬</span>
// //                       {post.comments}
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="no-posts">
// //             <div className="no-posts-icon">📷</div>
// //             <h3>No Posts Yet</h3>
// //             <p>Share your first moment with the community!</p>
// //             {user.isCurrentUser && (
// //               <Link to="/post" className="action-btn action-btn-primary">
// //                 Create Your First Post
// //               </Link>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SkillHierProfile;

// //=====================================================================================001==

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './ProfilePage.css';

// const SkillHierProfile = () => {
//   // Sample user data - current logged in user
//   const [user, setUser] = useState({
//     name: "John Doe",
//     username: "@johndoe",
//     bio: "Full Stack Developer | React & Node.js Expert | Tech Enthusiast | Passionate about building amazing user experiences",
//     followers: "1.2K",
//     following: 345,
//     posts: 56,
//     rating: 4.8,
//     reviews: 128,
//     isActive: true,
//     isCurrentUser: true, // This indicates it's the profile owner
//     profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
//     bannerImage: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1200&h=400&fit=crop"
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState({
//     name: user.name,
//     bio: user.bio
//   });

//   // Sample posts data
//   const userPosts = [
//     { id: 1, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=300&fit=crop", likes: 45, comments: 12 },
//     { id: 2, image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=300&h=300&fit=crop", likes: 23, comments: 5 },
//     { id: 3, image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=300&fit=crop", likes: 67, comments: 8 },
//     { id: 4, image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop", likes: 34, comments: 3 },
//     { id: 5, image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop", likes: 89, comments: 15 },
//     { id: 6, image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=300&fit=crop", likes: 12, comments: 2 }
//   ];

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setUser({
//       ...user,
//       name: editForm.name,
//       bio: editForm.bio
//     });
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setEditForm({
//       name: user.name,
//       bio: user.bio
//     });
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     setEditForm({
//       ...editForm,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Function to render appropriate action buttons based on whether it's current user or other user
//   const renderActionButtons = () => {
//     if (user.isCurrentUser) {
//       // Current user's profile - Show only Edit Profile button
//       return (
//         <div className="action-buttons-group">
//           <button className="facebook-btn facebook-btn-primary" onClick={handleEdit}>
//             <span className="btn-icon">✏</span>
//             Edit Profile
//           </button>
//         </div>
//       );
//     } else {
//       // Other user's profile - Show Follow, Message, and Following Request buttons
//       return (
//         <div className="action-buttons-group">
//           <button className="facebook-btn facebook-btn-primary">
//             <span className="btn-icon">👤</span>
//             Follow
//           </button>
//           <button className="facebook-btn facebook-btn-secondary">
//             <span className="btn-icon">💬</span>
//             Message
//           </button>
//           <button className="facebook-btn facebook-btn-request">
//             <span className="btn-icon">📩</span>
//             Following Request
//           </button>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="profile-container">
//       {/* Banner Section - Fixed Overlay */}
//       <div className="banner-section">
//         <div className="banner-image-container">
//           <img
//             src={user.bannerImage}
//             alt="Profile banner"
//             className="banner-image"
//           />
//           <div className="banner-overlay"></div>
//         </div>

//         {/* Profile Picture - Perfectly Overlaid on Banner */}
//         <div className="profile-picture-overlay">
//           <div className="profile-picture-wrapper">
//             <img
//               src={user.profilePicture}
//               alt="Profile"
//               className="profile-picture-main"
//             />
//             {/* Active Status Indicator */}
//             {user.isActive && (
//               <div className="active-status-badge">
//                 <div className="active-pulse"></div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Profile Info Section */}
//       <div className="profile-info-section">
//         {/* Name and Username */}
//         <div className="name-section">
//           {isEditing ? (
//             <input
//               type="text"
//               name="name"
//               value={editForm.name}
//               onChange={handleChange}
//               className="edit-input"
//               placeholder="Enter your name"
//             />
//           ) : (
//             <h1 className="user-name">{user.name}</h1>
//           )}
//           <p className="user-username">{user.username}</p>
//         </div>

//         {/* Bio Section */}
//         <div className="bio-section">
//           {isEditing ? (
//             <textarea
//               name="bio"
//               value={editForm.bio}
//               onChange={handleChange}
//               className="edit-textarea"
//               rows="3"
//               placeholder="Tell something about yourself..."
//             />
//           ) : (
//             <p className="user-bio">{user.bio}</p>
//           )}
//         </div>

//         {/* Stats Section */}
//         <div className="stats-section-main">
//           <div className="stat-item">
//             <span className="stat-number">{user.posts}</span>
//             <span className="stat-label">Posts</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">{user.followers}</span>
//             <span className="stat-label">Followers</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-number">{user.following}</span>
//             <span className="stat-label">Following</span>
//           </div>
//         </div>

//         {/* Rating Section */}
//         <div className="rating-section-main">
//           <div className="rating-display-main">
//             <div className="stars-main">
//               {"★".repeat(5).split('').map((star, index) => (
//                 <span
//                   key={index}
//                   className={index < Math.floor(user.rating) ? "star-main filled" : "star-main"}
//                 >
//                   {star}
//                 </span>
//               ))}
//             </div>
//             <span className="rating-value-main">{user.rating}</span>
//             <span className="rating-count-main">({user.reviews} reviews)</span>
//           </div>
//         </div>

//         {/* Action Buttons - Dynamic based on user */}
//         <div className="action-buttons-main">
//           {isEditing ? (
//             <div className="edit-buttons-main">
//               <button className="action-btn action-btn-primary" onClick={handleSave}>
//                 Save Changes
//               </button>
//               <button className="action-btn action-btn-secondary" onClick={handleCancel}>
//                 Cancel
//               </button>
//             </div>
//           ) : (
//             renderActionButtons()
//           )}
//         </div>
//       </div>

//       {/* Posts Grid Section */}
//       <div className="posts-section-main">
//         <div className="posts-header-main">
//           <h2 className="posts-title-main">Posts</h2>
//           {user.isCurrentUser && (
//             <Link to="/post" className="create-post-link">
//               <span className="create-post-icon">➕</span>
//               Create Post
//             </Link>
//           )}
//         </div>
//         {userPosts.length > 0 ? (
//           <div className="posts-grid-main">
//             {userPosts.map(post => (
//               <div key={post.id} className="post-item-main">
//                 <img
//                   src={post.image}
//                   alt={`Post ${post.id}`}
//                   className="post-image-main"
//                 />
//                 <div className="post-overlay-main">
//                   <div className="post-stats-main">
//                     <span className="post-stat-main">
//                       <span className="stat-icon-main">❤</span>
//                       {post.likes}
//                     </span>
//                     <span className="post-stat-main">
//                       <span className="stat-icon-main">💬</span>
//                       {post.comments}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="no-posts">
//             <div className="no-posts-icon">📷</div>
//             <h3>No Posts Yet</h3>
//             <p>Share your first moment with the community!</p>
//             {user.isCurrentUser && (
//               <Link to="/post" className="action-btn action-btn-primary">
//                 Create Your First Post
//               </Link>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SkillHierProfile;

//=====code run: edit profile works=============================002====================

// import React, { useState } from 'react';
// import './ProfilePage.css';

// const SkillHierProfile = () => {
//   // Sample user data - in real app, this would come from backend
//   const [user, setUser] = useState({
//     name: "John Doe",
//     username: "@johndoe",
//     bio: "Full Stack Developer | React & Node.js Expert | Tech Enthusiast | Passionate about building amazing user experiences",
//     followers: "1.2K",
//     following: 345,
//     posts: 56,
//     rating: 4.8,
//     reviews: 128,
//     isActive: true,
//     profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//     bannerImage: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1200&h=400&fit=crop",
//     isFollowing: false, // Whether the current user is following this profile
//     isOwnProfile: false // Whether this is the current user's own profile
//   });

//   const [isEditing, setIsEditing] = useState(false);
//   const [editForm, setEditForm] = useState({
//     name: user.name,
//     bio: user.bio
//   });

//   // Sample posts data
//   const userPosts = [
//     { id: 1, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=300&fit=crop", likes: 45, comments: 12 },
//     { id: 2, image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=300&h=300&fit=crop", likes: 23, comments: 5 },
//     { id: 3, image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=300&h=300&fit=crop", likes: 67, comments: 8 },
//     { id: 4, image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop", likes: 34, comments: 3 },
//     { id: 5, image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=300&fit=crop", likes: 89, comments: 15 },
//     { id: 6, image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300&h=300&fit=crop", likes: 12, comments: 2 }
//   ];

//   // Toggle follow/unfollow
//   const handleFollowToggle = () => {
//     setUser(prevUser => ({
//       ...prevUser,
//       isFollowing: !prevUser.isFollowing,
//       followers: prevUser.isFollowing ? "1.2K" : "1.3K" // Simulate follower count change
//     }));
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setUser({
//       ...user,
//       name: editForm.name,
//       bio: editForm.bio
//     });
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     setEditForm({
//       name: user.name,
//       bio: user.bio
//     });
//     setIsEditing(false);
//   };

//   const handleChange = (e) => {
//     setEditForm({
//       ...editForm,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Render action buttons to avoid deep nested JSX ternaries in the return
//   const renderFacebookActionButtons = () => {
//     if (isEditing) {
//       return (
//         <div className="edit-buttons">
//           <button className="facebook-btn facebook-btn-primary" onClick={handleSave}>
//             Save Changes
//           </button>
//           <button className="facebook-btn facebook-btn-secondary" onClick={handleCancel}>
//             Cancel
//           </button>
//         </div>
//       );
//     }

//     if (user.isOwnProfile) {
//       return (
//         <div className="action-buttons-group">
//           <button className="facebook-btn facebook-btn-secondary" onClick={handleEdit}>
//             <span className="btn-icon">✏</span>
//             Edit Profile
//           </button>
//           <button className="facebook-btn facebook-btn-secondary">
//             <span className="btn-icon">⚙</span>
//             Settings
//           </button>
//         </div>
//       );
//     }

//     return (
//       <div className="action-buttons-group">
//         <button className="facebook-btn facebook-btn-primary">
//           <span className="btn-icon">💬</span>
//           Message
//         </button>
//         <button
//           className={`facebook-btn ${user.isFollowing ? 'facebook-btn-secondary' : 'facebook-btn-primary'}`}
//           onClick={handleFollowToggle}
//         >
//           <span className="btn-icon">{user.isFollowing ? '✓' : '➕'}</span>
//           {user.isFollowing ? 'Following' : 'Follow'}
//         </button>
//         <button className="facebook-btn facebook-btn-secondary">
//           <span className="btn-icon">🔔</span>
//           Notifications
//         </button>
//       </div>
//     );
//   };

//   // Function to simulate viewing someone else's profile
//   const viewOtherUserProfile = () => {
//     setUser({
//       name: "Sarah Johnson",
//       username: "@sarahj",
//       bio: "UX/UI Designer | Creative Director | Love creating beautiful and functional designs",
//       followers: "2.4K",
//       following: 189,
//       posts: 124,
//       rating: 4.9,
//       reviews: 256,
//       isActive: true,
//       profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
//       bannerImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=400&fit=crop",
//       isFollowing: false,
//       isOwnProfile: false
//     });
//   };

//   // Function to simulate viewing own profile
//   const viewOwnProfile = () => {
//     setUser({
//       name: "John Doe",
//       username: "@johndoe",
//       bio: "Full Stack Developer | React & Node.js Expert | Tech Enthusiast | Passionate about building amazing user experiences",
//       followers: "1.2K",
//       following: 345,
//       posts: 56,
//       rating: 4.8,
//       reviews: 128,
//       isActive: true,
//       profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//       bannerImage: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1200&h=400&fit=crop",
//       isFollowing: false,
//       isOwnProfile: true
//     });
//   };

//   return (
//     <div className="profile-container">
//       {/* Demo Switcher - For testing different user perspectives */}
//       <div className="profile-switcher">
//         <button className="switcher-btn" onClick={viewOwnProfile}>
//           View My Profile
//         </button>
//         <button className="switcher-btn" onClick={viewOtherUserProfile}>
//           View Sarah's Profile
//         </button>
//       </div>

//       {/* Banner Section - Facebook Style */}
//       <div className="banner-section">
//         <div className="banner-image-container">
//           <img
//             src={user.bannerImage}
//             alt="Profile banner"
//             className="banner-image"
//           />
//           <div className="banner-overlay"></div>
//         </div>

//         {/* Facebook Style Profile Picture Container */}
//         <div className="facebook-profile-container">
//           <div className="profile-picture-wrapper">
//             <img
//               src={user.profilePicture}
//               alt="Profile"
//               className="facebook-profile-picture"
//             />
//             {/* Active Status Indicator - Facebook Style */}
//             {user.isActive && (
//               <div className="facebook-active-status">
//                 <div className="active-indicator"></div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Profile Info Section */}
//       <div className="profile-info-section">
//         {/* Name and Username */}
//         <div className="name-section">
//           {isEditing ? (
//             <input
//               type="text"
//               name="name"
//               value={editForm.name}
//               onChange={handleChange}
//               className="edit-input"
//               placeholder="Enter your name"
//             />
//           ) : (
//             <h1 className="user-name">{user.name}</h1>
//           )}
//           <p className="user-username">{user.username}</p>
//         </div>

//         {/* Bio Section */}
//         <div className="bio-section">
//           {isEditing ? (
//             <textarea
//               name="bio"
//               value={editForm.bio}
//               onChange={handleChange}
//               className="edit-textarea"
//               rows="3"
//               placeholder="Tell something about yourself..."
//             />
//           ) : (
//             <p className="user-bio">{user.bio}</p>
//           )}
//         </div>

//         {/* Stats Section - Facebook Style */}
//         <div className="facebook-stats-section">
//           <div className="facebook-stat">
//             <span className="facebook-stat-number">{user.posts}</span>
//             <span className="facebook-stat-label">Posts</span>
//           </div>
//           <div className="facebook-stat">
//             <span className="facebook-stat-number">{user.followers}</span>
//             <span className="facebook-stat-label">Followers</span>
//           </div>
//           <div className="facebook-stat">
//             <span className="facebook-stat-number">{user.following}</span>
//             <span className="facebook-stat-label">Following</span>
//           </div>
//         </div>

//         {/* Rating Section */}
//         <div className="rating-section">
//           <div className="rating-display">
//             <div className="stars">
//               {"★".repeat(5).split('').map((star, index) => (
//                 <span
//                   key={index}
//                   className={index < Math.floor(user.rating) ? "star filled" : "star"}
//                 >
//                   {star}
//                 </span>
//               ))}
//             </div>
//             <span className="rating-value">{user.rating}</span>
//             <span className="rating-count">({user.reviews} reviews)</span>
//           </div>
//         </div>

//         {/* Action Buttons - Different for own profile vs other users */}
//         <div className="facebook-action-buttons">
//           {renderFacebookActionButtons()}
//         </div>

//         {/* Follow Status for Other Users */}
//         {!user.isOwnProfile && (
//           <div className="follow-status">
//             {user.isFollowing ? (
//               <div className="following-indicator">
//                 <span className="following-text">✓ Following</span>
//                 <button className="unfollow-btn" onClick={handleFollowToggle}>
//                   Unfollow
//                 </button>
//               </div>
//             ) : (
//               <div className="not-following-indicator">
//                 <span className="not-following-text">Not following</span>
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Posts Grid Section - Instagram Style */}
//       <div className="posts-section">
//         <div className="posts-header">
//           <h2 className="posts-title">Posts</h2>
//           <div className="posts-filter">
//             <button className="filter-btn active">All Posts</button>
//             <button className="filter-btn">Photos</button>
//             <button className="filter-btn">Videos</button>
//           </div>
//         </div>
//         <div className="instagram-posts-grid">
//           {userPosts.map(post => (
//             <div key={post.id} className="instagram-post-item">
//               <img
//                 src={post.image}
//                 alt={`Post ${post.id}`}
//                 className="post-image"
//               />
//               <div className="post-overlay">
//                 <div className="post-stats">
//                   <span className="post-stat">
//                     <span className="stat-icon">❤</span>
//                     {post.likes}
//                   </span>
//                   <span className="post-stat">
//                     <span className="stat-icon">💬</span>
//                     {post.comments}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillHierProfile;

// //=======code run: follow,unfollow with logo , update ==============003====================

// import React, { useState } from 'react';
// import './ProfilePage.css';
// import PostCreate from './PostCreate';

// const SkillHierProfile = () => {
//   const [user, setUser] = useState({
//     name: "John Doe",
//     username: "@johndoe",
//     bio: "Full Stack Developer | React & Node.js Expert | Tech Enthusiast",
//     followers: "1.2K",
//     following: 345,
//     posts: 56,
//     rating: 4.8,
//     reviews: 128,
//     isActive: true,
//     profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
//     bannerImage: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1200&h=400&fit=crop",
//     isFollowing: false,
//     isOwnProfile: true
//   });

//   // 🔥 Posts state
//   const [userPosts, setUserPosts] = useState([
//     { id: 1, image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=300&fit=crop", likes: 45, comments: 12, type: "photo" },
//     { id: 2, image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=300&h=300&fit=crop", likes: 23, comments: 5, type: "photo" },
//     { id: 3, image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop", likes: 12, comments: 2, type: "video" },
//   ]);

//   const [filter, setFilter] = useState("all");
//   const [showCreatePost, setShowCreatePost] = useState(false);

//   // Filter posts
//   const filteredPosts = userPosts.filter(post => {
//     if (filter === "all") return true;
//     return post.type === filter;
//   });

//   // Add new post
//   const handleAddPost = (newPost) => {
//     setUserPosts(prev => [newPost, ...prev]);
//     setShowCreatePost(false);
//   };

//   return (
//     <div className="profile-container">
//       {/* Banner Section */}
//       <div className="banner-section">
//         <div className="banner-image-container">
//           <img src={user.bannerImage} alt="Profile banner" className="banner-image" />
//           <div className="banner-overlay"></div>
//         </div>
//         <div className="facebook-profile-container">
//           <div className="profile-picture-wrapper">
//             <img src={user.profilePicture} alt="Profile" className="facebook-profile-picture" />
//             {user.isActive && <div className="facebook-active-status"><div className="active-indicator"></div></div>}
//           </div>
//         </div>
//       </div>

//       {/* Profile Info */}
//       <div className="profile-info-section">
//         <h1 className="user-name">{user.name}</h1>
//         <p className="user-username">{user.username}</p>
//         <p className="user-bio">{user.bio}</p>

//         <div className="facebook-stats-section">
//           <div className="facebook-stat">
//             <span className="facebook-stat-number">{userPosts.length}</span>
//             <span className="facebook-stat-label">Posts</span>
//           </div>
//           <div className="facebook-stat">
//             <span className="facebook-stat-number">{user.followers}</span>
//             <span className="facebook-stat-label">Followers</span>
//           </div>
//           <div className="facebook-stat">
//             <span className="facebook-stat-number">{user.following}</span>
//             <span className="facebook-stat-label">Following</span>
//           </div>
//         </div>

//         {/* 👇 Create Post Button */}
//         {user.isOwnProfile && (
//           <div className="create-post-container">
//             <button className="facebook-btn facebook-btn-primary" onClick={() => setShowCreatePost(true)}>
//               ➕ Create Post
//             </button>
//           </div>
//         )}
//       </div>

//       {/* 🧩 Filter Buttons */}
//       <div className="posts-section">
//         <div className="posts-header">
//           <h2 className="posts-title">Posts</h2>
//           <div className="posts-filter">
//             <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
//             <button className={`filter-btn ${filter === "photo" ? "active" : ""}`} onClick={() => setFilter("photo")}>Photos</button>
//             <button className={`filter-btn ${filter === "video" ? "active" : ""}`} onClick={() => setFilter("video")}>Videos</button>
//           </div>
//         </div>

//         {/* 🖼️ Filtered Posts Grid */}
//         <div className="instagram-posts-grid">
//           {filteredPosts.length > 0 ? (
//             filteredPosts.map(post => (
//               <div key={post.id} className="instagram-post-item">
//                 <img src={post.image} alt={`Post ${post.id}`} className="post-image" />
//                 <div className="post-overlay">
//                   <div className="post-stats">
//                     <span className="post-stat">❤ {post.likes}</span>
//                     <span className="post-stat">💬 {post.comments}</span>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="no-posts">No posts found</p>
//           )}
//         </div>
//       </div>

//       {/* 🧩 Create Post Modal */}
//       {showCreatePost && (
//         <PostCreate onClose={() => setShowCreatePost(false)} onAddPost={handleAddPost} />
//       )}
//     </div>
//   );
// };

// export default SkillHierProfile;

// //=======error: 'PostCreate' is not defined  react/jsx-no-undef=====================004=====

// import React, { useState } from "react";
// import "./ProfilePage.css";

// const SkillHierProfile = () => {
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [followers, setFollowers] = useState(12500);
//   const [following, setFollowing] = useState(500);
//   const [posts, setPosts] = useState([
//     "/assets/post1.jpg",
//     "/assets/post2.jpg",
//     "/assets/post3.jpg",
//     "/assets/post4.jpg",
//     "/assets/post5.jpg",
//     "/assets/post6.jpg",
//   ]);

//   // Handle Follow/Unfollow
//   const handleFollow = () => {
//     if (isFollowing) {
//       setFollowers(followers - 1);
//     } else {
//       setFollowers(followers + 1);
//     }
//     setIsFollowing(!isFollowing);
//   };

//   // Handle Post Upload
//   const handleAddPost = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const newImage = URL.createObjectURL(file);
//       setPosts([newImage, ...posts]);
//     }
//   };

//   return (
//     <div className="profile-container">
//       {/* Banner Section */}
//       <div className="banner-section">
//         <img
//           src="/assets/mountain-banner.jpg"
//           alt="Banner"
//           className="banner-img"
//         />
//       </div>

//       {/* Profile Section */}
//       <div className="profile-info">
//         <img src="/assets/profile-pic.jpg" alt="Profile" className="profile-pic" />
//         <h2>Jane Doe</h2>
//         <p className="username">@janedoe_adventures</p>
//         <p className="bio">
//           Outdoor enthusiast, photographer, and world traveler. Sharing my
//           journeys one post at a time.
//         </p>

//         {/* Stats */}
//         <div className="stats">
//           <button
//             className={`follow-btn ${isFollowing ? "following" : ""}`}
//             onClick={handleFollow}
//           >
//             {isFollowing ? "Following" : "Follow"}
//           </button>

//           <div className="stats-box">
//             <strong>{followers.toLocaleString()}</strong>
//             <span>Followers</span>
//           </div>
//           <div className="stats-box">
//             <strong>{following}</strong>
//             <span>Following</span>
//           </div>
//           <div className="stats-box">
//             <strong>{posts.length}</strong>
//             <span>Posts</span>
//           </div>
//         </div>

//         <div className="rating">
//           ⭐ 4.8 Rating <span>(1.2K Reviews)</span>
//         </div>

//         {/* Create Post Button */}
//         <div className="create-post">
//           <label htmlFor="post-upload" className="upload-label">
//             ➕ Create Post
//           </label>
//           <input
//             type="file"
//             id="post-upload"
//             accept="image/*"
//             onChange={handleAddPost}
//           />
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="gallery">
//         {posts.map((src, index) => (
//           <img key={index} src={src} alt={`Post ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillHierProfile;

//===================================================================005====================

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ProfilePage.css";

// const SkillHierProfile = ({ posts, setPosts }) => {
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [followers, setFollowers] = useState(12500);
//   const [following, setFollowing] = useState(500);
//   const navigate = useNavigate();

//   const handleFollow = () => {
//     if (isFollowing) setFollowers(followers - 1);
//     else setFollowers(followers + 1);
//     setIsFollowing(!isFollowing);
//   };

//   return (
//     <div className="profile-container desktop-view">
//       <div className="banner-section">
//         <img src="/assets/mountain-banner.jpg" alt="Banner" className="banner-img" />
//       </div>

//       <div className="profile-info">
//         <img src="/assets/profile-pic.jpg" alt="Profile" className="profile-pic" />
//         <h2>Jane Doe</h2>
//         <p className="username">@janedoe_adventures</p>
//         <p className="bio">
//           Outdoor enthusiast, photographer, and world traveler. Sharing my journeys one post at a time.
//         </p>

//         <div className="stats">
//           <button
//             className={`follow-btn ${isFollowing ? "following" : ""}`}
//             onClick={handleFollow}
//           >
//             {isFollowing ? "Following" : "Follow"}
//           </button>

//           <div className="stats-box">
//             <strong>{followers.toLocaleString()}</strong>
//             <span>Followers</span>
//           </div>
//           <div className="stats-box">
//             <strong>{following}</strong>
//             <span>Following</span>
//           </div>
//           <div className="stats-box">
//             <strong>{posts.length}</strong>
//             <span>Posts</span>
//           </div>
//         </div>

//         <div className="rating">
//           ⭐ 4.8 Rating <span>(1.2K Reviews)</span>
//         </div>

//         <div className="create-post">
//           <button className="upload-label" onClick={() => navigate("/create-post")}>
//             ➕ Create Post
//           </button>
//         </div>
//       </div>

//       <div className="gallery">
//         {posts.map((src, index) => (
//           <img key={index} src={src} alt={`Post ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SkillHierProfile;

//========================================================================006==================

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ProfilePage.css";

// const SkillHierProfile = ({ posts = [], setPosts = () => {} }) => {
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [followers, setFollowers] = useState(12500);
//   const [following, setFollowing] = useState(500);
//   const navigate = useNavigate();

//   // Handle follow/unfollow
//   const handleFollow = () => {
//     if (isFollowing) {
//       setFollowers((prev) => prev - 1);
//     } else {
//       setFollowers((prev) => prev + 1);
//     }
//     setIsFollowing(!isFollowing);
//   };

//   return (
//     <div className="profile-container desktop-view">
//       {/* Banner Section */}
//       <div className="banner-section">
//         <img
//           src="/assets/mountain-banner.jpg"
//           alt="Banner"
//           className="banner-img"
//         />
//       </div>

//       {/* Profile Section */}
//       <div className="profile-info">
//         <img
//           src="/assets/profile-pic.jpg"
//           alt="Profile"
//           className="profile-pic"
//         />
//         <h2 className="profile-name">Jane Doe</h2>
//         <p className="username">@janedoe_adventures</p>

//         <p className="bio">
//           Outdoor enthusiast, photographer, and world traveler. Sharing my
//           journeys one post at a time.
//         </p>

//         {/* Stats */}
//         <div className="stats">
//           <button
//             className={`follow-btn ${isFollowing ? "following" : ""}`}
//             onClick={handleFollow}
//           >
//             {isFollowing ? "Following" : "Follow"}
//           </button>

//           <div className="stats-box">
//             <strong>{followers.toLocaleString()}</strong>
//             <span>Followers</span>
//           </div>

//           <div className="stats-box">
//             <strong>{following}</strong>
//             <span>Following</span>
//           </div>

//           <div className="stats-box">
//             <strong>{posts?.length || 0}</strong>
//             <span>Posts</span>
//           </div>
//         </div>

//         <div className="rating">
//           ⭐ 4.8 Rating <span>(1.2K Reviews)</span>
//         </div>

//         {/* Create Post Button */}
//         <div className="create-post">
//           <button
//             className="upload-label"
//             onClick={() => navigate("/post")}
//           >
//             ➕ Create Post
//           </button>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <div className="gallery">
//         {posts.length > 0 ? (
//           posts.map((src, index) => (
//             <div key={index} className="gallery-item">
//               <img src={src} alt={`Post ${index + 1}`} />
//             </div>
//           ))
//         ) : (
//           <p className="no-posts">No posts yet. Create your first post!</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SkillHierProfile;

//=========================================================================007================

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./ProfilePage.css";

// const SkillHierProfile = ({ posts = [], setPosts = () => {} }) => {
//   const [isFollowing, setIsFollowing] = useState(false);
//   const [followers, setFollowers] = useState(12500);
//   const [following, setFollowing] = useState(500);
//   const navigate = useNavigate();

//   const handleFollow = () => {
//     setFollowers(prev => isFollowing ? prev - 1 : prev + 1);
//     setIsFollowing(!isFollowing);
//   };

//   // === Post Actions ===
//   const handleLike = (postId) => {
//     setPosts(prev => prev.map(p => p.id === postId ? { ...p, likes: (p.likes || 0) + 1 } : p));
//   };
//   const handleComment = (postId) => {
//     const comment = prompt("Enter your comment:");
//     if (!comment) return;
//     setPosts(prev => prev.map(p => p.id === postId ? { ...p, comments: [...(p.comments || []), comment] } : p));
//   };
//   const handleShare = (postId) => alert("Post shared! (Dummy)");
//   const handleEdit = (postId) => {
//     const postToEdit = posts.find(p => p.id === postId);
//     const textBlock = postToEdit.blocks.find(b => b.type === "text");
//     const newText = prompt("Edit post:", textBlock?.content || "");
//     if (newText !== null) {
//       const newBlocks = postToEdit.blocks.map(b => b.type === "text" ? { ...b, content: newText } : b);
//       setPosts(prev => prev.map(p => p.id === postId ? { ...p, blocks: newBlocks } : p));
//     }
//   };
//   const handleDelete = (postId) => {
//     if (window.confirm("Delete this post?")) setPosts(prev => prev.filter(p => p.id !== postId));
//   };

//   return (
//     <div className="profile-container desktop-view">
//       <div className="banner-section">
//         <img src="/assets/mountain-banner.jpg" alt="Banner" className="banner-img" />
//       </div>

//       <div className="profile-info">
//         <img src="/assets/profile-pic.jpg" alt="Profile" className="profile-pic" />
//         <h2 className="profile-name">Jane Doe</h2>
//         <p className="username">@janedoe_adventures</p>
//         <p className="bio">Outdoor enthusiast, photographer, and world traveler.</p>

//         <div className="stats">
//           <button className={`follow-btn ${isFollowing ? "following" : ""}`} onClick={handleFollow}>
//             {isFollowing ? "Following" : "Follow"}
//           </button>

//           <div className="stats-box">
//             <strong>{followers.toLocaleString()}</strong>
//             <span>Followers</span>
//           </div>

//           <div className="stats-box">
//             <strong>{following}</strong>
//             <span>Following</span>
//           </div>

//           <div className="stats-box">
//             <strong>{posts.length}</strong>
//             <span>Posts</span>
//           </div>
//         </div>

//         <div className="rating">⭐ 4.8 Rating <span>(1.2K Reviews)</span></div>

//         <div className="create-post">
//           <button className="upload-label" onClick={() => navigate("/post")}>➕ Create Post</button>
//         </div>
//       </div>

//       {/* Gallery */}
//       <div className="gallery">
//         {posts.length > 0 ? (
//           posts.map(post => (
//             <div key={post.id} className="gallery-item" onClick={() => navigate(`/post/${post.id}`)}>
//               {post.previewSrc
//                 ? post.previewSrc.includes("video")
//                   ? <video src={post.previewSrc} controls className="video-thumb" />
//                   : <img src={post.previewSrc} alt="Post" className="image-thumb" />
//                 : <div className="text-thumb">{post.blocks.find(b => b.type === "text")?.content.slice(0,50) || "Text Post"}</div>
//               }

//               <div className="post-actions">
//                 <button onClick={(e)=>{e.stopPropagation(); handleLike(post.id)}}>👍 {post.likes||0}</button>
//                 <button onClick={(e)=>{e.stopPropagation(); handleComment(post.id)}}>💬 {post.comments?.length||0}</button>
//                 <button onClick={(e)=>{e.stopPropagation(); handleShare(post.id)}}>🔗 Share</button>
//                 <button onClick={(e)=>{e.stopPropagation(); handleEdit(post.id)}}>✏️ Edit</button>
//                 <button onClick={(e)=>{e.stopPropagation(); handleDelete(post.id)}}>🗑 Delete</button>
//               </div>
//             </div>
//           ))
//         ) : <p className="no-posts">No posts yet.</p>}
//       </div>
//     </div>
//   );
// };

// export default SkillHierProfile;

//=======================================================================008====================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/ProfilePage.css";

const SkillHierProfile = ({
  posts = [],
  setPosts = [],
  isOwnProfile = true,
}) => {
  const navigate = useNavigate();

  // User state with edit profile
  const [user, setUser] = useState({
    name: "Jane Doe",
    username: "@janedoe_adventures",
    bio: "Outdoor enthusiast, photographer, and world traveler.",
    followers: 12500,
    following: 500,
    postsCount: posts.length,
    isActive: true,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: user.name,
    bio: user.bio,
  });

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setUser({ ...user, name: editForm.name, bio: editForm.bio });
    setIsEditing(false);
  };
  const handleCancel = () => {
    setEditForm({ name: user.name, bio: user.bio });
    setIsEditing(false);
  };
  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleDeletePost = (id) => {
    if (window.confirm("Are you sure to delete this post?")) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="profile-container">
      {/* Banner */}
      <div className="banner-section">
        <img
          src="/assets/mountain-banner.jpg"
          alt="Banner"
          className="banner-img"
        />
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        <img
          src="/assets/profile-pic.jpg"
          alt="Profile"
          className="profile-pic"
        />

        {/* Name */}
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editForm.name}
            onChange={handleChange}
            className="edit-input"
          />
        ) : (
          <h2 className="profile-name">{user.name}</h2>
        )}

        <p className="username">{user.username}</p>

        {/* Bio */}
        {isEditing ? (
          <textarea
            name="bio"
            value={editForm.bio}
            onChange={handleChange}
            className="edit-textarea"
            rows={3}
          />
        ) : (
          <p className="bio">{user.bio}</p>
        )}

        {/* Stats */}
        <div className="stats">
          <div className="stats-box">
            <strong>{user.followers.toLocaleString()}</strong>
            <span className="facebook-stat-label">Followers</span>
          </div>
          <div className="stats-box">
            <strong>{user.following.toLocaleString()}</strong>
            <span className="facebook-stat-label">Following</span>
          </div>
          <div className="stats-box">
            <strong>{posts.length}</strong>
            <span className="facebook-stat-label">Posts</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="profile-actions-buttons">
          {isEditing ? (
            <>
              <button className="action-btn primary" onClick={handleSave}>
                Save Changes
              </button>
              <button className="action-btn secondary" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            isOwnProfile && (
              <button className="action-btn primary" onClick={handleEdit}>
                ✏️ Edit Profile
              </button>
            )
          )}

          {isOwnProfile && (
            <button
              className="action-btn create-post-btn"
              onClick={() => navigate("/post")}
            >
              ➕ Create Post
            </button>
          )}
        </div>
      </div>

      {/* Posts Gallery */}
      <div className="gallery">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="gallery-item">
              {post.previewSrc ? (
                post.previewSrc.includes("video") ? (
                  <video
                    src={post.previewSrc}
                    controls
                    className="post-media"
                  />
                ) : (
                  <img
                    src={post.previewSrc}
                    alt="Post"
                    className="post-media"
                  />
                )
              ) : (
                <div className="text-thumb">
                  {post.blocks
                    .find((b) => b.type === "text")
                    ?.content.slice(0, 50) || "Text Post"}
                </div>
              )}

              {/* Overlay for Post Actions */}
              <div className="post-overlay">
                <div className="post-stats">
                  <span>❤ {post.likes || 0}</span>
                  <span>💬 {post.comments?.length || 0}</span>
                  <span>🔗 Share</span>
                  {isOwnProfile && (
                    <>
                      <span
                        className="edit-btn"
                        onClick={() => navigate(`/edit-post/${post.id}`)}
                      >
                        ✏️ Edit
                      </span>
                      <span
                        className="delete-btn"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        🗑️ Delete
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-posts">No posts yet</p>
        )}
      </div>
    </div>
  );
};

export default SkillHierProfile;
