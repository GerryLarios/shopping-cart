import StatusInterface from './StatusInterface'
import CartStatusMachine from './CartStatusMachine'
import { DEFAULT_STATE } from '../../../constants'

class PaymentStatus implements StatusInterface {
  machine: CartStatusMachine

  constructor(machine: CartStatusMachine) {
    this.machine = machine
  }

  handle = () => {
    const balance = this.machine.state.user.balance - this.machine.state.totalPrice
    const user = { ...this.machine.state.user, balance }
    const props = { ...DEFAULT_STATE, user }
    this.machine.setStateMachineProps(props)
  }
}

export default PaymentStatus
