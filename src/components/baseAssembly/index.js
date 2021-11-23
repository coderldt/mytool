import InputAssembly from './input.vue'


function registerCom(app) {
  app.component('LInput', InputAssembly)
  console.log(app);
}

export { registerCom }