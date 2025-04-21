# Developer Portfolio Template

A lightweight, responsive, and customizable portfolio template for developers built with pure HTML, CSS, and JavaScript. This template is beginner-friendly and requires no frameworks or libraries.

## Features

- Responsive design (mobile-first approach)
- Dark mode toggle with user preference saving
- Smooth scrolling between sections
- Mobile menu for smaller screens
- Simple animations
- Clean and modern design
- Well-commented code for easy customization

## File Structure

```
DevPortfolioTemplate/
├── index.html              # Main HTML file
├── style.css               # All styles
├── script.js               # JavaScript functionality
├── images/             # Images used in the portfolio
│       ├── profile.png     # Profile picture
│       ├── project1.jpg    # Project screenshot
│       ├── project2.jpg    # Project screenshot
│       └── project3.jpg    # Project screenshot
└── README.md               # This file
```

## How to Use

### Basic Setup

1. Download or clone this repository
2. Replace the placeholder images in the `/images` folder with your own
3. Edit the content in `index.html` to personalize your portfolio

### Customizing Content

#### Personal Information

Edit the following sections in `index.html`:

- Header: Change the site title in the logo section
- Hero Section: Update your name, title, and introduction
- About Section: Replace the profile image and update your bio
- Education Section: Replace with your education
- Work Experience Section : Add your work experiences
- Skills Section: Add or remove skills as needed
- Projects Section: Update with your own projects, descriptions, and images
- Contact Section: Update your contact information and social links
- Footer: Update the copyright information

#### Styling

Most styling can be customized by editing the CSS variables at the top of `style.css`:

```css
:root {
    --primary-color: #3a86ff;
    --secondary-color: #8338ec;
    --dark-color: #212529;
    --light-color: #f8f9fa;
    --success-color: #06d6a0;
    --white: #ffffff;
    --text-dark: #333333;
    --text-light: #f8f9fa;
    --transition: all 0.3s ease;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --gradient: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  }
```

Change these values to match your preferred color scheme and styling preferences.

### Adding Projects

To add a new project, copy and paste the following code inside the `projects-container` div:

```html
<div class="project-card">
    <div class="project-image">
        <img src="./assets/images/your-project-image.jpg" alt="Project Title">
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description goes here. Explain what the project does and what technologies you used to build it.</p>
        <div class="project-links">
            <a href="#" class="btn btn-sm">Live Demo</a>
            <a href="#" class="btn btn-sm btn-outline">Source Code</a>
        </div>
    </div>
</div>
```

### Adding Skills

To add a new skill, add the following code inside the `skills-container` div:

```html
<div class="skill">
    <i class="fab fa-skill-icon"></i>
    <h3>Skill Name</h3>
</div>
```

Replace `fa-skill-icon` with the appropriate Font Awesome icon class for your skill. You can find all available icons at [Font Awesome](https://fontawesome.com/icons).

## Deployment

### GitHub Pages

1. Create a new GitHub repository
2. Upload all your files to the repository
3. Go to Settings > Pages
4. Select the branch you want to deploy (usually `main` or `master`)
5. Save your settings and GitHub will provide you with a URL for your live site

### Netlify

1. Sign up for a [Netlify](https://www.netlify.com/) account
2. Choose "New site from Git"
3. Connect to your GitHub/GitLab/Bitbucket account
4. Select the repository containing your portfolio
5. Click "Deploy site"

### Vercel

1. Sign up for a [Vercel](https://vercel.com/) account
2. Import your GitHub/GitLab/Bitbucket repository
3. Configure your project settings (the defaults should work fine)
4. Deploy your site

## Customizing Images

### Profile Image
- Replace `images/profile.jpg` with your own photo
- Recommended size: 300x300px or larger, square format

### Project Images
- Replace `images/project1.jpg`, `project2.jpg`, etc. with screenshots of your projects
- Recommended size: 800x450px (16:9 ratio) for best display

## Browser Compatibility

This template is designed to work with all modern browsers, including:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## License

This template is available under the MIT License. Feel free to use it for both personal and commercial projects.

## Credits

- [Font Awesome](https://fontawesome.com/) for icons

## Support

If you need help customizing this template or have any questions, feel free to open an issue in the GitHub repository.

Happy coding!
