import {
    LOGIN_API, 
    REGISTER_API,
    SEND_MESSAGE_API,
    GET_MESSAGES_API,
    GET_USER_API,
    GET_USERS_API
} from './constants';


async function callApi(url : string, method : string, body : object, token : string) : Promise<Response> {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    })
}


export async function login(username: string, password: string, token: string): Promise<Response> {
    return callApi(LOGIN_API, 'POST', { username, password }, token);
}

export async function register(username: string, password: string, token: string): Promise<Response> {
    return callApi(REGISTER_API, 'POST', { username, password }, token);
}

export async function sendMessage(sender: string, receiver: string, message: string, token: string): Promise<Response> {
    return callApi(SEND_MESSAGE_API, 'POST', { sender, receiver, message }, token);
}

export async function getMessages(username: string, token: string): Promise<Response> {
    return callApi(GET_MESSAGES_API, 'POST', { username }, token);
}

export async function getUser(username: string, token: string): Promise<Response> {
    return callApi(GET_USER_API, 'POST', { username }, token);
}

export async function getUsers(token: string): Promise<Response> {
    return callApi(GET_USERS_API, 'GET', {}, token);
}

