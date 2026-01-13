import {Outlet} from 'react-router-dom'
const Home = ()=>{
    return (
        <>
            <h1>Hello</h1>
            <Outlet/>
        </>
    );
}

export default Home;