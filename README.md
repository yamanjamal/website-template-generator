# Website Template Generator

This project is a website template generator that allows users to create dynamic websites with essential sections required for information-sharing platforms. It offers a simple interface to input user preferences and descriptions, leveraging OpenAI's GPT model to generate content for the website based on the provided prompts.

## Features

- Dynamic Website Sections
  - Hero Section
  - Introduction
  - Topics (Cards or Custom Design)
  - Frequently Asked Questions (FAQs)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository:
```
git clone https://github.com/yamanjamal/website-template-generator.git
```

2. Install dependencies:
```
cd website-template-generator
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```
DATABASE_URL=your_mongodb_uri
OPEN_AI_KEY=your_openai_api_key
```

### Running the Application

1. Start the server:
```
cd frontend
npm run dev

cd backend
npm run dev
```

2. Access the application at [http://localhost:5000](http://localhost:5000).

## Usage

1. Access the website and fill in the required details:
- Website Name
- Website Description
- Target User

2. Submit the form to generate content for the website based on user inputs.

## Deployment

To deploy the application to a hosting platform:

1. Set up hosting configurations as per your chosen platform.
2. Build the application:
```
npm run build
```

3. Deploy the build files to your hosting service.

## Technologies Used

- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- React.js
- React Router DOM
- UseForm & Yup (for form validation)
- React Query (remote state management)
- Axios (API calls)
- OpenAI GPT-3
- Chalk (for enhanced logging)
