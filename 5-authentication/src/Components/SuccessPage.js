import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient';


function SuccessPage() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {

    async function getUserData() {
      await supabase.auth.getUser()
        .then((value) => {
          if (value.data?.user) {
            console.log(value.data.user);
            setUser(value.data.user);
          }
        })
    }

    getUserData();
  }, [])

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate('/');
  }

  return (
    <>
      <div className='w-screen h-screen bg-black flex flex-col justify-center items-center'>
        <header className='flex flex-col justify-center items-center'>

          {
            Object.keys(user) !== 0
              ? <>
                <h1 className='text-4xl font-semibold text-rose-600 mb-5 '>Success</h1>
                <button
                  className='px-3 py-1 bg-orange-600 font-semibold border-0 rounded-md'
                  onClick={() => signOutUser()}
                >Sign out</button>
              </>

              : <>
                <h1 className='text-4xl font-semibold text-sky-600 mb-5 '>User is not Logged in.</h1>
                <button
                  className='px-3 py-1 bg-white font-semibold border-0 rounded-md'
                  onClick={() => navigate('/')}
                >Go back Home!</button>
              </>
          }


        </header>
      </div>
    </>
  )
}

export default SuccessPage;