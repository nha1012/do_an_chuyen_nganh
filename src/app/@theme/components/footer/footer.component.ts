import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Xây dựng bởi <b><a href="http://www.ditagis.hcmut.edu.vn/" target="_blank">DITAGIS</a></b> {{year}}
    </span>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
