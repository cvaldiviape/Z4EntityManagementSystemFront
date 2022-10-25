import { Component, OnInit, HostListener  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../../../models/others/item';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {
  public openSidebar: boolean
  public openSubMenu: boolean;
  public username: string;
  public appName: string;
  public items: Item[];
  public isMobileSize: boolean;

  constructor(
    private _activedRoute: ActivatedRoute,
    private _router: Router,
  ) {
    this.openSidebar = false;
    this.isMobileSize = true;
    this.openSubMenu = false;
    this.username = 'Usuario anónimo';
    this.appName = 'WhatsApp';
    this.items = [
      {
        title: 'Home',
        iconPrimary: 'home',
        iconSecondary: 'chevron_right',
        path: 'home',
      },
      {
        title: 'Contactos',
        iconPrimary: 'contact_mail',
        iconSecondary: 'chevron_right',
        path: 'contact',
      },
      {
        title: 'Enviados',
        iconPrimary: 'send',
        iconSecondary: 'chevron_right',
        path: 'sending',
      },
      {
        title: 'Recibidos',
        iconPrimary: 'mark_as_unread',
        iconSecondary: 'chevron_right',
        path: 'received',
      },
    ];
  }

  ngOnInit(): void {
    this.questionSizeDisplay();
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.questionSizeDisplay();
  }

  setOpenSidebar(eventOpenSidebar: boolean): void {
    this.openSidebar = !eventOpenSidebar;
  }

  setClosedSidebarOnlyMobile(): void {
    if(this.isMobileSize){
      this.openSidebar = false;
    }
  }
  
  questionSizeDisplay(): void {
    if (window.innerWidth < 479) {
      this.openSidebar = false;
      this.isMobileSize = true;
      this
    } else if (window.innerWidth < 767) {
      this.openSidebar = false;
      this.isMobileSize = true;
    } else if(window.innerWidth < 991) {
      this.openSidebar = false;
      this.isMobileSize = false;
    } else if(window.innerWidth < 1199) {
      this.openSidebar = false;
      this.isMobileSize = false;
    } else if(window.innerWidth >= 1200){
      this.openSidebar = true;
      this.isMobileSize = false;
    }
  }

}