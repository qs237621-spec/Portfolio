export const blogPosts = [
  {
    id: "1",
    slug: "react-hooks-best-practices",
    title: "React Hooks Best Practices in 2024",
    description: "Essential patterns and best practices for using React Hooks effectively in modern applications.",
    excerpt: "Learn the essential patterns and best practices for using React Hooks effectively in your projects...",
    content: `# React Hooks Best Practices in 2024

React Hooks have revolutionized how we write React components. Here are the essential best practices you should follow.

## 1. Use Hooks Only at the Top Level

Never call hooks inside loops, conditions, or nested functions. Always use hooks at the top level of your React function.

\`\`\`jsx
// ❌ Don't do this
if (condition) {
  const [state, setState] = useState(initialState);
}

// ✅ Do this
const [state, setState] = useState(initialState);
if (condition) {
  // Use state here
}
\`\`\`

## 2. Use Custom Hooks for Reusable Logic

Extract complex logic into custom hooks for better reusability and testing.

\`\`\`jsx
// Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
\`\`\`

## 3. Follow Naming Conventions

Always start custom hooks with "use" to follow the convention and enable linting rules.

## 4. Optimize with useMemo and useCallback

Use these hooks to prevent unnecessary re-renders and improve performance.

\`\`\`jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## Conclusion

Following these best practices will help you write cleaner, more maintainable React applications.`,
    tags: ["React", "JavaScript", "Web Development", "Hooks"],
    publishedAt: "2024-01-15",
    readingTime: "5 min read",
    coverImage: "/images/blog/react-hooks-cover.webp"
  },
  {
    id: "2",
    slug: "tailwind-css-tips",
    title: "Tailwind CSS Tips and Tricks",
    description: "Advanced Tailwind CSS techniques to level up your styling workflow.",
    excerpt: "Discover powerful Tailwind CSS techniques that will transform your development workflow...",
    content: `# Tailwind CSS Tips and Tricks

Tailwind CSS is more than just a utility-first CSS framework. Here are some advanced techniques.

## 1. Custom Components

Create reusable components using Tailwind's @apply directive:

\`\`\`css
.btn-primary {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
\`\`\`

## 2. Dark Mode Implementation

Easily implement dark mode with Tailwind's dark mode utilities:

\`\`\`jsx
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <!-- Content -->
</div>
\`\`\`

## 3. Responsive Design

Tailwind makes responsive design intuitive:

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Responsive grid -->
</div>
\`\`\`

## 4. Animation Utilities

Use Tailwind's animation utilities for smooth transitions:

\`\`\`jsx
<button className="transform transition-transform hover:scale-105">
  Hover me
</button>
\`\`\`

## Conclusion

These tips will help you become more productive with Tailwind CSS.`,
    tags: ["Tailwind CSS", "CSS", "Web Design", "Frontend"],
    publishedAt: "2024-01-10",
    readingTime: "4 min read",
    coverImage: "/images/blog/tailwind-css-tips.webp"
  },
  {
    id: "3",
    slug: "javascript-async-patterns",
    title: "Mastering JavaScript Async Patterns",
    description: "Deep dive into asynchronous programming patterns in JavaScript.",
    excerpt: "Understanding async/await, Promises, and other asynchronous patterns in JavaScript...",
    content: `# Mastering JavaScript Async Patterns

Asynchronous programming is fundamental to modern JavaScript development.

## 1. Callbacks to Promises

Evolution from callback patterns to Promises:

\`\`\`javascript
// Callback pattern
getData((data) => {
  processData(data, (result) => {
    console.log(result);
  });
});

// Promise pattern
getData()
  .then(processData)
  .then(result => console.log(result));
\`\`\`

## 2. Async/Await

Cleaner syntax for handling asynchronous operations:

\`\`\`javascript
async function fetchData() {
  try {
    const data = await getData();
    const result = await processData(data);
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}
\`\`\`

## 3. Promise Combiners

Use Promise.all and Promise.race for complex scenarios:

\`\`\`javascript
// Run multiple promises in parallel
const [data1, data2] = await Promise.all([
  fetch(url1),
  fetch(url2)
]);

// Race between promises
const result = await Promise.race([
  fetch(url1),
  fetch(url2)
]);
\`\`\`

## Conclusion

Mastering these patterns will make you a more effective JavaScript developer.`,
    tags: ["JavaScript", "Async", "Promises", "Web Development"],
    publishedAt: "2024-01-05",
    readingTime: "6 min read",
    coverImage: "/images/blog/javascript-async.webp"
  }
]