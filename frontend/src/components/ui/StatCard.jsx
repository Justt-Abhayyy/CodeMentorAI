import Card from "./Card";

function StatCard({

  title,

  value,

  icon,

  color = "text-blue-400"

}) {

  return (

    <Card>

      <div

        className="
          flex
          justify-between
          items-center
        "

      >

        <div>

          <p
            className="
              text-zinc-400
              text-sm
            "
          >
            {title}
          </p>

          <h2

            className="
              text-4xl
              font-bold
              mt-3
            "

          >

            {value}

          </h2>

        </div>

        <div

          className={`
            ${color}
            text-5xl
          `}

        >

          {icon}

        </div>

      </div>

    </Card>

  );

}

export default StatCard;