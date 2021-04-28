import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b>Nhã, Mẫn, Dương, Phi, Trường</b> 03/2021
    </span>
    <div class="socials">
      <a href="https://github.com/nha1012" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/nha-nguyen1012/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
