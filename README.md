## How to make changes locally

### Prerequisites

-   Git
-   Node.js
-   Typescript
-   Yarn (recommended)

### Installation

1. Open your terminal. Navigate to the desired location where you will host the git repository: `cd [path/to/your/desired/host/folder]`
2. Clone this repository by running `git clone https://github.com/Eagletech-robotic/website.git`
3. Install all the necessary dependencies by running `yarn install`

### Make your changes

1. Open your terminal. Navigate to the location where you have your folder: `cd [path/to/your/folder]`
2. Run `yarn start` to start the development server. The server should open up in your browser. If not, go to http://localhost:3000 (or as specified in the terminal output).
3. Make your changes. The server will automatically reload to show your changes each time you save a file.

### Commit your changes

Once you are sastified with your changes, you can commit them to synchronise them with the remote repository.

#### Using interface

1. Stage the files you want to commit.
2. Add a commit message describing what you changed (necessary).
3. Press "Commit & Push", then "Sync".

#### Using command line

1. Run `git add .` to stage every file, or `git add [path/to/your/file]` to add a specific file.
2. Run `git commit -m "<your-commit-message>"` to add a commit message (necessary).
3. Finally, run `git push origin <your-branch-name>`, replacing <your-branch-name> with the appropriate branch (usually "main").
