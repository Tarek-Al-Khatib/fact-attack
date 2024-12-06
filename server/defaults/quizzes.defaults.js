const defaultQuizzes = [
  {
    title: "React Context Quiz",
    description: "Test your knowledge about React's Context API.",
    questions: [
      {
        question: "What is the React Context API used for?",
        type: "options",
        options: ["State management", "Styling", "Testing", "Building APIs"],
        answer: "",
        solution: "State management",
      },
      {
        question: "What method is used to create a Context?",
        type: "options",
        options: [
          "createContext()",
          "useContext()",
          "ContextAPI()",
          "newContext()",
        ],
        answer: "",
        solution: "createContext()",
      },
      {
        question:
          "What hook is used to consume a Context in functional components?",
        type: "options",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        answer: "",
        solution: "useContext",
      },
      {
        question:
          "Explain how you would provide a Context to a tree of components.",
        type: "input",
        answer: "",
        solution:
          "You use the Context.Provider component to wrap the components you want to share the context with, passing the value as a prop.",
      },
      {
        question: "What is the difference between Context API and Redux?",
        type: "input",
        answer: "",
        solution:
          "The Context API is primarily for passing data through a component tree without props, while Redux is a state management library with a more complex and feature-rich ecosystem for managing global state.",
      },
    ],
    score: 0,
  },
  {
    title: "Laravel General Quiz",
    description: "A quiz on Laravel basics and features.",
    questions: [
      {
        question: "What is the default templating engine in Laravel?",
        type: "options",
        options: ["Twig", "Blade", "Handlebars", "EJS"],
        answer: "",
        solution: "Blade",
      },
      {
        question: "Which command is used to create a new Laravel project?",
        type: "options",
        options: [
          "laravel create",
          "laravel new",
          "composer create-project laravel/laravel",
          "artisan init",
        ],
        answer: "",
        solution: "composer create-project laravel/laravel",
      },
      {
        question: "What is the role of the `.env` file in Laravel?",
        type: "input",
        answer: "",
        solution:
          "The `.env` file is used to store environment-specific variables such as database credentials, API keys, and other configuration settings.",
      },
      {
        question: "Name the function used to define a route in Laravel.",
        type: "input",
        answer: "",
        solution:
          "The `Route::get()` function is commonly used to define routes in Laravel. Other methods like `Route::post()`, `Route::put()`, etc., are also used for different HTTP methods.",
      },
      {
        question: "What is Eloquent in Laravel?",
        type: "input",
        answer: "",
        solution:
          "Eloquent is Laravel's built-in ORM (Object-Relational Mapping) tool that provides an elegant way to interact with databases, making it easier to query and manipulate data.",
      },
    ],
    score: 0,
  },
  {
    title: "SQL Quiz",
    description: "Assess your knowledge on SQL queries and databases.",
    questions: [
      {
        question: "Which command is used to create a new table?",
        type: "options",
        options: ["CREATE TABLE", "ADD TABLE", "NEW TABLE", "INSERT TABLE"],
        answer: "",
        solution: "CREATE TABLE",
      },
      {
        question: "Which SQL clause is used to filter records?",
        type: "options",
        options: ["WHERE", "SELECT", "ORDER BY", "GROUP BY"],
        answer: "",
        solution: "WHERE",
      },
      {
        question:
          "What is the difference between `INNER JOIN` and `LEFT JOIN`?",
        type: "input",
        answer: "",
        solution:
          "`INNER JOIN` returns only the rows that have matching values in both tables, while `LEFT JOIN` returns all rows from the left table and matched rows from the right table, and NULL for unmatched rows.",
      },
      {
        question:
          "Write an SQL query to find all users whose age is greater than 30.",
        type: "input",
        answer: "",
        solution: "SELECT * FROM users WHERE age > 30;",
      },
      {
        question: "What does the `GROUP BY` clause do in SQL?",
        type: "input",
        answer: "",
        solution:
          "The `GROUP BY` clause groups rows that have the same values into summary rows, often used with aggregate functions like `COUNT()`, `SUM()`, `AVG()`, etc.",
      },
    ],
    score: 0,
  },
];

export default defaultQuizzes;
