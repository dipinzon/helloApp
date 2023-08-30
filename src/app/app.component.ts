import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Diego';
  age = '44';
  btnDisabled = true;
  person = {
    name: 'Fernando',
    age: 44
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age +=1;
  }

  onScroll(event: Event)
  {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
      const element = event.target as HTMLInputElement;
      this.person.name = element.value; 

  }
}
