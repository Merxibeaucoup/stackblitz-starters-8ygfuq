

---

# User List Data Management Solution

## Overview

This innovative solution manages user list data in a web application, specifically addressing the challenge of differentiating between page refreshes and tab closures. The solution effectively utilizes local storage to retain data on page refresh while removing it upon tab closure, ensuring optimal user experience.

## Features

- **Data Persistence**: User list data is stored in the browser's local storage, allowing users to refresh the page without losing their information.
- **Data Clearance on Tab Close**: Data is automatically removed from local storage when the user closes the tab, ensuring that sensitive or temporary information does not persist longer than necessary.
- **User-Friendly Integration**: Simple implementation in Angular, leveraging lifecycle hooks for effective data management.

## Implementation

### 1. **Storing Data in Local Storage**

The solution checks if the current URL includes "user". If it does, it retrieves the user list data and stores it in local storage.

```javascript
if (window.location.href.includes('user')) {
    const users = this.getUsers(); // Method to fetch or create user data
    localStorage.setItem('userData', JSON.stringify(users));
}
```

### 2. **Handling Page Unload Events**

An event listener is added for the `beforeunload` event to remove the user list data from local storage when the user closes the tab.

```javascript
ngOnInit() {
    window.addEventListener('beforeunload', this.handleBeforeUnload);
}

handleBeforeUnload = (event) => {
    localStorage.removeItem('userData');
};

ngOnDestroy() {
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
    localStorage.removeItem('userData'); // Clear data on component destruction
}
```

### 3. **User Experience**

- Users can freely refresh the user list page without losing their input or user entries.
- Once the user decides to close the tab, all data is removed, protecting sensitive information.

## How It Works

1. **When the User List Page Loads**: If the URL contains "user," it fetches the user list data and saves it in local storage.
2. **On Page Refresh**: The user list data persists due to local storage, allowing users to continue where they left off.
3. **On Tab Closure**: The `beforeunload` event triggers the removal of user list data, ensuring it is not available if the tab is reopened.

## Benefits

- **Enhanced User Control**: Users have complete control over their user list data, which remains temporary and does not linger after the session ends.
- **Simplified Data Management**: The implementation leverages existing web APIs for straightforward management of user data.

## Conclusion

This solution addresses a common need in web applications to balance user data persistence with privacy and security. It serves as a robust foundation for any application that requires temporary data management without the complexity of server-side storage.

---

## How to Use

1. Clone the repository or integrate the solution into your Angular application.
2. Customize the `getUsers` method to suit your data-fetching needs.
3. Ensure to handle any additional cleanup or state management as required by your application logic.

---

Feel free to modify any sections further based on your project's specifics or your personal style!
