import { MDXProvider } from "@mdx-js/react";

export default function MDXComponentsProvider({ children }) {
  return (
    <MDXProvider
      components={{
        h1: "strong",
        h2: "h2",
      }}
    >
      {children}
    </MDXProvider>
  );
}
