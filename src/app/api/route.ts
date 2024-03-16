export async function GET(request: Request) {
    const data = await fetch("https://api.github.com/users/bjamesy")
    const json = await data.json()

    return Response.json(json)
} 