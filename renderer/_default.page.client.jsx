import ReactDOM from "react-dom";
import React from "react";
import { getPage } from "vite-plugin-ssr/client";
import { PageShell } from "./PageShell";
import MDXComponentsProvider from "./context/MDXComponents";

hydrate();

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage();
  const { Page, pageProps } = pageContext;
  ReactDOM.hydrate(
    <PageShell pageContext={pageContext}>
      <MDXComponentsProvider>
        <Page {...pageProps} />
      </MDXComponentsProvider>
    </PageShell>,
    document.getElementById("page-view")
  );
}
