import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Navigation from "./components/Navigation";
import UpdateContact from "./components/UpdateContact";
import {useDispatch} from 'react-redux'
import { getContacts } from "./JS/actions/userAction";
import '../src/loader/loader.css'

function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getContacts())
   
  }, [dispatch])
  
  return (
    <div className="App">
      <Navigation/>
     <Routes>
       <Route path="/" element={<ContactList/>}/>
       <Route path="/addContact" element={<AddContact/>}/>
       <Route path="/Update/:id" element={<UpdateContact/>}/>
     </Routes>
    </div>
  );
}

export default App;
