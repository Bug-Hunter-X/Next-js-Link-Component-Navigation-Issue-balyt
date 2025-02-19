```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about" >
        <a>About</a>
      </Link>
    </div>
  );
}

export default MyComponent;

// Ensure that pages under /pages directory exist. Create /pages/index.js and /pages/about.js
```