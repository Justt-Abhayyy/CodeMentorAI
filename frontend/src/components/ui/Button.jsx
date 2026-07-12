import clsx from "clsx";

function Button({

children,

variant="primary",

className="",

...props

}){

return(

<button

{...props}

className={clsx(

"rounded-2xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105",

{

"bg-blue-600 hover:bg-blue-500 text-white":

variant==="primary",

"bg-green-600 hover:bg-green-500 text-white":

variant==="success",

"bg-zinc-800 hover:bg-zinc-700 text-white":

variant==="secondary",

"border border-zinc-700 hover:border-blue-500":

variant==="outline",

"bg-red-600 hover:bg-red-500 text-white":

variant==="danger"

},

className

)}

>

{children}

</button>

);

}

export default Button;