import prisma from "lib/prisma"
import { getSession } from "next-auth/react"

export default async function handler(req, res) {

    //check if loggind in to see the post data
    const session = await getSession({req})
    if (!session) return res.status(401).json({message: 'Not logged in'})


    // use prisma to get the user from next auth from session
    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
    })

    if(!user) return res.status(401).json({message: 'User not found'})

    //send data to db user and content
    if(req.method ==="POST")
    {
        await prisma.tweet.create({
            data:{
                content: req.body.content,
                author:{
                    connect: {id: user.id},
                },
            },
        })
        res.end()
    }
}