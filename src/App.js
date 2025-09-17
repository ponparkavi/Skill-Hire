// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const styles = {
//   app: {
//     display: 'flex',
//     height: '100vh',
//     fontFamily: "'Segoe UI', sans-serif",
//   },
//   calendar: {
//     flex: 2,
//     padding: '24px',
//     backgroundColor: '#fff',
//     borderRight: '1px solid #ddd',
//   },
//   calendarHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   toggle: {
//     marginLeft: '5px',
//     padding: '6px 12px',
//     border: 'none',
//     backgroundColor: '#2c3e50',
//     color: '#fff',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginTop: '16px',
//     textAlign: 'center',
//   },
//   cell: {
//     border: '1px solid #ddd',
//     padding: '8px',
//     height: '80px',
//     verticalAlign: 'top',
//   },
//   eventBlue: {
//     backgroundColor: '#4c8bf5',
//     color: '#fff',
//     borderRadius: '4px',
//     padding: '4px',
//   },
//   eventRed: {
//     backgroundColor: '#e74c3c',
//     color: '#fff',
//     borderRadius: '4px',
//     padding: '4px',
//   },
//   sidebar: {
//     flex: 1,
//     backgroundColor: '#1c2b49',
//     color: '#fff',
//     padding: '24px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//   },
//   avatar: {
//     borderRadius: '50%',
//     width: '40px',
//     height: '40px',
//   },
//   sidebarHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   addBtn: {
//     marginTop: '20px',
//     padding: '10px',
//     backgroundColor: '#2f3e60',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//   },
//   sessionBox: {
//     backgroundColor: '#2f3e60',
//     padding: '10px',
//     borderRadius: '6px',
//     marginTop: '10px',
//     fontSize: '0.9rem',
//   },
//   tag: {
//     display: 'inline-block',
//     marginTop: '6px',
//     padding: '2px 8px',
//     fontSize: '0.75rem',
//     borderRadius: '10px',
//   },
//   accepted: { backgroundColor: '#4c8bf5' },
//   declined: { backgroundColor: '#e74c3c' },
//   finished: { backgroundColor: '#95a5a6' },
//   statBox: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginTop: '10px',
//   },
//   statItem: {
//     backgroundColor: '#2f3e60',
//     padding: '10px',
//     borderRadius: '6px',
//     width: '45%',
//     textAlign: 'center',
//   },
// };

// export default function App() {
//   return (
//     <div style={styles.app}>
//       {/* Calendar */}
//       <div style={styles.calendar}>
//         <h2>Calendar</h2>
//         <div style={styles.calendarHeader}>
//           <h3>October 2025</h3>
//           <div>
//             <button style={styles.toggle}>month</button>
//             <button style={styles.toggle}>week</button>
//           </div>
//         </div>

//         <table style={styles.table}>
//           <thead>
//             <tr>
//               {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
//                 <th key={d}>{d}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td style={styles.cell}></td>
//               <td style={styles.cell}></td>
//               <td style={styles.cell}>1</td>
//               <td style={styles.cell}>2</td>
//               <td style={styles.cell}>3</td>
//               <td style={styles.cell}>4</td>
//               <td style={styles.cell}>5</td>
//             </tr>
//             <tr>
//               <td style={styles.cell}>6</td>
//               <td style={styles.cell}>7</td>
//               <td style={styles.cell}>
//                 8<br />
//                 <div style={styles.eventBlue}>React Basics - John</div>
//               </td>
//               <td style={styles.cell}>9</td>
//               <td style={styles.cell}>10</td>
//               <td style={styles.cell}>11</td>
//               <td style={styles.cell}>12</td>
//             </tr>
//             <tr>
//               <td style={styles.cell}>13</td>
//               <td style={styles.cell}>14</td>
//               <td style={styles.cell}>
//                 15<br />
//                 <div style={styles.eventRed}>UI Design – Ethan</div>
//               </td>
//               <td style={styles.cell}>16</td>
//               <td style={styles.cell}>17</td>
//               <td style={styles.cell}>18</td>
//               <td style={styles.cell}>19</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <div>
//           <div style={styles.sidebarHeader}>
//             <h3>Kavi</h3>
//             <img
//               src="https://via.placeholder.com/40"
//               alt="User"
//               style={styles.avatar}
//             />
//           </div>
//           <button style={styles.addBtn}>+ Add Session</button>

//           <div style={{ marginTop: '30px' }}>
//             <h4>Upcoming Sessions</h4>

//             <div style={styles.sessionBox}>
//               <strong>React Basics</strong> with John, 5 PM<br />
//               <span style={{ ...styles.tag, ...styles.accepted }}>Accepted</span>
//             </div>
//             <div style={styles.sessionBox}>
//               <strong>Python Coaching</strong> with Mary, 10 AM<br />
//               <span style={{ ...styles.tag, ...styles.declined }}>Declined</span>
//             </div>
//             <div style={styles.sessionBox}>
//               <strong>UI Design</strong> with Ethan, 2 PM<br />
//               <span style={{ ...styles.tag, ...styles.finished }}>Finished</span>
//             </div>
//           </div>
//         </div>

//         <div style={{ marginTop: '30px' }}>
//           <h4>Sessions</h4>
//           <div style={styles.statBox}>
//             <div style={styles.statItem}>
//               <strong>6</strong><br />Rejected
//             </div>
//             <div style={styles.statItem}>
//               <strong>2</strong><br />Finished
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import CalendarDashboard from "./CalendarDashboard";

export default function App() {
  return <CalendarDashboard />;
}

