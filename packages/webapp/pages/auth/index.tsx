import React from "react"
import { Wrapper } from "../../components/Wrapper"

import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://isffjpqmrdnefttvjvgl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzZmZqcHFtcmRuZWZ0dHZqdmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYyMDQ4NTEsImV4cCI6MjAyMTc4MDg1MX0.n20xjRXz9Dr0ARlxWCdVSnn_MHS02hHI-GL-n_IYz0I')

const AppAuth = () => {
    return (
        <Wrapper hideNav>
            <div className="grid place-items-center h-[calc(100vh-80px)]">
                <div className="w-[400px] bg-dark p-4 rounded-md">
                    <Auth
                        supabaseClient={supabase}
                        appearance={{ theme: ThemeSupa }}
                        providers={['github']}
                        theme="dark"
                        redirectTo="http://localhost:3000/auth/callback"
                    />
                </div>

            </div>
        </Wrapper>
    )
}

// export const getServerSideProps = async (context) => {
//     try {
//         const {
//             data,
//             loading,
//         } = await client.query({
//             query: GET_PAGES_INFO,
//             variables: {
//                 name: context?.resolvedUrl,
//             },
//         });

//         return {
//             props: {
//                 pages: data?.pagesCollection?.items[0] || null,
//                 loading,
//             },
//         };
//     } catch (error) {
//         return {
//             props: {
//                 pages: null,
//                 loading: false,
//                 error: error.message,
//             },
//         };
//     }
// };

export default AppAuth