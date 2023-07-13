How to add bootstrap to an angular project:

1. npm install bootstrap //oppure: npm i bootstrap-scss
2. add the following to angular.json:
    "styles": [
        "node_modules/bootstrap/scss/bootstrap.scss",
        "src/styles.scss"
    ],
        "scripts": [
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]
3. npm i @ng-bootstrap/ng-bootstrap
4. add the following to app.module.ts:
    import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
    imports: [
        NgbModule
    ]
5. add the following to app.component.html:
