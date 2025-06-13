🪨📄✂️ Rock Paper Scissors Game – JavaScript

This project is a simple Rock-Paper-Scissors game built using **HTML**, **CSS**, and **JavaScript**. It allows a user to play against the computer for 10 rounds, keeping track of scores and determining a winner at the end.

---

## 🎮 Features

* Three buttons: Rock (`.R`), Paper (`.P`), Scissors (`.S`)
* Scoreboard showing **User Score** (`#US`) and **Computer Score** (`#CS`)
* Random computer choices on each round
* Visual result display with colors:

  * 🟡 Yellow for **Draw**
  * 🟢 Green for **User Win**
  * 🔴 Red for **User Lose**
* Game ends after **10 rounds**
* Final winner displayed
* **Refresh** button to reset the game

---

## 🛠 How It Works

### Game Setup

* The DOM elements for user choices, scores, result display, and refresh button are selected.
* Initial scores and round counter are set to `0`.

### Game Flow

1. The user clicks on one of the choices (Rock/Paper/Scissors).
2. The computer generates a random choice.
3. The result is decided based on standard game rules:

   * Rock > Scissors
   * Scissors > Paper
   * Paper > Rock
4. Score is updated and the result is shown.
5. After 10 rounds:

   * All buttons are disabled.
   * Final winner is declared.

### Refresh Button

* Clicking the **Refresh** button resets:

  * Scores
  * Round count
  * Result display
  * Button states

---

## 📂 Files Structure

```
📁 your-project-folder/
│
├── index.html      # Contains HTML structure
├── style.css       # Styling (if used)
└── script.js       # Game logic (provided above)
```

---

## 🧠 Functions Breakdown

* `UCR()`, `UCP()`, `UCS()`: Handle user choices Rock, Paper, and Scissors.
* `rand()`: Generates random computer choice.
* `checkOver()`: Ends game after 10 rounds and disables inputs.
* `refreshFunc()`: Resets everything for a new game.

---

## ✅ How to Use

1. Open the HTML file in your browser.
2. Click on Rock, Paper, or Scissors to play.
3. Play continues for 10 rounds.
4. See the final result.
5. Click **Refresh** to restart.

---

## 📌 Note

* Make sure you link this JavaScript code properly in your HTML file inside a `<script src="script.js"></script>` tag.
* Also, ensure that your HTML includes elements with class names `.R`, `.P`, `.S`, `.refresh`, and IDs `#US`, `#CS`, `.result`.

