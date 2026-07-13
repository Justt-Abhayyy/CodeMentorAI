import {

BrowserRouter,

Routes,

Route,

Navigate

}

from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Problems from "./pages/Problems";
import ProblemDetails from "./pages/ProblemDetails";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Recommendations from "./pages/Recommendations";
import MySubmissions from "./pages/MySubmissions";
import AdminProblems from "./pages/AdminProblems";

import ProtectedRoute from "./components/ProtectedRoute";

import AppLayout from "./components/layout/AppLayout";

function Layout({

children

}){

return(

<ProtectedRoute>

<AppLayout>

{children}

</AppLayout>

</ProtectedRoute>

);

}

function App(){

return(

<BrowserRouter>

<Routes>

<Route

path="/"

element={<Navigate to="/login"/>}

/>

<Route

path="/login"

element={<Login/>}

/>

<Route

path="/register"

element={<Register/>}

/>

<Route

path="/dashboard"

element={

<Layout>

<Dashboard/>

</Layout>

}

/>

<Route

path="/problems"

element={

<Layout>

<Problems/>

</Layout>

}

/>

<Route

path="/problems/:id"

element={

<Layout>

<ProblemDetails/>

</Layout>

}

/>

<Route

path="/profile"

element={

<Layout>

<Profile/>

</Layout>

}

/>

<Route

path="/leaderboard"

element={

<Layout>

<Leaderboard/>

</Layout>

}

/>

<Route

path="/recommendations"

element={

<Layout>

<Recommendations/>

</Layout>

}

/>

<Route

path="/submissions"

element={

<Layout>

<MySubmissions/>

</Layout>

}

/>

<Route

path="/admin/problems"

element={

<ProtectedRoute adminOnly={true}>

<Layout>

<AdminProblems/>

</Layout>

</ProtectedRoute>

}

/>

</Routes>

</BrowserRouter>

);

}

export default App;