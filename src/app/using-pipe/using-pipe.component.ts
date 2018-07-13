import { Component, DoCheck } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-using-pipe',
    templateUrl: './using-pipe.component.html',
    styleUrls: ['./using-pipe.component.css'],
    providers: [TranslatePipe]
})
export class UsingPipeComponent implements DoCheck {

    readonly messageKeys = ['fact1', 'fact2', 'fact3', 'fact4', 'fact5', 'fact6'];
    readonly parameterizedKey = 'parameterizedKey';
    readonly pipeInComponent = `
        const localizedMessage = this.translatePipe.transform(messageKey);

        <li *ngFor="let localizedString of translatedFacts ; let last = last">
            <p *ngIf="!last">{{ localizedString }}</p>
            <p *ngIf="last" [innerHTML] = localizedString> </p>
        </li>`;

    readonly htmlPipeCode = `
        <ul>
           <li *ngFor="let fact of facts">
                <p>"{{ fact | translate }}"</p>
           </li>
           <!-- To render html tags along with message and to inject dynamic params use innerHTML-->
           <!-- "parameterizedKey": "<code> This message has a DYNAMIC parameter <strong> {{ value }} </strong></code>" -->
           <span [innerHTML] = "'parameterizedKey' | translate: messageKeyParam"> </span>
        </ul>`;

    readonly messageKeyParam = {value: 'Dynamic Param'};

    translatedFacts: string[] = [];

    constructor(
        private translatePipe: TranslatePipe) {
    }

    ngDoCheck(): void {
        this.translatedFacts = [];
        this.messageKeys
            .forEach(key => this.translatedFacts.push(this.translatePipe.transform(key)));
        this.translatedFacts.push(this.translatePipe.transform(this.parameterizedKey, this.messageKeyParam));
    }
}
