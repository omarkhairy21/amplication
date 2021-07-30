import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("Sample app")
  .setDescription(
    'Sample application for e-commerce\n\n## Congratulations! Your application is ready.\n\nPlease note that all endpoints are secured with HTTP basic authentication.\nBy default, your app comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .setVersion("x8cbmzi8")
  .addBasicAuth()
  .build();

export const swaggerSetupOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "Sample app",
};
