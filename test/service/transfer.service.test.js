import ClientFactory from "../../main/service/client.factory";
import Operation from "../../main/service/operation";
import TransferService from "../../main/service/transfer.service";
import StorageDummy from "./storage.dummy";

test("shouldReturn200WhenOriginAndDestinyAreCorrects", () => {
  let storage = new StorageDummy();
  let service = new TransferService(storage);

  let opOrigin = new Operation(10092, "santander", 50400);
  let opDestiny = new Operation(98128, "bci", 90500);

  let response = service.transfer(opOrigin, opDestiny);

  expect(response.code).toBe(200);
});

test("shouldReturn501WhenOriginOrDestinyIsNotCorrect", () => {
  let storage = new StorageDummy();
  let service = new TransferService(storage);

  let opOrigin = new Operation(10092, "bbva", 50400);
  let opDestiny = new Operation(98128, "santader", 90500);

  let response = service.transfer(opOrigin, opDestiny);

  expect(response.code).toBe(509);
});
