import { scenarioRegistro } from "../src/scenarios/register_scenario.js";

export const options = {
  vus: 20,           // usuários constantes
  duration: '5m',   // roda 5 minutos
};

export default function(){
    scenarioRegistro();
}
