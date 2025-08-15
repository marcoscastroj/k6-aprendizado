import { scenarioRegistro } from "../src/scenarios/register_scenario.js";

export const options = {
    vus: 30,
    duration: '30s',
};  

export default function(){
    scenarioRegistro();
}
