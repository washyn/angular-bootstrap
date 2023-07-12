# Sample abp service proxy generation

- Para generar los service proxy y models se hizo uso del comando "abp generate-proxy -t ng", es recomendable que las librerias de backend y front sean tengan la misma version, el generador de proxy de abp, se requiere que sea de la misma verion del proyecto angular.

uninstall tool
dotnet tool uninstall -g Volo.Abp.Cli

install tool
dotnet tool install -g Volo.Abp.Cli --version 6.0.3

# AngularBootstrap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
