## Table of Contents
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Setup project](#setup-project)
- [Frameworks & libraries](#frameworks--libraries)
- [Design patterns](#design-patterns)
- [Improvements](#improvements)
- [Switching datasource](#switching-datasource)

## Demo
For a quick preview. You can check out the demo version from [here](https://wongkot.github.io/bookstore/).

## Prerequisites
To get started, make sure that the following programs are installed on your system.
- Visual Studio Code
- Visual Studio 2022 (v17.12 or later)
- .NET 9.0 SDK
- Node.js (v22 or later)
- Angular CLI

## Setup project
1. Download or clone the repo to your preferred directory.
2. Open file from `./api/API.sln` with Visual Studio.
3. Type the following command in "Package Manager Console". 
     ```c
     dotnet restore
     ```
4. Open file `appsettings.json` and modify `DefaultConnection` with the provided connection string.
    ```json
    {
      "ConnectionStrings": {
        "DefaultConnection": "<your-connection-string>",
      },
    }
    ```
    > ‼️**If you don't have connection string, you have to create your own MongoDB server and follow the next step**
5. In case you use your own MongoDB connection string.
   Make sure that you have database with name "my-bookstore-db" or you can replace the database name in `appsettings.json`
    ```json
    {
      "AppConfig": {
        "DatabaseName": "<your-database-name>",
      },
    }
    ```
6. Select debug profile to "IIS Express" and click on the button to start the API.
7. Open the folder `./web-app/` with Visual Studio Code.
8. Run the following command in the terminal window.
     ```c
     npm install
     ```
9. Start web application by running the command.
     ```c
     ng serve
     ```
10. Once the server is up and running, navigate to `http://localhost:4200/` on your browser to use the application.

## Frameworks & libraries
Featured frameworks and libraries used in this project.
- **[Angular](https://angular.dev/)** - Frontend framework for building web application.
- **[Bootstrap](https://getbootstrap.com/)** - CSS framework for styling web application.
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** - SVG icons used in web application.
- **[Bootswatch](https://bootswatch.com/)** - Prebuilt themes for Bootstrap.
- **[angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages)** - Deploying Angular project to GitHub pages directly from Angular CLI
- **[DotNet](https://dotnet.microsoft.com)** - Framework used for building backend application.
- **[Swashbuckle.AspNetCore](https://www.nuget.org/packages/swashbuckle.aspnetcore)** - Backend API documentation for DotNet application.
- **[MongoDB.Driver](https://www.nuget.org/packages/mongodb.driver)** - Library for connecting DotNet application with MongoDB

## Design patterns
Software design pattern along with notable approaches used in this project.
- **Repository pattern** - Make your code flexible and allow mocking data for making unit test easier.
- **Dependency injection** - Same reason like Repository Pattern.
- **Angular signal** - Built-in Angular feature for state management.
- **Modular project structure** - Make application scalable.

## Improvements
Some improvement that I want to improve on this project. If I have more free time.
- UI/UX improvements
  - Show popup confirmation before removing book orders.
  - Display current active button on the navigation bar.
  - Etc.
- Global exception/error handling on both frontend and backend application.
- Dockerize project.
- Hosting project on cloud platform.
- Unit testing.
- Write comments.

## Switching datasource
The default book datasource that web application used for accessing books data has limited request per daily usage.
If there is any errors regarding to this problem or you are experiencing issues connecting with the API.
These are the available data source options you can adjust in the source code of the Angular project to ensure the application works as intended.
- **Bookstore datasource** - modify code from `./web-app/src/modules/bookstore/services/bookstore-state-service.ts`
  - **Option 1** - Use `MockBookstoreService` to get in-memory books data without connecting to the API
      ```ts
      import { MockBookstoreService } from '@app/modules/bookstore/services/mock-bookstore-service';

      // ...
      
      constructor() {
		    this._bookStoreService = inject(MockBookstoreService); // 👈 Replace here
		    // ...
	  }
      ```
  - **Option 2** - Use `ApiMockBookstoreService` to get books data from backend application API
      ```ts
      import { ApiMockBookstoreService } from '@app/modules/bookstore/services/api-mock-bookstore-service';

      // ...
      
      constructor() {
		    this._bookStoreService = inject(ApiMockBookstoreService); // 👈 Replace here
		    // ...
	  }
      ```
- **Book order datasource** - modify code from `./web-app/src/modules/bookstore/services/book-order-state-service.ts`
  - **Option 1** - Use `MockBookOrderService` to get in-memory book orders data without connecting to the API
      ```ts
      import { MockBookOrderService } from '@app/modules/bookstore/services/mock-book-order-service';

      // ...
      
      constructor() {
		    this._bookStoreService = inject(MockBookOrderService); // 👈 Replace here
		    // ...
	  }
      ```