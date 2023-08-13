import { userAuth } from "../context/UserContext";


const Home = ()=>{
    const {token, settoken} = userAuth();

    return(
        <>
       <h4>iam home page </h4>
        </>
    )
}

export default Home;