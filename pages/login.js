import { auth, provider } from "@/firebase";
import { signInWithPopup } from 'firebase/auth';
import { Button } from "@material-ui/core";
import Head from "next/head"
import styled from "styled-components";

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }


  return (
    <Container>
        <Head>
            <title>Login</title>
        </Head>
        <LoginContainer>
            <Logo src="https://static.vecteezy.com/system/resources/previews/018/930/748/original/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.png"
             />
             <Button onClick={signIn} variant="outlined">Sign in with Google</Button>

        </LoginContainer>
    </Container>
  )
}

export default Login


const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding:100px;
    background-color: white;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;

const Logo = styled.img`
height: 200px;
width: 200px;
margin-bottom: 10px;
`;