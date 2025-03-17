# Kashif Hasan Portfolio

A personal portfolio website built with React showcasing Kashif Hasan's 25 years of experience in software engineering, system architecture, distributed computing, cloud services, and AI-driven development.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Form Setup](#form-setup)
- [Resume Setup](#resume-setup)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Technology Stack](#technology-stack)

## Features

- Modern, responsive design with dark theme
- Interactive UI with smooth animations powered by Framer Motion
- Section-based layout including:
  - Hero/Landing section
  - About Me
  - Experience timeline
  - Skills showcase
  - Projects portfolio
  - Resume viewer with download option
  - Contact form
- Fully static site with no backend dependency
- Contact form integration via Formspree
- SEO optimized
- Fast loading and performance optimized
- Styled with Tailwind CSS

## Prerequisites

- Node.js (version 18.x or later)
- npm or yarn package manager
- Git (for version control and deployment)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/callmealias/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Development

To run the development server:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The development server features hot reloading, so any edits you make to the files will be immediately reflected in the browser.

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

This will create a `build` directory with optimized production files ready for deployment.

## Deployment to GitHub Pages

The project is already configured for GitHub Pages deployment with the `homepage` field in package.json set to "https://callmealias.github.io/portfolio".

To deploy to GitHub Pages:

1. Make sure the `gh-pages` package is installed:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Run the deploy script (which is already configured in package.json):
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

This will:
- Build the project (`predeploy` script runs first)
- Deploy the contents of the `build` directory to the `gh-pages` branch
- Make the site available at `https://callmealias.github.io/portfolio`

## Form Setup

1. Sign up for a free account on [Formspree](https://formspree.io/)
2. Create a new form and copy the endpoint URL
3. Update the form action in the Contact component:

   ```javascript
   const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID"); // Replace with your form ID
   ```

4. Ensure that the form is configured to send emails to `callmealias@gmail.com`

## Resume Setup

1. Place your resume PDF file in the `public` directory:
   ```
   public/resume.pdf
   ```

2. The Resume component should already be set up to display and provide a download link for this file. Verify that the paths are correct:

   ```javascript
   // For embedded viewer
   <iframe src={`${process.env.PUBLIC_URL}/resume.pdf`} title="Resume" />
   
   // For download link
   <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>Download Resume</a>
   ```

## Project Structure

Create React App standard directory structure with Tailwind CSS:

```
portfolio/
├── public/                  # Public assets
│   ├── index.html           # HTML template
│   ├── favicon.ico          # Favicon
│   ├── images/              # Image assets
│   │   └── kashif-photo.jpg # Hero background image
│   └── resume.pdf           # Resume PDF file
├── src/                     # Source files
│   ├── components/          # React components for each section
│   │   ├── Layout.js        # Main layout wrapper
│   │   ├── Navbar.js        # Navigation bar
│   │   ├── Hero.js          # Landing/hero section
│   │   ├── About.js         # About me section
│   │   ├── Experience.js    # Work experience timeline
│   │   ├── Skills.js        # Skills showcase
│   │   ├── Projects.js      # Projects portfolio
│   │   ├── Resume.js        # Resume viewer
│   │   ├── Contact.js       # Contact form
│   │   └── Footer.js        # Page footer
│   ├── App.js               # Main App component
│   ├── index.js             # Entry point
│   ├── index.css            # Tailwind directives
│   └── output.css           # Generated CSS from Tailwind
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Customization

### Updating Content

Most content is stored in the individual component files. To update:

- **Personal information**: Edit text in `Hero.js` and `About.js`
- **Work experience**: Modify the data in `Experience.js`
- **Skills**: Update the skill lists in `Skills.js`
- **Projects**: Edit project details in `Projects.js`
- **Resume**: Replace `public/resume.pdf` with an updated version

### Styling

- The project uses Tailwind CSS for styling
- The site uses a dark theme with the following color scheme:
  - Background: Dark slate gray (#2F4F4F)
  - Text: Light gray (#D3D3D3)
  - Accents: Muted teal (#4682B4) and olive green (#6B8E23)

- To modify colors, edit the theme configuration in `tailwind.config.js`

### Adding New Sections

1. Create a new component in the `src/components` directory
2. Import and add the component to `App.js`
3. Add a navigation link in `components/Navbar.js`

## Technology Stack

- [React](https://reactjs.org/) - UI library
- [React Router](https://reactrouter.com/) - For navigation
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Formspree](https://formspree.io/) - Form handling service
- [shadcn/ui](https://ui.shadcn.com/) - Component library