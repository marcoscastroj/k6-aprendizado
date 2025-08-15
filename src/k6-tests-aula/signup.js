import http from 'k6/http'
import { sleep, check } from 'k6'

import { randomEmail } from '../data/utils.js';

export let options = {
    vus: 1,
    duration: '2s',
};

export default function (){
    const url = 'http://localhost:3333/signup';

    const payload = JSON.stringify(
        { email : randomEmail(), password : password()}
    )

    const headers = {
        'headers': {
            'Content-Type' : 'application/json'
        }
    }

    const res = http.post(url, payload, headers);
    
    console.log(res.body)

    check(res, {
        'status should be 201': (res) => res.status === 201
    })

    sleep(1);
}