import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/dashboard";
import Course from "./Courses/Course";
import Calendar from "./Calendar/Calendar";
import Messages from "./Messages/Messages";
import Loading from "./components/Loading";
import Spinner from "./components/Spinner";
import Home from "./Course Menu/Home";
import { UserProvider } from './UserProvider/UserContext'; // Import UserProvider
import ManageAdmin from "./ManageAdmin/ManageAdmin";
import About from './About/About';
import Announcements from "./Course Menu/Announcements";
import Assignments from "./Course Menu/Assignments";
import Modules from "./Course Menu/Modules";

// Student Routes
import StudentDashboard from './Dashboard/StudentDashboard';
import StudentCourse from './Courses/StudentCourse';
import StudentModules from "./Course Menu/StudentModules";
import StudentCalendar from "./Calendar/StudentCalendar";
import StudentAbout from "./About/StudentAbout";
import AdminAbout from './About/AdminAbout'
function App() {
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    // Simulate loading time (e.g., fetching data or other tasks)
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, stop loading
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <UserProvider> {/* Wrap the routes with UserProvider */}
      <Router>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            {/* Admin/Teacher Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/course/*" element={<Course />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/login" element={<Login />} />
            <Route path="/course/:courseId/*" element={<Home />} />
            <Route path="/courses/:courseId/announcements/:announcementId" element={<Announcements />} />
            <Route path="/courses/:courseId/assignments/:assignmentId" element={<Assignments />} />
            <Route path="/courses/:courseId/materials/:materialId" element={<Modules />} />
            <Route path="/manageadmin" element={<ManageAdmin />} />
            <Route path="/adminAbout" element={<AdminAbout />} />
            
            {/* Student Routes */}
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/studentCourse" element={<StudentCourse />} />
            <Route path="/studentabout" element={<StudentAbout />} />


            {/* Default routes */}
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/about" element={<About />} />
          </Routes>
        )}
      </Router>
    </UserProvider>
  );
}

export default App;
