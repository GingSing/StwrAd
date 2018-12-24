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
            let { status } = res;
            if(status){
                return res.json();
            }
            console.log(status);
            throw Error(status);
        })
        .then(data => {
            for(let info in data){
                localStorage.setItem(info,data[info]);
            }
            return data;
        })
}