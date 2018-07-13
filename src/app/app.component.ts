import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Localization using ngx-translate';

    constructor(private translateService: TranslateService) {
    }

    currentLang(): string {
        return this.translateService.currentLang === 'en' ? 'English' : 'Spanish';
    }

    toggleLang() {
        const newLang = this.translateService.currentLang === 'en' ? 'es' : 'en';
        this.translateService.use(newLang);
    }

}
