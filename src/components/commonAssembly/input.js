class InputAssembly {
  constructor({ type = 'text', placeholder, value }) {
    this.value = value
    this.placeholder = placeholder
    this.type = type
    this.inputValue = ''
  }

  render() {
    return <el-input value={this.inputValue} placeholder={this.placeholder}></el-input>
  }
}

export default InputAssembly