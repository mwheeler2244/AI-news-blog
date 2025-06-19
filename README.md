# AI News 📰

A modern, responsive news application built with Next.js 15, featuring AI-powered content curation and a beautiful user interface.

## ✨ Features

- **📱 Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **🎯 Topic Filtering**: Filter articles by categories (Technology, Sports, Politics, Entertainment, Health, Science)
- **🔍 Search Functionality**: Real-time search across article titles, content, topics, and authors
- **⭐ Featured Articles**: Highlighted articles with carousel display
- **📝 Article Creation**: Add new articles with a modern modal interface
- **🎨 Modern UI**: Clean, modern design with Tailwind CSS and custom animations
- **⚡ Fast Performance**: Built with Next.js 15 and React 19 for optimal performance
- **🌟 Trending Content**: Automatically sorted by timestamp to show latest articles first

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Notifications**: React Toastify
- **Fonts**: Playfair Display, Source Sans 3
- **Development**: ESLint, Turbopack

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ai-news.git
cd ai-news
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📋 Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
ai-news/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── articles/      # Articles API endpoints
│   ├── article/           # Individual article pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── ArticleCard.tsx    # Article display component
│   ├── ArticleDetail.tsx  # Article detail view
│   ├── CreateArticleModal.tsx # Article creation modal
│   ├── FeaturedCarousel.tsx   # Featured articles carousel
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Header with navigation
│   └── TopicFilter.tsx    # Topic filtering component
├── hooks/                 # Custom React hooks
│   └── useArticles.ts     # Articles data management
├── lib/                   # Utility functions and data
│   ├── data.ts           # Mock data
│   └── utils.ts          # Utility functions
├── types/                 # TypeScript type definitions
│   └── index.ts          # Application types
└── public/               # Static assets
```

## 🎨 Features Overview

### Article Management

- View all articles in a clean, card-based layout
- Filter articles by topic categories
- Search across all article content
- Create new articles with a user-friendly modal

### User Experience

- Smooth animations and transitions
- Responsive design for all devices
- Fast loading with optimized performance
- Toast notifications for user feedback

### Article Types

- **Featured Articles**: Highlighted in the hero carousel
- **Regular Articles**: Displayed in topic-filtered grids
- **Trending Articles**: Automatically sorted by publication date

## 🔧 Customization

### Adding New Topics

Update the `Topic` type in `types/index.ts`:

```typescript
export type Topic =
  | "Technology"
  | "Sports"
  | "Politics"
  | "Entertainment"
  | "Health"
  | "Science"
  | "YourNewTopic";
```

### Styling

The application uses Tailwind CSS with custom color scheme:

- Primary: `#0D1B2A` (Dark blue)
- Background: `#FAFAFA` (Light gray)
- Custom fonts: Playfair Display for headings, Source Sans 3 for body text

## 🌐 API Endpoints

- `GET /api/articles` - Fetch all articles with optional filtering
  - Query params: `topic`, `search`, `featured`
- `POST /api/articles` - Create a new article
- `GET /api/articles/[id]` - Fetch a specific article by ID

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy with one click

### Other Deployment Options

- **Netlify**: Connect your GitHub repo and deploy
- **AWS**: Use AWS Amplify or deploy to EC2
- **Docker**: Build a Docker image and deploy to any container platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Vercel](https://vercel.com/) for hosting and deployment

---

**Built with ❤️ using Next.js 15 and React 19**
