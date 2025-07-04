# Mini Local Business Dashboard

A beautiful, responsive dashboard application that simulates how small businesses can view their SEO content and Google Business data. Built with React (JavaScript), Tailwind CSS, and Node.js/Express.

## Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Business Input Form**: Clean form with validation for business name and location
- **Business Insights Card**: Displays simulated Google ratings, reviews, and AI-generated SEO headlines
- **Real-time Headline Generation**: Regenerate SEO headlines instantly
- **Loading States**: Smooth loading animations for better user experience
- **Error Handling**: Graceful error handling with user-friendly messages
- **Professional UI**: Modern gradient design with smooth transitions

## Technologies Used

### Frontend
- React (JavaScript)
- Tailwind CSS
- Lucide React (for icons)
- Vite (build tool)

### Backend
- Node.js
- Express.js
- CORS middleware

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd GrowthPro-AI-Mini-Local-business-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm run server
```
The backend will run on `http://localhost:3001`

4. In a new terminal, start the frontend development server:
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`

## API Endpoints

### POST /business-data
- **Description**: Get simulated business data
- **Request Body**: 
  ```json
  {
    "name": "Cake & Co",
    "location": "Mumbai"
  }
  ```
- **Response**:
  ```json
  {
    "rating": 4.3,
    "reviews": 127,
    "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
  }
  ```

### GET /regenerate-headline
- **Description**: Generate a new SEO headline
- **Query Parameters**: `name` and `location`
- **Response**:
  ```json
  {
    "headline": "New AI-generated headline"
  }
  ```

## Project Structure


## client Strucure
```
├── src/
│   ├── components/
│   │   ├── BusinessForm.jsx    # Input form component
│   │   └── BusinessCard.jsx    # Business data display component
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind CSS imports
├── package.json
```

## server Strucure

```
├── server/
│   └── index.js               # Express server
├── package.json
```


## Usage

1. Enter your business name and location in the form
2. Click "Get Business Insights" to fetch simulated data
3. View your business rating, reviews, and AI-generated SEO headline
4. Use the "Regenerate" button to get new SEO headlines
5. Click "Try Another Business" to start over

## Customization

### Adding New SEO Headlines
Edit the `seoHeadlines` array in `server/index.js` to add more headline templates.

### Styling
The project uses Tailwind CSS. You can customize the design by modifying the classes in the React components.

## Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`


### Backend (Render/Railway)
1. Push your code to GitHub
2. Connect your repository to your hosting platform
3. Set the start command to `node server/index.js`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
