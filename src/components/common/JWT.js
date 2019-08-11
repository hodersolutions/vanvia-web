class JWT {    
    static get_jwt = () => {
        return { 
            'access_token': localStorage.getItem('access_token'),
            'username': localStorage.getItem('username')
        }
    };
    static set_jwt = (access_token, username) => {
        localStorage.setItem('access_token', access_token);
		localStorage.setItem('username', username);
    };
    static remove_jwt = () => {
        localStorage.removeItem('access_token');
		localStorage.removeItem('username');
    };
}

export default JWT;