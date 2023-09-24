export function whichColorSchemeNow() {
  let newColorScheme = "";

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      newColorScheme = event.matches ? "dark" : "light";
    });

  return newColorScheme;
}
