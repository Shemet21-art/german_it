export default function getCurrentLang() {
  return localStorage.getItem("lang") || "ru";
}
