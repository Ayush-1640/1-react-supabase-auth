import React from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';


function LoginPage() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            // forward to success page;
            navigate('/success')
        }
        else {
            // forward to localhost:3000
            navigate('/')
        }
    })

    return (
        <>
            <div className='h-screen flex justify-center items-center'>
                <header className='w-1/3 py-5 px-16 border-0 rounded-lg bg-black'>
                    <Auth
                        supabaseClient={supabase}
                        appearance={{ theme: ThemeSupa }}
                        theme='dark'
                        providers={["discord"]}
                    />
                </header>
            </div>
        </>
    )
}

export default LoginPage;