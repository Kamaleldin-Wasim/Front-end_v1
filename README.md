# LungCare

A comprehensive web application dedicated to lung health awareness, smoking cessation support, and community engagement. LungCare empowers users with education, tools, and resources to make informed decisions about their respiratory health.

## 🌟 Features

### For Users
- **Smoking Counter** - Track your smoking habits and monitor progress toward quitting
- **Cancer Risk Assessment** - Personalized lung cancer risk evaluation based on health factors
- **Nicotine Test** - Assess nicotine dependence levels
- **Quit Smoking Programs** - Access evidence-based cessation programs and strategies
- **Health Tools** - Interactive tools for lung health monitoring
- **3D Body Model** - Interactive anatomical visualization for lung health education
- **Community Forum** - Connect with others on similar health journeys
- **Doctor & Hospital Locator** - Find healthcare professionals and facilities specializing in lung health
- **Educational Resources** - Articles on smoking awareness and lung health myths

### For Administrators
- **Dashboard Management** - Comprehensive admin panel for content and user management
- **Doctor Management** - Add, update, and manage healthcare provider profiles
- **Hospital Management** - Maintain hospital and healthcare facility information
- **Success Stories Management** - Curate and manage user success stories and testimonials

### General Features
- **Secure Authentication** - User registration, login, and password recovery
- **User Profiles** - Personalized user accounts with health information
- **Responsive Design** - Mobile-friendly interface for all devices
- **Lung Awareness Hub** - Comprehensive information about lung health and diseases

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 8.0.0
- **UI Framework:** Bootstrap 5.3.8 + React Bootstrap 2.10.10
- **Routing:** React Router DOM 7.13.0
- **HTTP Client:** Axios 1.13.5
- **Icons:** Lucide React 0.564.0
- **Notifications:** SweetAlert2 11.26.18
- **Linting:** ESLint 9.39.1

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LungCare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 📦 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── AdminNavbar.jsx
│   ├── AdminFooter.jsx
│   ├── Hero.jsx
│   ├── BodyModel.jsx
│   ├── Education.jsx
│   ├── HealthTools.jsx
│   ├── AboutUs.jsx
│   └── Seminars.jsx
├── pages/               # Page components organized by role
│   ├── admin/          # Administrator pages
│   │   ├── AdminHome.jsx
│   │   ├── DoctorsManagement.jsx
│   │   ├── HospitalsManagement.jsx
│   │   └── StoriesManagement.jsx
│   ├── auth/           # Authentication pages
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   └── ForgotPassword.jsx
│   ├── guest/          # Public pages
│   │   └── LandingPage.jsx
│   └── user/           # User dashboard pages
│       ├── Profile.jsx
│       ├── SmokingCounter.jsx
│       ├── CancerRisk.jsx
│       ├── NicotineTest.jsx
│       ├── QuitSmokingPrograms.jsx
│       ├── SmokingAwareness.jsx
│       ├── SmokingMyths.jsx
│       ├── LungAwareness.jsx
│       ├── HealthTools.jsx
│       ├── DoctorsAndCenters.jsx
│       ├── Community.jsx
│       └── BModel.jsx
├── services/           # API and business logic services
├── context/            # React Context for state management
├── assets/             # Images, icons, and static files
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
├── App.css             # Global styles
└── index.css           # Base styles
```

## 📜 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with Hot Module Replacement (HMR).

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview Build
```bash
npm run preview
```
Locally preview the production build before deployment.

### Linting
```bash
npm run lint
```
Run ESLint to check code quality and consistency.

## 🔐 Authentication

The application supports two user roles:

### Admin Account
- **Email:** `admin@lungcare.com`
- **Password:** `admin123`
- **Access:** Admin dashboard with management features

### User Account
- **Email:** `user@lungcare.com`
- **Password:** `123`
- **Access:** User dashboard with health tools and resources

## 🎯 Usage

1. **Sign Up** - Create a new user account or use the test credentials
2. **Log In** - Access your personalized dashboard
3. **Explore Features** - Use smoking counter, risk assessments, and educational content
4. **Connect with Community** - Join forums and read success stories
5. **Find Resources** - Locate healthcare providers in your area

## 🌐 Deployment

To deploy the application:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting service (Vercel, Netlify, GitHub Pages, etc.)

### Environment Setup
Create a `.env` file in the root directory for environment variables:
```
VITE_API_URL=https://your-api-endpoint.com
```

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeatureName`)
3. Commit your changes (`git commit -m 'Add YourFeatureName'`)
4. Push to the branch (`git push origin feature/YourFeatureName`)
5. Open a Pull Request

Please ensure your code follows the ESLint configuration and passes linting checks.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, questions, or feedback:
- Open an issue on the repository
- Contact the development team
- Visit our website for more information

## 🙏 Acknowledgments

- Built with React and Vite for optimal performance
- Designed with accessibility and user experience in mind
- Dedicated to promoting lung health awareness and smoking cessation

---

**LungCare** - Your Partner in Respiratory Health 🫁
