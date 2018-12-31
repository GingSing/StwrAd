export const userService = {
    registerAccount
}

function registerAccount(username, name, email, password, confirmPassword){

    const requestOptions={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, name, email, password })
    };

    return  password === confirmPassword ? fetch('/users/register', requestOptions)
        .then(res => res.json())
        .then(data=>{return data})
        .catch(err=> {throw new Error(err)})
        : ()=>{throw new Error("Incorrect Password")};
}