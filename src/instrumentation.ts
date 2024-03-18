import { CommunicationProtocolEnum, DaprServer } from "@dapr/dapr";

export async function register() {
  const server = new DaprServer({
    serverPort: "4000",
    communicationProtocol: CommunicationProtocolEnum.GRPC,
  });

  await server.start();
}
