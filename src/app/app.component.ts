import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChildren('categoryBtn', { read: ElementRef })
  categoryBtn: QueryList<ElementRef>;

  name = 'Angular';
  categories = ['JS', 'Angular', 'Python'];

  disableCategoryBtn(id: number) {
    this.enableBtns();
    this.categoryBtn.toArray()[id].nativeElement.disabled = true;
  }

  enableBtns() {
    this.categoryBtn.forEach((categoryBtn: ElementRef) => {
      categoryBtn.nativeElement.disabled = false;
    });
  }
}
