import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DashBoard from './Components/DashBoard/DashBoard';
import BookingsList from './Components/DashBoard/BookingList/BookingsList';
import GiveReview from './Components/DashBoard/GiveReview/GiveReview';
import AddAdmin from './Components/DashBoard/AddAdmin/AddAdmin';
import AllOrders from './Components/DashBoard/AllBookings/AllBooking';
import AddService from './Components/DashBoard/AddService/AddService';
import Booknow from './Components/DashBoard/Booknow/Booknow';


export const userContext = createContext({})
function App() {
 
  const [userInfo , setUserInfo] = useState({})

  return (
    <userContext.Provider value={[userInfo , setUserInfo]}>
    <Router>
     <Switch>
     <Route exact path='/'>
     <Home></Home>
     </Route>
     <Route  path='/login'>
     <Login></Login>
     </Route>
     <PrivateRoute path="/dashboard/:id">
       <DashBoard></DashBoard>
     </PrivateRoute>
     <Route  path='/bookingList'>
    <BookingsList></BookingsList>
     </Route>
     <Route  path='/giveReview'>
      <GiveReview></GiveReview>
     </Route>
     <Route  path='/addAdmin'>
     <AddAdmin/>
     </Route>
     <Route  path='/allBookings'>
     <AllOrders></AllOrders>
     </Route>
     <Route  path='/addService'>
      <AddService/>
     </Route>
     </Switch>

    </Router>
    </userContext.Provider>
  );
}

export default App;
