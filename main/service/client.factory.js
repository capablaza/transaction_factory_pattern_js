import BCIClient from "./bci.client";
import ClientError from "./client.error";
import SantanderClient from "./santader.client";

export default class ClientFactory {
  build(bank) {    
    switch (bank) {            
      case "santander":
        return new SantanderClient();
      case "bci":
        return new BCIClient();
      default:
        throw new ClientError();
    }
  }
}
