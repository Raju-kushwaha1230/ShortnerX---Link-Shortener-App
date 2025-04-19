import { useSession } from 'next-auth/react'
import React from 'react'

const Login = () => {
    const {data : session} = useSession()
    if(session){

    }

  return (
    <div>
      <button onClick={}>Login with Github</button>
    </div>
  )
}

export default Login
