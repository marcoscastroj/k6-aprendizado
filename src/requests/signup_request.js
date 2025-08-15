import http from 'k6/http'
import { check } from 'k6'
import { BASE_URL, HEADERS_JSON } from '../common/config.js';
   
export function signupRequest(user){

    const res = http.post(`${BASE_URL}/signup`, JSON.stringify(user), {headers : HEADERS_JSON });
    
    check(res, {
        'status should be 201': (res) => res.status === 201
    })

    return res;
}
