import ApiClientRequest from "./api.client.request";
import ClientError from "./client.error";
import ClientFactory from "./client.factory";
import TransferResponse from "./transfer.response";

export default class TransferService {
  constructor(storage) {
    this.storage = storage;
  }

  transfer(opOrigin, opDestiny) {
    try {
      let factory = new ClientFactory();
      let clientOrigin = factory.build(opOrigin.bank);
      let clientDestiny = factory.build(opDestiny.bank);

      let originResponse = clientOrigin.verifyAccount(opOrigin);
      let destinyResponse = clientDestiny.verifyAccount(opDestiny);

      if (originResponse && destinyResponse) {
        let clientRequest = new ApiClientRequest(opOrigin, opDestiny);
        let responseApi = clientOrigin.send(clientRequest);

        this.storage.save(responseApi.message);

        return new TransferResponse(responseApi.code, responseApi.message);
      }
      return new TransferResponse(501, "The accounts aren't corrects");
    } catch (ex) {
      return new TransferResponse(509, "Bank not found");
    }
  }
}
