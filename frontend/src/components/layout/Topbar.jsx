import {

Bell,

Search,

UserCircle

}

from "lucide-react";

function Topbar(){

return(

<header

className="h-20 border-b border-zinc-800 bg-zinc-950 px-8 flex items-center justify-between"

>

<div

className="flex items-center bg-zinc-900 rounded-2xl px-5 py-3 w-[420px]"

>

<Search

size={18}

className="text-zinc-500"

/>

<input

placeholder="Search..."

className="bg-transparent ml-4 outline-none w-full"

/>

</div>

<div className="flex items-center gap-6">

<button>

<Bell/>

</button>

<div className="flex items-center gap-3">

<UserCircle

size={42}

className="text-blue-500"

/>

<div>

<h3 className="font-semibold">

Welcome

</h3>

<p className="text-zinc-500 text-sm">

CodeMentorAI

</p>

</div>

</div>

</div>

</header>

);

}

export default Topbar;