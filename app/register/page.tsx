import { inputClass } from "../ui/styles";

export default function Page()
{
    return(
        <div className="absolute group rounded-xl w-full sm:w-[400px] h-[500px] left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] shadow-xl text-white bg-blue-400">

            <form className="flex flex-col mx-10">
                <h1 className="text-5xl font-bold mt-12">Register</h1>
                <label className="text-2xl pt-14" htmlFor="email">Email</label>
                <input className={inputClass} type="text" name="email" required id="email"/>
                <label className="text-2xl pt-3"htmlFor="password">Password</label>
                <input className={inputClass} type="password" required name="password" id="password"/>
                <label className="text-2xl pt-3"htmlFor="password">Confirm Password</label>
                <input className={inputClass} type="password" required name="confirmpassword" id="confirmpassword"/>
                <button className="text-3xl shadow-md bg-blue-300 mt-10 rounded-3xl mx-6 hover:bg-white hover:text-black hover:rounded-lg transition-all" type="submit">Register</button>
            </form>
        </div>
    );
}