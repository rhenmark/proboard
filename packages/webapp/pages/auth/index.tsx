import React, { useEffect, useState } from "react"
import Wrapper from "../../components/wrapper/Wrapper"

// import { createClient } from '@supabase/supabase-js'

const AppAuth = () => {
    // const [supabase, setSupabase] = useState<any>(undefined);

    // useEffect(() => {
    //     if (window && typeof window !== "undefined") {
    //         const supabaseConfig = createClient('https://isffjpqmrdnefttvjvgl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZmZqcHFtcmRuZWZ0dHZqdmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyMDQ4NTEsImV4cCI6MjAyMTc4MDg1MX0.n20xjRXz9Dr0ARlxWCdVSnn_MHS02hHI-GL-n_IYz0I')
    //         setSupabase(supabaseConfig);
    //     }
    // }, [])

    // if (!supabase) {
    //     return null
    // }

    return (
        <Wrapper hideNav>
            <div className="grid place-items-center h-[calc(100vh-80px)]">
                <div className="w-[400px] bg-dark p-4 rounded-md">
                    {/* <Auth
                        supabaseClient={supabase}
                        appearance={{ theme: ThemeSupa }}
                        providers={['github']}
                        theme="dark"
                        redirectTo="http://localhost:3000/auth/callback"
                    /> */}
                </div>
            </div>
        </Wrapper>
    )
}

export default AppAuth