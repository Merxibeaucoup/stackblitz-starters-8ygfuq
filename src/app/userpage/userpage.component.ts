import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-userpage',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './userpage.component.html',
  styleUrl: './userpage.component.scss',
})
export class UserpageComponent {
  constructor() {}

  ngOnInit(): void {
    // Add beforeunload event listener to handle cleanup
    window.addEventListener('beforeunload', this.handleBeforeUnload.bind(this));
  }
  
  handleBeforeUnload(event: BeforeUnloadEvent): void {
    // Clear specific local storage data when the tab is closed
    localStorage.removeItem('userData');
    // Optional: This prevents the default behavior
    event.preventDefault();
    event.returnValue = ''; // Prompts the user if they try to leave
  }
  ngOnDestroy(): void {
    // Remove beforeunload event listener
    window.removeEventListener(
      'beforeunload',
      this.handleBeforeUnload.bind(this)
    );
    // Clean up local storage
    localStorage.removeItem('userData');
  }


}
