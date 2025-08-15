import { scenarioRegistro } from "../src/scenarios/register_scenario.js";

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // sobe pra 20 VUs
    { duration: '30s', target: 50 }, // depois 50 VUs
    { duration: '30s', target: 100 },// aumenta até 100
    { duration: '30s', target: 0 },  // encerra
  ],
}; 

export default function(){
    scenarioRegistro();
}
