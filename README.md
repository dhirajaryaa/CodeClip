
# CodeClip

CodeClip is a **code snippet management tool** designed to help developers store, organize, and share reusable code snippets effortlessly. The tool ensures that frequently used code snippets are always accessible, saving time and increasing productivity.

## Features

- **Snippet Storage**: Save your commonly used code snippets in one centralized location.
- **Tagging & Categorization**: Organize snippets using custom tags for easy retrieval.
- **Search Functionality**: Quickly find code snippets using an intuitive search feature.
- **Snippet Sharing**: Share your code snippets with teammates or the community via a unique link.
- **Syntax Highlighting**: View your code with proper syntax highlighting for easier readability.
- **Multiple Language Support**: Store snippets in various programming languages such as JavaScript, Python, HTML, CSS, and more.
- **Cloud Storage**: Snippets are stored securely in the cloud using Appwrite's backend services.

## Tech Stack

- **Frontend**: ReactJS
- **Backend**: Appwrite for BaaS (Backend as a Service)
- **Database**: Appwrite Database
- **Styling**: tailwindcss and sadcnui

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dhirajaryaa/codeclip.git
   cd codeclip
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Appwrite:
   - Set up an Appwrite project and database to store the snippets.
   - Update the necessary environment variables for Appwrite in the `.env` file.

4. Run the project:
   ```bash
   npm run dev
   ```

## Usage

1. Sign up or log in using the authentication system powered by Appwrite.
2. Create new snippets, tag them, and organize them by category.
3. Use the search bar to quickly locate snippets.
4. Share snippets with others using a shareable link.

## Contributing

Contributions are welcome! If you'd like to improve the project or add new features, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize it according to your project's needs!
