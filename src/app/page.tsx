import Login from '../components/app/LoginForm'
import { redirect } from 'next/navigation'
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api")
  const json = await data.json()

  return <>{JSON.stringify(json)}</>
  
  // const supabase = createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   return redirect("/login");
  // }

  // return (
  //   <Login/>
  // )
}
