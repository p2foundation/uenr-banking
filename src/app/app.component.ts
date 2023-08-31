import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'UENR-Online Banking App';
  location: any;
  routerSubscription: any;

  constructor(private router: Router) {
  }

  ngOnInit(){
    this.recallJsFuntions();
  }

  recallJsFuntions() {
    this.router.events
      .subscribe((event) => {
        if ( event instanceof NavigationStart ) {
          $('.preloader').fadeIn('slow');
        }
      });
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
        $.getScript('../assets/js/custom.js');
        $('.preloader').fadeOut('slow');
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0)
      });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}
