import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  users: any[] = []; // Property to store diaries


  constructor() { }

  ngOnInit(): void {
    this.loadDiaries(); // Load diaries on initialization
  }

  loadDiaries(): void {
    // Only load diaries if the URL includes 'diary'
   
      this.users = this.getDiaries(); // Fetch the diaries
      if (window.location.href.includes('users')) {
      localStorage.setItem('userData', JSON.stringify(this.users)); // Set in local storage
    }
  }

  getDiaries(): any[] {
    // Mock function to simulate fetching users
    return [
        {
          id: 1,
          name: "Alice Smith",
          email: "alice.smith@example.com",
          age: 28,
          role: "Admin",
          isActive: true,
        },
        {
          id: 2,
          name: "Bob Johnson",
          email: "bob.johnson@example.com",
          age: 35,
          role: "User",
          isActive: true,
        },
        {
          id: 3,
          name: "Charlie Brown",
          email: "charlie.brown@example.com",
          age: 22,
          role: "User",
          isActive: false,
        },
        {
          id: 4,
          name: "Diana Prince",
          email: "diana.prince@example.com",
          age: 30,
          role: "Moderator",
          isActive: true,
        },
        {
          id: 5,
          name: "Edward Green",
          email: "edward.green@example.com",
          age: 40,
          role: "User",
          isActive: false,
        },
        {
          id: 6,
          name: "Fiona White",
          email: "fiona.white@example.com",
          age: 25,
          role: "Admin",
          isActive: true,
        },
        {
          id: 7,
          name: "George Black",
          email: "george.black@example.com",
          age: 33,
          role: "User",
          isActive: true,
        },
        {
          id: 8,
          name: "Hannah Yellow",
          email: "hannah.yellow@example.com",
          age: 27,
          role: "User",
          isActive: false,
        },
        {
          id: 9,
          name: "Ian Grey",
          email: "ian.grey@example.com",
          age: 31,
          role: "Moderator",
          isActive: true,
        },
        {
          id: 10,
          name: "Julia Red",
          email: "julia.red@example.com",
          age: 29,
          role: "User",
          isActive: true,
        },
      ];

      
      
  }

}
