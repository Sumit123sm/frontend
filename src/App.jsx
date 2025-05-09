import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import AboutUs from '../src/components/AboutUs';
import Product from '../src/components/Product';
import ContactUs from '../src/components/ContactUs';
import ChooseUser from "../src/components/ChooseUser";
import AdminSignIn from "../src/components/AdminSignIn";
import StudentSignIn from "../src/components/StudentSignIn";
import TeacherSignIn from "../src/components/TeacherSignIn";

// Import of dashboard pages
import AdminDashboard from "../src/pages/Admin/Dashboard";
import StudentDashboard from "./pages/Students/Dashboard";
import TeacherDashboard from "./pages/Teachers/Dashboard";

// Import of admin sections
import Classes from "../src/pages/Admin/Classes";
import Exams from "../src/pages/Admin/Exams";
import Attendance from "../src/pages/Admin/Attendance";
import Performance from "../src/pages/Admin/Performance";
import Teachers from "../src/pages/Admin/Teachers";
import Students from "../src/pages/Admin/Students";
import Assignment from "../src/pages/Admin/Assignments";
import Library from "../src/pages/Admin/Library";
import EventCalender from "../src/pages/Admin/EventCalender";
import SettingsProfile from "../src/pages/Admin/SettingsProfile";
import Announcement from "../src/pages/Admin/Announcement";

// Import of student sections
import StudentAssignments from "./pages/Students/Assignments";
import ExamSection from "./pages/Students/Exams";
import PerformanceSection from "./pages/Students/Performance";
import AttendanceSection from "./pages/Students/Attendance";
import LibrarySection from "./pages/Students/Library";
import AnnouncementSection from "./pages/Students/Announcement";
import ProfileSection from "./pages/Students/Profile";

// Import of teacher sections
import ClassSection from "./pages/Teachers/Classes";
import StudentSection from "./pages/Teachers/Students";
import TeacherSection from "./pages/Teachers/Teachers";
import CheckPerformanceSection from "./pages/Teachers/Performance";
import EventSection from "./pages/Teachers/Events";
import TeacherProfileSection from "./pages/Teachers/Profile";
import CheckAnnouncementSection from "./pages/Teachers/Announcement";
import AssignmentSection from "./pages/Teachers/Assignments";
import CheckAttendanceSection from "./pages/Teachers/Attendance";
import CheckExamSection from "./pages/Teachers/Exams";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/admin-signIn" element={<AdminSignIn />} />
    <Route path="/student-signIn" element={<StudentSignIn />} />
    <Route path="/teacher-signIn" element={<TeacherSignIn />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/choose-user" element={<ChooseUser />} />

          {/* Sign-in pages */}
          <Route path="/admin-signIn" element={<AdminSignIn />} />
          <Route path="/student-signIn" element={<StudentSignIn />} />
          <Route path="/teacher-signIn" element={<TeacherSignIn />} />

          {/* Dashboard sections */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />

          {/* Admin sections */}
          <Route path="/admin/classes" element={<Classes />} />
          <Route path="/admin/exams" element={<Exams />} />
          <Route path="/admin/attendance" element={<Attendance />} />
          <Route path="/admin/performance" element={<Performance />} />
          <Route path="/admin/teachers" element={<Teachers />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/assignments" element={<Assignment />} />
          <Route path="/admin/library" element={<Library />} />
          <Route path="/admin/communication" element={<Announcement />} />
          <Route path="/admin/events" element={<EventCalender />} />
          <Route path="/admin/settings" element={<SettingsProfile />} />

          {/* Student sections */}
          <Route path="/student/assignments" element={<StudentAssignments />} />
          <Route path="/student/exams" element={<ExamSection />} />
          <Route path="/student/performance" element={<PerformanceSection />} />
          <Route path="/student/attendance" element={<AttendanceSection />} />
          <Route path="/student/library" element={<LibrarySection />} />
          <Route path="/student/communication" element={<AnnouncementSection />} />
          <Route path="/student/settings" element={<ProfileSection />} />

          {/* Teacher sections */}
          <Route path="/teacher/classes" element={<ClassSection />} />
          <Route path="/teacher/students" element={<StudentSection />} />
          <Route path="/teacher/teachers" element={<TeacherSection />} />
          <Route path="/teacher/assignments" element={<AssignmentSection />} />
          <Route path="/teacher/exams" element={<CheckExamSection />} />
          <Route path="/teacher/performance" element={<CheckPerformanceSection />} />
          <Route path="/teacher/attendance" element={<CheckAttendanceSection />} />
          <Route path="/teacher/communication" element={<CheckAnnouncementSection />} />
          <Route path="/teacher/events" element={<EventSection />} />
          <Route path="/teacher/settings" element={<TeacherProfileSection />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
