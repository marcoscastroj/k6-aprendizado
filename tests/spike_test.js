import { scenarioRegistro } from "../src/scenarios/register_scenario.js";

export const options = {
  stages: [
    { duration: '10s', target: 10 },   // começa leve
    { duration: '10s', target: 80 },  // boom, pico
    { duration: '10s', target: 10 },   // volta ao normal
  ],
};

export default function(){
    scenarioRegistro();
}
