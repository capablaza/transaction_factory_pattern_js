export default class ApiClientRequest {
  constructor(origin, destiny) {
    this.originAccount = origin.account;
    this.originBank = origin.bank;
    this.originAmount = origin.amount;

    this.destinyAccount = destiny.account;
    this.destinyBank = destiny.bank;
    this.destinyAmount = destiny.amount;
  }
}
