import { useState } from "react";


export const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEntrar = () => {
        console.log(email)
        console.log(password)
    };

    return (
        <div>
           <form>
            <label>
                <span>E-mail</span>
                <input value={email} onChange={e => setEmail(e.target.value)} />
                <span>Senha</span>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="button" onClick={handleEntrar}>
                Entrar
            </button>
           </form>
        </div>
    )
}