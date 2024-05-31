How to add bootstrap to an angular project:

1. npm install bootstrap //oppure: npm i bootstrap-scss  
per le icone: npm i bootstrap-icons --save e in style.css: @import "~bootstrap-icons/font/bootstrap-icons.css"; (se non va scrivo tutto il percorso "../node_modules/bootstrap-icons/font/bootstrap-icons.css")
2. add the following to angular.json:
    "styles": [
        "node_modules/bootstrap/scss/bootstrap.scss", //se installo bootstrap, altrimenti ../bootstrap-scss/.. ???
        "src/styles.scss"
    ],
        "scripts": [
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
    ]
/* solo se voglio usare le modali: */  
3. npm i @ng-bootstrap/ng-bootstrap //se da errori: npm i @ng-bootstrap/ng-bootstrap --legacy-peer-deps
4. add the following to app.module.ts:
    import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
    imports: [
        NgbModule
    ]
5. add the following to app.component.html:
<ul class="list-group col-sm-12 col-md-4 col-lg-3 my-2" *ngFor="let el of anime">
    <a routerLink="/detail/{{el.id}}">
        <img src="{{el.image}}" alt="">
        <p>{{el.title}}</p>
    </a>
</ul>
<div *ngFor="let el of anime" class="row justify-content-center">
    <!-- with routerLink you can only specify static link, with [routerLink] you can use dynamic values to generate the link -->
    <div class="col-sm-12 col-md-6 col-lg-4 my-2" routerLink="/detail/{{el.id}}" style="width: 18rem;">
        <div class="card" role="button">
            <img src="{{el.image}}" class="card-img-top" alt="">
            <!-- ...="{{...}}" is for binding with string interpolation, [...]="..." is for object binding -->
            <div class="card-body">
                <h5 class="card-title">{{el.title}}</h5>
                <p class="text-muted">{{el.title}}</p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                </div>
            </div>
        </div>
    </div>
</div>
