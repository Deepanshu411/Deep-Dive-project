import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  add = output<{title: string; text: string}>();

  ngOnInit() {
    console.log('OnInit');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
    console.log('After View Init')
    console.log(this.form().nativeElement);
  }

  onSubmit(title: string, text: string) {
    this.add.emit({ title, text });
    this.form().nativeElement.reset();
  }
}
