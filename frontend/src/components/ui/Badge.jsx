import clsx from "clsx";

function Badge({

  children,

  color = "blue"

}) {

  return (

    <span

      className={clsx(

        "px-3 py-1 rounded-full text-xs font-semibold",

        {

          "bg-blue-500/20 text-blue-400":

            color === "blue",

          "bg-green-500/20 text-green-400":

            color === "green",

          "bg-red-500/20 text-red-400":

            color === "red",

          "bg-yellow-500/20 text-yellow-400":

            color === "yellow",

          "bg-purple-500/20 text-purple-400":

            color === "purple"

        }

      )}

    >

      {children}

    </span>

  );

}

export default Badge;