import Navbar from "./Navbar";

export default function PageLayout({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {children}
    </div>
  );
}
