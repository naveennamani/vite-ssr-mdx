export default function fix_ssr_esm_modules(replacements) {
  function transform(code, id, ssr) {
    if (ssr)
      return replacements.reduce((prevCode, { find, replacement }) => {
        return prevCode.replaceAll(find, replacement);
      }, code);
  }

  return {
    name: "vite-plugin-fix-ssr-esm-modules",
    apply: "build",
    enforce: "post",
    transform: transform,
  };
}
