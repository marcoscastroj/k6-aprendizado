import { randomUser } from "../data/utils.js";
import { signupRequest } from "../requests/signup_request.js";
import { sleep } from "k6";

export function scenarioRegistro(){
    const user = randomUser();
    signupRequest(user);

    sleep(2);
}