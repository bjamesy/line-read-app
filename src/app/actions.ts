export default async function postLogin(data: any) {
    const options = {
      method: "POST",
      body: JSON.stringify(data)
    }
    const response  = await fetch(``, options)
    if (!response.ok) throw new Error('Failed to post course data')

    return true
}
