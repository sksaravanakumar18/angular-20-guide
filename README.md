# Angular 20 Guide 🚀

A comprehensive, interactive guide to modern Angular development, showcasing the latest features and best practices in Angular 18+. This project demonstrates key concepts through live examples and practical implementations.

## 🌐 Live Demo

**Visit the live application:** [https://sksaravanakumar18.github.io/angular-20-guide/](https://sksaravanakumar18.github.io/angular-20-guide/)

## 📚 What You'll Learn

This guide covers 7 essential Angular topics with interactive examples:

### 1. 🏗️ Core Architecture & Fundamentals
- Components, Templates & Data Binding
- Directives & Modern Control Flow (`@if`, `@for`)
- Custom Pipes and TypeScript integration
- Interpolation, Property Binding, Event Binding
- Two-way data binding with FormsModule

### 2. 🛠️ Language & Tooling
- TypeScript best practices
- Interfaces, Generics, and Decorators
- Modern development workflow
- Type safety and code quality

### 3. 🔄 Component Interaction & Reusability
- Parent-Child Communication (`@Input`, `@Output`)
- Content Projection with `<ng-content>`
- Dynamic component creation
- EventEmitter and component communication patterns

### 4. 📊 State Management
- Angular Signals (modern reactive approach)
- RxJS Observables and reactive programming
- State management patterns
- Signal effects and computed values

### 5. ⚡ Performance Optimization
- OnPush Change Detection Strategy
- Lazy loading and code splitting
- Performance monitoring techniques
- Bundle optimization strategies

### 6. 🆕 Modern Angular Features
- Standalone Components architecture
- New Control Flow syntax (`@if`, `@for`, `@switch`)
- Latest Angular 18+ features
- Modern Angular patterns and practices

### 7. 🔧 Cross-Cutting Concerns
- HTTP Client and interceptors
- Error handling strategies
- Security best practices
- Authentication and authorization patterns

## 🛠️ Built With

- **Angular 18.2** - Latest Angular framework
- **TypeScript 5.5** - Type-safe JavaScript superset
- **Angular CLI 18.2** - Command line interface and build tools
- **RxJS 7.8** - Reactive Extensions for JavaScript
- **Standalone Components** - Modern Angular architecture pattern
- **Angular Signals** - New reactivity model
- **SCSS** - Enhanced CSS with variables and mixins

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Angular CLI** - Install globally: `npm install -g @angular/cli`
- **Git** - Version control system

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sksaravanakumar18/angular-20-guide.git
   cd angular-20-guide
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

The application will automatically reload when you make changes to the source files.

## 📝 Available Scripts

| Command | Description | Usage |
|---------|-------------|-------|
| `npm start` | Start development server on port 4200 | Development |
| `npm run build` | Build the project for production | Production build |
| `npm run watch` | Build in watch mode for development | Development with file watching |
| `npm test` | Run unit tests with Karma | Testing |
| `npm run deploy` | Build and deploy to GitHub Pages | Deployment |

## 🌍 Deployment

This project is configured for automatic deployment to GitHub Pages using the `angular-cli-ghpages` package.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. 🏗️ Build the application for production with optimizations
2. 🔧 Configure the correct base-href for GitHub Pages
3. 📤 Deploy to the `gh-pages` branch automatically
4. 🌐 Make your app available at `https://[username].github.io/angular-20-guide/`

### Manual Deployment Steps

If you prefer manual deployment:

```bash
# Build for production
npm run build

# Deploy using angular-cli-ghpages
npx angular-cli-ghpages --dir=dist/angular-20-guide/browser
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── topics/                      # Feature modules
│   │   ├── core-concepts/           # Angular fundamentals & basics
│   │   ├── language-tooling/        # TypeScript & development tools
│   │   ├── component-interaction/   # Component communication patterns
│   │   │   └── child-demo/          # Child component example
│   │   ├── state-management/        # Signals & RxJS patterns
│   │   ├── performance/             # Optimization techniques
│   │   ├── modern-features/         # Latest Angular features
│   │   └── cross-cutting/           # HTTP, security, interceptors
│   ├── app.component.ts             # Root application component
│   ├── app.component.html           # Root template
│   ├── app.component.scss           # Root styles
│   ├── app.routes.ts                # Application routing configuration
│   ├── app.config.ts                # Application configuration
│   └── app.config.server.ts         # Server-side rendering config
├── styles.scss                     # Global application styles
├── index.html                       # Main HTML template
├── main.ts                          # Application bootstrap
└── main.server.ts                   # SSR bootstrap
```

## ✨ Key Features

- 🎯 **Interactive Examples**: Each topic includes live, editable examples with real-time results
- 🚀 **Modern Angular**: Uses the latest Angular 18+ features and syntax
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🔒 **Type Safety**: Full TypeScript implementation with strict mode enabled
- ⚡ **Performance Optimized**: OnPush change detection and lazy loading
- 🧪 **Testing Ready**: Configured with Karma and Jasmine for unit testing
- 🌐 **PWA Ready**: Can be extended to Progressive Web App
- 📤 **GitHub Pages**: One-command deployment to GitHub Pages
- 🎨 **Modern UI**: Clean, professional interface with SCSS styling
- 📚 **Educational**: Comprehensive examples with explanations

## 🎯 Learning Path

Follow this recommended learning path to get the most out of this guide:

1. **🏗️ Start with Core Concepts** - Understand Angular fundamentals, components, and data binding
2. **🛠️ Explore Language & Tooling** - Master TypeScript and development tools
3. **🔄 Learn Component Interaction** - Build reusable and communicating components
4. **📊 Master State Management** - Handle application state with Signals and RxJS
5. **⚡ Optimize Performance** - Learn best practices for fast, efficient apps
6. **🆕 Discover Modern Features** - Explore the latest Angular capabilities
7. **🔧 Implement Cross-Cutting Concerns** - Handle HTTP, security, and production concerns

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute

1. 🍴 Fork the repository
2. 🌟 Create your feature branch (`git checkout -b feature/amazing-feature`)
3. ✅ Add tests for your changes (if applicable)
4. 💾 Commit your changes (`git commit -m 'Add some amazing feature'`)
5. 📤 Push to the branch (`git push origin feature/amazing-feature`)
6. 🔄 Open a Pull Request

## 🐛 Issues & Support

If you encounter any issues or have questions:

1. 🔍 Check the [Issues](https://github.com/sksaravanakumar18/angular-20-guide/issues) page
2. 🆕 Create a new issue with detailed information
3. 📝 Include your environment details (Node.js version, OS, Angular CLI version)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Saravana Kumar** - [@sksaravanakumar18](https://github.com/sksaravanakumar18)

- 🌐 Project Link: [https://github.com/sksaravanakumar18/angular-20-guide](https://github.com/sksaravanakumar18/angular-20-guide)
- 🚀 Live Demo: [https://sksaravanakumar18.github.io/angular-20-guide/](https://sksaravanakumar18.github.io/angular-20-guide/)

## 🌟 Show Your Support

If this project helped you learn Angular, please consider:

- ⭐ **Star this repository** on GitHub
- 🍴 **Fork the project** to contribute
- 📢 **Share it** with other developers

---

## 🔄 Recent Updates

- ✅ **Fixed all compilation errors** - Resolved template syntax issues
- ✅ **Added GitHub Pages deployment** - One-command deployment setup
- ✅ **Implemented modern Angular 18+ features** - Latest syntax and patterns
- ✅ **Added interactive examples** - Live demos for all 7 topics
- ✅ **Optimized for performance** - OnPush strategy and lazy loading

---

⭐ **Don't forget to star this repository if you found it helpful!** ⭐

**Happy coding with Angular! 🚀**