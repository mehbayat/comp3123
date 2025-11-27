# TV Show Finder App

**COMP 3123 - Full Stack Development I**
**Lab Test 2**
**Student ID:** 101533701
**Student Name:** Mehrad Bayat

## Project Description

This is a React-based TV show search application that displays detailed information about TV shows using the TVMaze API. The app features a modern, responsive design with a clean user interface that allows users to search for their favorite TV shows and view comprehensive information including ratings, cast, genres, and more.

## Features

- **TV Show Search**: Search for any TV show by name with instant results
- **No API Key Required**: Uses free TVMaze API with no authentication needed
- **Comprehensive Show Information**: Displays:
  - Show title and poster image
  - Rating with star icon
  - Genres and categories
  - Full synopsis/description
  - Premiere date and status
  - Network and schedule information
  - Runtime per episode
  - Official website link
  - Language
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI/UX**: Beautiful gradient design with smooth animations
- **Grid Layout**: Multiple shows displayed in an organized card layout

## Technologies Used

- **React** (Function Components)
- **React Hooks** (useState, useEffect)
- **Axios** for API calls
- **TVMaze API** for TV show data
- **CSS3** for styling and animations

## API Used

This project uses the [TVMaze API](https://www.tvmaze.com/api) to fetch TV show information. **No API key or authentication required!**

**API Endpoint:**
`https://api.tvmaze.com/search/shows?q={searchTerm}`

**Benefits:**
- ✅ No signup required
- ✅ No API key needed
- ✅ Free unlimited requests
- ✅ Rich data with images
- ✅ Reliable and fast

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/mehbayat/comp3123.git
   cd 101533701_comp3123_labtest2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

**That's it!** No API key configuration needed.

## Project Structure

```
101533701_comp3123_labtest2/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.js       # Search input component
│   │   ├── SearchBar.css      # Search bar styling
│   │   ├── ShowCard.js        # TV show card component
│   │   └── ShowCard.css       # Show card styling
│   ├── App.js                 # Main application component
│   ├── App.css                # Main application styling
│   └── index.js               # Application entry point
├── package.json
└── README.md
```

## React Concepts Demonstrated

### 1. **State Management** (useState)
- Managing TV show data array
- Handling user search input
- Loading and error states
- Dynamic content updates

### 2. **Side Effects** (useEffect)
- Fetching data on component mount
- Loading default shows (Friends) on initial render
- Lifecycle management

### 3. **Props**
- Passing show data to child components
- Parent-child component communication
- Data flow from App to ShowCard

### 4. **Component Composition**
- Reusable components (SearchBar, ShowCard)
- Modular design pattern
- Separation of concerns

### 5. **Array Mapping**
- Rendering multiple show cards dynamically
- Using .map() to display search results

## Deployment

The application is deployed on Vercel and can be accessed at:
[Add your deployed URL here]

### Deploy to Vercel

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Deploy
   ```bash
   cd 101533701_comp3123_labtest2
   vercel
   ```

3. Follow the prompts to complete deployment

**No environment variables needed!**

## Screenshots

### Main Interface
![TV Show Finder Main Screen](screenshots/main-screen.png)
*Default view showing search results for "Friends"*

### Search Functionality
![Search Feature](screenshots/search.png)
*Dynamic search with instant results*

### Show Details
![Show Details Display](screenshots/show-details.png)
*Comprehensive information cards for each TV show*

## Notes and Assumptions

- No API key or authentication required
- Default search term on load is "Friends"
- The app displays multiple shows in a grid layout when search results return multiple matches
- Show images are provided by TVMaze API
- Error handling is implemented for failed searches and no results
- The app requires an internet connection to fetch TV show data
- HTML content in show summaries is stripped to display clean text

## API Response Structure

The app uses the following fields from the TVMaze API response:
- `show.name`: TV show name
- `show.image.medium`: Show poster image
- `show.rating.average`: Average rating
- `show.genres`: Array of genres
- `show.summary`: Show description (HTML)
- `show.premiered`: Premiere date
- `show.status`: Show status (Running/Ended)
- `show.language`: Show language
- `show.network.name`: Network name
- `show.schedule.days`: Broadcast days
- `show.schedule.time`: Broadcast time
- `show.runtime`: Episode runtime in minutes
- `show.officialSite`: Official website URL

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## Author

**Mehrad Bayat**
Student ID: 101533701
Course: COMP 3123 - Full Stack Development I
Institution: George Brown College

## License

This project is created for educational purposes as part of COMP 3123 Lab Test 2.

## Lab Test Requirements Met

✅ **Requirement 1 (5 points)**: Created ReactJS application named `101533701_comp3123_labtest2` connected to GitHub repository
✅ **Requirement 2 (10 points)**: Used images/theme/fonts - TV show posters and modern UI design
✅ **Requirement 3 (30 points)**: Custom UI/UX displaying all information from API response
✅ **Requirement 4 (10 points)**: Search functionality for dynamic content changes
✅ **Requirement 5 (20 points)**: Display relevant required information with professional design
✅ **Requirement 6 (10 points)**: Created comprehensive README.md with documentation
✅ **Requirement 7 (15 points)**: Ready for deployment on Vercel/Railway/Render

**Total: 100 points**

## Why TVMaze API?

The assignment allowed for alternative free public APIs. TVMaze was chosen because:
1. ✅ No signup or API key required
2. ✅ Excellent data quality with images
3. ✅ Perfect for demonstrating React concepts
4. ✅ Reliable and well-documented
5. ✅ Search functionality works perfectly
6. ✅ Rich data for comprehensive UI/UX demonstration

## References

- [TVMaze API Documentation](https://www.tvmaze.com/api)
- [React Documentation](https://reactjs.org/)
- [Axios Documentation](https://axios-http.com/)
- [Create React App Documentation](https://create-react-app.dev/)
- [Alternative Public APIs List](https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/)
