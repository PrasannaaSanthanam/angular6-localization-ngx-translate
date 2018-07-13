import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-using-service',
    templateUrl: './using-service.component.html',
    styleUrls: ['./using-service.component.css']
})
export class UsingServiceComponent implements OnInit {
    readonly messageKeys = ['fact1', 'fact2', 'fact3', 'fact4', 'fact5', 'fact6'];
    readonly messageKeyParam = {value: 'Dynamic Param'};
    readonly parameterizedKey = 'parameterizedKey';
    translatedFacts: string[] = [];
    codeSnippet = `
        // listen for lang changes
        this.translateService.onLangChange
            .subscribe((params: LangChangeEvent) => {
                // reload messages as per new lang selection ..
            });
        this.translateService.get(messageKey, optionalParams)
            .subscribe((localizedString: string) => console.log(localizedString));`;

    constructor(private translateService: TranslateService) {
        this.translateService.onLangChange
            .subscribe((params: LangChangeEvent) => {
                this.reloadMessages();
            });
    }

    ngOnInit() {
    }

    private reloadMessages() {
        this.translatedFacts = [];
        this.messageKeys
            .forEach(value => {
                this.translateService.get(value).subscribe((localizedString: string) => {
                    this.translatedFacts.push(localizedString);
                });
            });
        this.translateService.get(this.parameterizedKey, this.messageKeyParam)
            .subscribe((localizedString: string) => {
                this.translatedFacts.push(localizedString);
            });
    }
}
