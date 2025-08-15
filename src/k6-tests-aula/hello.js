import http from 'k6/http'
import { sleep, check } from 'k6'

export let options = {
    vus: 1,
    duration: '10s',
};

export default function (){
    const res = http.get('http://localhost:3333');

    check(res, {
        'status should be 200': (res) => res.status === 200
    })

    sleep(1);
}