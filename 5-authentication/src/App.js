import React, { useEffect, useState } from 'react';
import supabase from './config/supabaseClient';
import Auth from './Components-2/Auth';
import Account from './Components-2/Account';

function App() {

  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container mx-auto">
      {
        !session
          ? <Auth />
          : <Account key={session.user.id} session={session} />
      }
    </div>
  );
}

export default App;














// -------------  Components  ----------------------

// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import LoginPage from './Components/LoginPage';
// import SuccessPage from './Components/SuccessPage';


// const App = () => { 
//   return (
//     <>
//         <Routes>
//           <Route path="/" element={<LoginPage/>} />
//           <Route path='/success' element={<SuccessPage/>} />
//         </Routes>
//     </>
//   )
// }

// export default App;