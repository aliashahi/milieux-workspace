import { imgUrlList, items } from './data';
import { MilieuxSidenavItem } from 'dist/sidenav';
import { MilieuxHeaderConfig } from 'dist/sidenav';
import { MilieuxFooterConfig } from 'dist/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MilieuxTheme, MilieuxSidenavComponent } from 'dist/sidenav';

@Component({
  selector: 'miliuex-sidenav-tab',
  templateUrl: './milieux-sidenav.component.html',
  styleUrls: ['./milieux-sidenav.component.scss'],
})
export class MilieuxSidenavTabComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MilieuxSidenavComponent;

  headerConfig: MilieuxHeaderConfig = {
    svgIcon: 'milieux',
    label: 'Milieux',
  };

  footerConfig: MilieuxFooterConfig = {
    icon: 'settings',
  };

  theme: MilieuxTheme = {
    backColor: '#fcfbff',
    backHoverColor: 'rgb(223 217 255)',
    backFocusColor: '#efecff',
    color: '#4b4c5d',
    openedWidth: 250,
    foldedWidth: 60,
    defaultpadding: 15,
  };

  previewImgSrc =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZk1p8br7Epis3PYyhpg5BOqp60EjUBszqQ&usqp=CAU';

  _items = [];
  _imgUrlList = [];

  public get items(): MilieuxSidenavItem[] {
    return this._items;
  }
  public get imgUrlList(): any[] {
    return this._imgUrlList;
  }

  constructor() {
    this._items = items;
    this._imgUrlList = imgUrlList;
    // setInterval((i) => {
    //   let index = Math.floor(Math.random() * this._imgUrlList.length);
    //   this.previewImgSrc = this._imgUrlList[index].id;
    //   this.sidenav.open(this._imgUrlList[index].id);
    //   let element: HTMLElement = document.getElementById('scrollview');
    //   element.scrollTo({
    //     behavior: 'smooth',
    //     left: 400 * index - 200,
    //   });
    // }, 5000);
  }

  ngOnInit(): void {}

  navClicked($event: any) {
    this.previewImgSrc = $event.id;
    this.sidenav.open($event.id);
  }

  onPreview($event: any) {
    this.previewImgSrc = $event.id;
    this.sidenav.open($event.id);
  }

  onScroll(direction: 'right' | 'left') {
    let element: HTMLElement = document.getElementById('scrollview');
    element.scrollTo({
      behavior: 'smooth',
      left:
        direction == 'left'
          ? element.scrollLeft - 1500
          : element.scrollLeft + 1500,
    });
  }
}
