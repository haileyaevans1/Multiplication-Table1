# Multiplication Table

A simple React application that dynamically generates a multiplication table based on user‑defined bounds, and allows light/dark theme switching via context.

## Features

- A **TableContainer** component that:
  - Manages a title (default: “Multiplication Table”)  
  - Manages a lower bound (default: 1)  
  - Manages an upper bound (default: 10)  
  - Provides input fields to change the title, lower bound, and upper bound  
- A **MultiplicationTable** component that:
  - Receives the lower and upper bounds as props  
  - Uses nested loops to generate and render the multiplication table via HTML `<table>`, `<tr>`, and `<td>` tags  
- Responsive styling using **Bootstrap 5** classes (`form-control`, `table`, etc)  
- Theme switching (light/dark) implemented using React Context hook  

## Getting Started

### Prerequisites

- Node.js and npm installed  
- Basic familiarity with React  

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/haileyaevans1/Multiplication-Table1.git
   cd Multiplication-Table1
   ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open http://localhost:3000