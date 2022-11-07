import {Component} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
      <div class="layout-footer">
          <a href="/" class="logo-container">
              <img src="assets/layout/images/logo-Bellota-transp.png" alt="harmony-layout" />
          </a>

          <div class="footer-icons">
              <ul>
                  <li>
                      <a href="https://www.facebook.com/BellotaSuramerica">
                          <i class="pi pi-facebook"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://instagram.com/bellotasuramerica?igshid=YmMyMTA2M2Y=">
                          <i class="pi pi-instagram"></i>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
    `
})
export class AppFooterComponent {

}
