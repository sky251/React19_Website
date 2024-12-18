import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = ()=>{

    const error = useRouteError()

    return <>
    <h1>OOPS an error occured!</h1>
    <p>{error.data}</p>
    <NavLink to='/'><button> Home</button></NavLink>
    </>

}