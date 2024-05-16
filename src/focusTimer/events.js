import { controls, minutes} from "./elements.js";
import * as actions from "./actions.js"
import { plus, minus } from "./elements.js";

export function registerControls() {
  controls.addEventListener('click', (event) => {
   const action = event.target.dataset.action
   if(typeof actions[action] != "function") {
    return
   }

   actions[action]()
  })
}


plus.addEventListener('click', () => {
  let currentMinutes = parseInt(minutes.textContent);

  // Incrementa os minutos em 5
  currentMinutes += 5;

  // Verifica se os minutos excederam 60
  if (currentMinutes <= 60) {
    // Atualiza a exibição dos minutos
    minutes.textContent = currentMinutes.toString().padStart(2, '0');

  } else return

})

minus.addEventListener('click', () => {
  let currentMinutes = parseInt(minutes.textContent);

  // Incrementa os minutos em 5
  currentMinutes -= 5;

  // Verifica se os minutos excederam 60
  if (currentMinutes >= 0) {
    // Atualiza a exibição dos minutos
    minutes.textContent = currentMinutes.toString().padStart(2, '0')
  } else return

})

const buttons = document.querySelectorAll('.sounds button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove a classe 'selected' de todos os botões
    buttons.forEach(btn => btn.classList.remove('selected'));
    // Adiciona a classe 'selected' apenas ao botão clicado
    button.classList.add('selected');
  });
});








