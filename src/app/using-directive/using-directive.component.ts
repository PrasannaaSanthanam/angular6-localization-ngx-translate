import { Component, OnInit } from '@angular/core';
import { TranslateDirective } from '@ngx-translate/core';

@Component({
    selector: 'app-using-directive',
    templateUrl: './using-directive.component.html',
    styleUrls: ['./using-directive.component.css'],
    providers: [TranslateDirective],
})
export class UsingDirectiveComponent implements OnInit {
    readonly messageKeys = ['fact1', 'fact2', 'fact3', 'fact4', 'fact5', 'fact6'];
    readonly codeSnippet = `
        <li *ngFor="let fact of messageKeys">
            <p translate>{{ fact }}</p>
        </li>`;

    ngOnInit() {
    }
}
