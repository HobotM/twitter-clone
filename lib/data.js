///centralise data fetch in this file whioch is loaded server side.

export const getTweets = async (prisma) => {
    return await prisma.tweet.findMany({
      where: {},
      orderBy: [
        {
          id: 'desc'
        }
      ]
    })
  }