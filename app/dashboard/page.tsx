import {redirect} from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Page(){
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    const {data:userInfo, error} = await supabase.from('users').select('*').eq('email', user.email).single();
    if(error){
        return redirect("/login");
    }

    if(userInfo.role !== 'admin'){
        return redirect("/");
    }
    return (
        <p> Home Dashboard</p>
    );
}