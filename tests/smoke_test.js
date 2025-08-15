import { scenarioRegistro } from "../src/scenarios/register_scenario.js";

export const options = {
  vus: 1,           
  duration: '10s',  
};

export default function(){
    scenarioRegistro();
}
