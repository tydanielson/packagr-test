import { Injectable, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia } from '@angular/flex-layout';

export const enum ScreenSizes {
  XS,
  SM,
  MD,
  LG
}
@Injectable()
export class BreakpointService implements OnDestroy {

  public breakpoint = new BehaviorSubject<ScreenSizes>(ScreenSizes.XS); // mobile first baby!! :)
  public _window: any;
  private watcher: any;

  protected widths = {
    small: 600,
    medium: 960,
    large: 1280
  };

  constructor(private media: ObservableMedia) {
    this.watcher = media.asObservable().subscribe(() => {
      console.log('changed')
    });
  }


  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
