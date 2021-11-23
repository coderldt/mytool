import { createApp } from 'vue'
import InputAssembly from './input'


function registerCom(app) {
  console.log(app);
  const input = new InputAssembly({ placeholder: '1', value: '2' })
  app.component('LInput', input.render())
}

console.log(InputAssembly);
export { InputAssembly, registerCom }