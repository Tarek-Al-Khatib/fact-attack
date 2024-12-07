<body>
    <header>
        <h1>Fact Attack</h1>
        <p>
            Fact Attack is an engaging and educational quiz platform designed to test and enhance users' knowledge on various topics. 
            Built with a robust full-stack architecture, it features a user-friendly interface, dynamic quiz creation, and AI-driven 
            recommendations for continuous learning.
        </p>
    </header>

  <h2>Features</h2>  
  <ul>
          <li><strong>Dynamic Quizzes:</strong> Participate in pre-defined quizzes on topics like React, Laravel, and SQL.</li>
          <li><strong>Answer Submission:</strong> Submit answers and receive instant feedback with score calculations.</li>
          <li><strong>User Authentication:</strong> Secure access with JWT-based authentication.</li>
          <li><strong>Customizable Content:</strong> Add and manage quizzes with a flexible schema.</li>
      </ul>

  <h2>Technologies Used</h2>
  <h3>Frontend</h3>
  <ul>
      <li><strong>React.js:</strong> Interactive and responsive user interface.</li>
      <li><strong>Material-UI:</strong> Elegant and consistent styling with pre-built components.</li>
  </ul>
  <h3>Backend</h3>
  <ul>
      <li><strong>Node.js & Express.js:</strong> API endpoints and middleware for backend logic.</li>
      <li><strong>MongoDB & Mongoose:</strong> Database for storing users, quizzes, and results.</li>
      <li><strong>JWT:</strong> Secure token-based authentication.</li>
  </ul>

  <h2>Setup Instructions</h2>
  <h3>Prerequisites</h3>
  <ul>
      <li><strong>Node.js</strong> (v14 or later)</li>
      <li><strong>MongoDB</strong> (Local or cloud instance)</li>
      <li><strong>npm or yarn</strong></li>
  </ul>

  <h3>Installation</h3>
  <ol>
      <li><strong>Clone the Repository:</strong>
          <code>git clone https://github.com/Tarek-Al-Khatib/fact-attack.git cd fact-attack</code>
      </li>
      <li><strong>Install Dependencies (both frontend and backend):</strong>
          <code>npm install</code>
      </li>
      <li><strong>Configure Environment Variables:</strong>
        <br />
            </li>
            <li><strong>Start the Development Server:</strong>
              <pre><code>cd backend
npm start</code></pre>
            </li>
            <li><strong>Run the Frontend:</strong>
                <pre><code>cd frontend
npm start</code></pre>
            </li>
        </ol>

  <h2>Project Structure</h2>

 <pre>
   
fact-attack/
├── backend/           # Backend logic with Node.js and Express
│   ├── controllers/   # API controllers
│   ├── models/        # Mongoose schemas for users and quizzes
│   ├── middlewares/   # Authentication and validation middlewares
│   └── routes/        # API route definitions
├── frontend/          # React frontend
│   ├── components/    # Reusable React components
│   ├── context/       # Context API for state management
│   ├── pages/         # Main page components for the app
│   └── styles/        # CSS and styling files
└── README.md          # Project documentation
 </pre>

<footer>
  <h2>Author</h2>
  <p><strong>Tarek Alkhatib</strong></p>
</footer>
</body>

