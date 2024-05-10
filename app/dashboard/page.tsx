import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import {UserInfo} from "@/types/user";
export default async function Page() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }
    const { data: userInfo, error } = await supabase.from('users').select().eq("email", user.email);
    if(error){
        console.log("An error occured while fetching user info");
    }
    if(userInfo![0].role !== "admin"){
        return redirect("/protected");
    }


    return (
        <div>
            <p>Currently your role is, {userInfo![0].role}</p>
        </div>
    );
}