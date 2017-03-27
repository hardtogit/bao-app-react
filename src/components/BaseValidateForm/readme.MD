# ValidateForm组件说明文档

## 说明
  验证表单内BaseInput, PasswordInput... 当点击Button时，提交表单,验证通过，可提交，验证不通过，无法提交
  此组件配合BaseInput, PasswordInput, Button...使用
  BaseInput, PasswordInput 要给props 赋值type＝‘validateItem’ 生效
  Button 要给props 赋值type＝‘submit’ 生效


## API
  - onValid {Function}: 表单有效，点击提交按钮，触发此函数
  - onInvalid {Function}: 表单中验证出错，出发此函数

## METHOD
  - getValue 获取表单内BaseInput, PasswordInput...的值


- example
```javascript
class Login extends Component {
  constructor(props) {
    super(props)
  }

  onValid() {
    const data = this.refs.form.getValue()
  }

  onInvalid(name, value, message) {
    this.refs.tipbar.open(message)
  }


  render() {
    return (
      <div style={{flex: 1}} onStartShouldSetResponder={this.containerTouched.bind(this)}>
        <div style={styles.logoContainer}>
          <img style={styles.logo} ref='ss' src={require('../../assets/images/logo.png')} />
        </div>
        <ValidateForm ref='form' onValid={this.onValid.bind(this)} onInvalid={this.onInvalid.bind(this)}>
            <BaseInput type='validateItem' />
            <PasswordInput type='validateItem'/>
            <Button type='submit' />
        </ValidateForm>
      </div>
    )
  }
}
```
