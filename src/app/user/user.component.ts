import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // Using Signal inputs
  // avatar = input.required<string>();
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();
  // Using Signal output
  // select = output<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
