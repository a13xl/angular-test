import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChildren('categoryBtn') categoryBtn: QueryList<ElementRef>;

  name = 'Angular';
  categories = ['JS', 'Angular', 'Python'];

  disableCategoryBtn(id: number) {
    console.log(id);
    // this.categoryBtn.forEach((categoryBtn: ElementRef) => console.log(categoryBtn.nativeElement));
    //console.log(this.categoryBtn[id].nativeElement);
  }
}
