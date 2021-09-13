import CartStatusMachine from './CartStatusMachine'

interface StatusInterface {
  machine: CartStatusMachine
  handle: () => void
}

export default StatusInterface
