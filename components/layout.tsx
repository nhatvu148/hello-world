import SectionNavbars from "pages-sections/components/SectionNavbars.js";

export default function Layout({ children }) {
  return (
    <>
      <SectionNavbars />
      {children}
    </>
  );
}
