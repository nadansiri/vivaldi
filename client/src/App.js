import { useEffect } from "react";
import "./App.css";
//
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
//Public pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
//Students
import StudentSignUp from "./pages/StudentSignUp";
import StudentSignIn from "./pages/StudentSignIn";
import StudentDashbord from "./pages/StudentDashbord";
//Teachers
import TeacherSignUp from "./pages/TeacherSignUp";
import TeacherSignIn from "./pages/TeacherSignIn";
import TeacherDashbord from "./pages/TeacherDashbord";
//Admin
import ManageAccounts from "./pages/ManageAccounts";
//
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PrivateRouteTeachers from "./routes/PrivateRouteTeachers";

import { useSelector } from "react-redux";
import PublicForum from "./components/PublicForum";
import MyClub from "./components/MyClub";
import MyStudentProjects from "./components/MyStudentProjects";
import {AboutArtClub, AboutMusicClub, AboutSportClub, Events} from "./pages/AboutOurClubs";
import SpinnerLoad from "./components/SpinnerLoad";
import MapContainer from "./components/MapContainer";

function App() {
  const teacher = useSelector((state) => state.teacherReducer.teacher);
  const loadTeacher = useSelector((state) => state.teacherReducer.loadTeacher);
  const loadStudent = useSelector((state) => state.studentReducer.loadStudent);
  const load = useSelector((state) => state.publicReducer.load);
  return (
    <div className="App">
      <MyNavbar />
      {load||loadStudent||loadTeacher ? (
        <>
      <SpinnerLoad/>
      </>
      ) : (
        null
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/events" component={Events} />

        <Route
          path="/contactus"
          render={(props) => <ContactUs {...props} isAdmin={teacher.role} />}
        />
        <Route path="/studentregister" component={StudentSignUp} />
        <Route path="/studentlogin" component={StudentSignIn} />
        <Route path="/teacherregister" component={TeacherSignUp} />
        <Route path="/teacherlogin" component={TeacherSignIn} />
        <Route path="/clubs/club1" component={AboutMusicClub} />
        <Route path="/clubs/club2" component={AboutSportClub} />
        <Route path="/clubs/club3" component={AboutArtClub} />
        {/* <Route path="/auth" component={Dashbord} /> */}
        {/* <PrivateRoute path="/auth" render={(props) => <Dashbord {...props} />}  /> */}
        <PrivateRoute path="/authstudent" component={StudentDashbord} />
        <PrivateRoute path="/publicforum" component={PublicForum} />
        <PrivateRoute path="/myprojects" component={MyStudentProjects} />
        <PrivateRoute path="/clubforum" component={MyClub} />
        {/**lettttttttttttttttttttttttttt's see */}
        <PrivateRoute path="/authteacher" component={TeacherDashbord} />
        <PrivateRouteTeachers path="/manageaccounts"  component={ManageAccounts} />
        
      </Switch>
      <MyFooter />
    </div>
  );
}

export default App;
