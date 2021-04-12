import ApiClientResponse from "./api.client.response";
import Client from "./client";

export default class SantanderClient extends Client {
  verifyAccount(operation) {
    return operation.bank === "santander";
  }

  send(request) {
    if (request.originBank === "santander") {
      return new ApiClientResponse(200, "Ok from santander");
    }
    return new ApiClientResponse(500, "Bank not valid");
  }
}
