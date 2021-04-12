import ApiClient from "./api.client";
import ApiClientRequest from "./api.client.request";
import BCIClient from "./bci.client";
import SantanderClient from "./santader.client";
import TransferResponse from "./transfer.response";

export default class TransferService {
  constructor(storage) {
    this.storage = storage;
  }

  transfer(opOrigin, opDestiny) {
    let clientOrigin = new SantanderClient();
    let clientDestiny = new BCIClient();

    let originResponse = clientOrigin.verifyAccount(opOrigin);
    let destinyResponse = clientDestiny.verifyAccount(opDestiny);

    if (originResponse && destinyResponse) {
      let clientRequest = new ApiClientRequest(opOrigin, opDestiny);
      let responseApi = clientOrigin.send(clientRequest);

      this.storage.save(responseApi.message);

      return new TransferResponse(responseApi.code, responseApi.message);
    }
    return new TransferResponse(501, "The accounts aren't corrects");
  }
}
