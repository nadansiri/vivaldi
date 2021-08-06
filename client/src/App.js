import { useEffect } from "react";
import "./App.css";
//
import FeaturedCarousel from "./components/FeaturedCarousel";
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
import { authedStudent } from "./Redux/actions/studentActions";

//Teachers
import TeacherSignUp from "./pages/TeacherSignUp";
import TeacherSignIn from "./pages/TeacherSignIn";
import TeacherDashbord from "./pages/TeacherDashbord";
import { authedTeacher } from "./Redux/actions/teacherActions";

//Admin
import ManageAccounts from "./pages/ManageAccounts";
//
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import PrivateRouteTeachers from "./routes/PrivateRouteTeachers";
import TeacherNav from "./components/TeacherNav";
import StudentNav from "./components/StudentNav";
import PublicForum from "./components/PublicForum";
import MyClub from "./components/MyClub";
import MyStudentProjects from "./components/MyStudentProjects";
import {AboutArtClub, AboutMusicClub, AboutSportClub} from "./pages/AboutOurClubs";

//
//

function App() {
  /*
  const dispatch = useDispatch()
  const getStudent = () => dispatch(authedStudent())
  const getTeacher = () => dispatch(authedTeacher())
*/
  const isAuthAsTeacher = useSelector((state) => state.teacherReducer.isAuthTeacher);
  const teacher = useSelector((state) => state.teacherReducer.teacher);
  const isAuthAsStudent = useSelector((state) => state.studentReducer.isAuthStudent);
  const student = useSelector((state) => state.studentReducer.student);
  /*
  //const getComments =() => dispatch(allPublicComments());
  useEffect(() => {
    getStudent()
    getTeacher()
   // getComments()
   
  }, [])*/
  return (
    <div className="App">
      <MyNavbar />
      <FeaturedCarousel />
      {/********The Authed users Navbars***********/}
      {isAuthAsTeacher ? (
        <>
        <TeacherNav/>
          
        </>
      ) : (
        null
      )}
      {isAuthAsStudent ? (
        <>
        <StudentNav/> 
        </>
      ) : (
        null
      )}
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
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
        <PrivateRouteTeachers path="/authteacher" component={TeacherDashbord} />
        <PrivateRouteTeachers path="/manageaccounts"  component={ManageAccounts} />
      </Switch>
      <MyFooter />
    </div>
  );
}

export default App;
