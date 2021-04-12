import ApiClientResponse from "./api.client.response";

export default class ApiClient {
  verifyAccount(operation) {
    if (operation.bank === "santander") {
      return true;
    } else if (operation.bank === "bci") {
      return true;
    }
    return false;
  }

  send(request) {
    switch (request.originBank) {
      case "santander":
        return new ApiClientResponse(200, "Ok from santander");
      case "bci":
        return new ApiClientResponse(200, "Ok from bci");
      case "bbva":
        return new ApiClientResponse(200, "Ok from bbva");
      default:
        return new ApiClientResponse(500, "Bank not valid");
    }
  }
}
