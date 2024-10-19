# Divar

This is a web application built with React 18 and Vite 5, using **React Query** for data fetching, **axios** for API requests, and **react-hot-toast** for notifications. The app allows users to manage posts and categories, upload images, and handle authentication with access token renewal.

## Features

- **Category Management**: Add, display, and manage categories with the ability to upload icons.
- **Post Management**: Add, list, and view posts with features like image uploading, price formatting, and category assignment.
- **Authentication**: Handles authentication using access tokens with automatic token renewal.
- **Notifications**: Displays success or error messages using `react-hot-toast`.
- **Persian Locale Support**: Includes support for Persian date formats and number formatting.
  
## Technologies Used

- **React 18**: Frontend framework
- **Vite 5**: Fast build tool
- **React Query**: Data fetching and caching
- **Axios**: HTTP client for API requests
- **react-hot-toast**: User notification system
- **CSS Modules**: Scoped and modular CSS styling
- **Persian Locale Support**: Handling Persian dates and numbers
- **FormData**: For handling file uploads in forms

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/matador7495/Divar-App.git
   cd Divar-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   VITE_BASE_URL=https://your-api-base-url.com/
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Use

1. **Login and Mobile Authentication**:  
   Start by entering your mobile number. After receiving the OTP, input it to complete authentication. Once verified, you can access the different sections of the application.

2. **Add a Category**:  
   After logging in, navigate to the "Add Category" form. Fill in the necessary fields (name, slug, and icon), and submit the form. The new category will be added and shown in the category list.

3. **Add a Post (Ad)**:  
   Go to the "Add Post" form, where you can enter the title, description, price, city, and category for your ad. You can also upload images for the post. After submitting, your post will be visible in your personal post list.

4. **Authentication Token Management**:  
   If your access token expires, the app will automatically request a new token and continue the process seamlessly for you.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.