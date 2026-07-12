import { Link } from "react-router-dom";

import Button from "../ui/Button";

function QuickActions(){

return(

<div className="flex gap-4 flex-wrap">

<Link to="/problems">

<Button>

Start Solving

</Button>

</Link>

<Link to="/leaderboard">

<Button variant="secondary">

Leaderboard

</Button>

</Link>

<Link to="/recommendations">

<Button variant="outline">

AI Suggestions

</Button>

</Link>

<Link to="/profile">

<Button variant="success">

Profile

</Button>

</Link>

</div>

);

}

export default QuickActions;