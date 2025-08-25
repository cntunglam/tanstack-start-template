# AI Agent

A modern full-stack React application built with TanStack Start, featuring server-side rendering and file-based routing.

## 🚀 Features

- **TanStack Start**: Full-stack React framework with SSR support
- **TanStack Router**: Type-safe file-based routing
- **Server Functions**: Built-in server-side functionality
- **TypeScript**: Full TypeScript support for type safety
- **Vite**: Fast development and build tooling
- **Netlify Ready**: Pre-configured for Netlify deployment

## 📋 Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-agent
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## 🏗️ Build

Build the application for production:

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── routes/              # File-based routing
│   ├── __root.tsx      # Root layout component
│   └── index.tsx       # Home page with counter functionality
├── router.ts           # Router configuration
└── routeTree.gen.ts    # Auto-generated route tree (do not edit)
```

## 🎯 What This App Does

This is a simple counter application that demonstrates:

- **Server-side state management**: Counter value is persisted to a file on the server
- **Server functions**: Uses TanStack Start's `createServerFn` for server-side operations
- **Client-server interaction**: Button clicks trigger server updates and UI refresh
- **Type-safe routing**: Leverages TanStack Router for navigation

The main functionality includes:
- Display a counter value loaded from the server
- Increment the counter by clicking a button
- Persist the counter value to a `count.txt` file on the server

## 🔧 Technologies Used

- **React 19**: Latest React with modern features
- **TanStack Start**: Full-stack React framework
- **TanStack Router**: Type-safe routing solution
- **TypeScript**: Static type checking
- **Vite**: Build tool and dev server
- **Netlify**: Deployment target

## 📦 Key Dependencies

- `@tanstack/react-start`: Full-stack React framework
- `@tanstack/react-router`: File-based routing
- `react` & `react-dom`: React library
- `vite`: Build tool
- `typescript`: Type checking

## 🚀 Deployment

This project is configured for Netlify deployment. The Vite configuration includes:

- Netlify-specific TanStack Start plugin configuration
- Optimized build settings for serverless deployment
- External Node.js modules properly configured

To deploy:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure Netlify to handle the serverless functions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is licensed under the ISC License.