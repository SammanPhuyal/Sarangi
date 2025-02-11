# Sarangi - A React-based Piano App

Sarangi is a simple React-based piano app designed to emulate the sounds of a traditional piano using your computer's keyboard. The app allows you to play music using your keyboard keys and displays real-time notes, with key mappings provided as a guide for users.

## Features
- 🎶 **Interactive Piano**: Use the keyboard to play the Sarangi (a traditional Indian string instrument).
- 🎹 **Key Mappings**: Press the designated keys to play specific notes. The app includes a helpful mapping for each key.
- 🎧 **Audio Feedback**: Each note plays a corresponding sound when pressed.
- 📋 **Key Mapping Instructions**: A side panel displays the mapping of keys to notes for easy reference.
- ✨ **Responsive Design**: The app adapts to different screen sizes and provides a seamless experience on desktops and mobile devices.

## Getting Started

Follow the instructions below to set up and run the Sarangi app locally on your machine.

### Prerequisites
Ensure that you have the following tools installed:

- **Node.js** (Version 14 or above): [Install Node.js](https://nodejs.org/)
- **Yarn** or **npm**: A package manager to install dependencies.

### 1. Clone the Repository
Start by cloning the repository to your local machine:

```bash
git clone https://github.com/yourusername/sarangi.git
2. Install Dependencies
Navigate to the project directory and install the dependencies using either Yarn or npm:

Using Yarn:

```bash
cd sarangi
yarn install
Using npm:


```bash
cd sarangi
npm install
3. Start the Development Server
After installing the dependencies, you can run the app locally using the following command:

Using Yarn:

```bash
yarn start
Using npm:

```bash
npm start
The app will open in your default browser at http://localhost:3000.

App Structure
Here’s an overview of the important files and directories in the project:

src/: Contains all source files.
App.js: The root component.
components/: Contains the Key.js and Sarangi.js components.
hooks/: Contains the custom hook useSarangiPlayer.js to handle the logic for key presses and note sounds.
types/: Stores note values and configurations for the app.
assets/: Stores sound files for each note.
styles/: Contains the SCSS styles for the app.
Key Features & Functionality
1. Sarangi Component (Sarangi.js)
This component handles the display of the piano keys. It dynamically creates the keys and maps them to corresponding notes. It also manages user clicks and triggers sounds.

2. Key Component (Key.js)
This component represents each individual key on the piano. It listens for mouse clicks and highlights the key when active.

3. Key Mapping
Each keyboard key corresponds to a note on the Sarangi:

A → A
W → A#
S → B
D → C
R → C#
F → D
T → D#
G → E
H → F
U → F#
J → G
I → G#
4. Custom Hook (useSarangiPlayer.js)
This hook manages the state of the keys pressed and plays the corresponding sound. It also listens for keyboard events, ensuring that users can play notes using their computer keyboard.

Example Usage
Open the app: The app shows a piano interface with white and black keys.
Click on a key: Clicking a key will play the corresponding note.
Press a key on the keyboard: You can also press keys like A, S, D, etc., to play the notes. The key mapping is displayed in the instructions panel on the left.
View the current note: The current note being played is displayed in the instructions panel.


Fork the repository
Create a new branch (git checkout -b feature-name)
Make your changes
Commit the changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature-name)
Create a new Pull Request
License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Acknowledgments
React: JavaScript library for building user interfaces.
React-Sound: A useful library for sound handling (or any similar library used for sound in the project).