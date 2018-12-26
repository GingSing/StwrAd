export const authService = {
    signIn,
}

function signIn(username, password){
    const requestOptions={
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };
    return fetch('/users/login', requestOptions)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            throw Error(res);
        })
        .then(data => {
            localStorage.setItem('user', JSON.stringify(data));
            return data;
        })
}