import ApiClientResponse from "./api.client.response";
import Client from "./client";

export default class BCIClient extends Client {
  verifyAccount(operation) {
    return operation.bank === "bci";
  }

  send(request) {
    if (request.originBank === "bci") {
      return new ApiClientResponse(200, "Ok from bci");
    }
    return new ApiClientResponse(500, "Bank not valid");
  }
}
