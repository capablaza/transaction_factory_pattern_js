import ApiClient from "./api.client";
import ApiClientRequest from "./api.client.request";
import TransferResponse from "./transfer.response";

export default class TransferService {
  constructor(storage) {
    this.storage = storage;
  }

  transfer(opOrigin, opDestiny) {
    let client = new ApiClient();

    let originResponse = client.verifyAccount(opOrigin);
    let destinyResponse = client.verifyAccount(opDestiny);

    if (originResponse && destinyResponse) {
      let clientRequest = new ApiClientRequest(opOrigin, opDestiny);
      let responseApi = client.send(clientRequest);

      this.storage.save(responseApi.message);

      return new TransferResponse(responseApi.code, responseApi.message);
    }
    return new TransferResponse(501, "The accounts aren't corrects");
  }
}
