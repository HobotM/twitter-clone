import {useSession} from 'next-auth/react'
import NewTweet from 'components/NewTweet'

export default function Home() {
    const {data: session, status} = useSession()
    const loading = status === 'loading'

    if (loading)
    {
        return null
    }

    if(!session){
        router.push('/')
    }

    return(
        <div>
            {session ? <NewTweet /> : <p> You are not logged in!</p>}
        </div>
    )
}