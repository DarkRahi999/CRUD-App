
export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-10">
      <div className="max-w-4xl mx-auto py-6 px-4 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Book Manager | Made with ❤️ by ~ <i>Bisakto Rahi</i> 
        </p>
      </div>
    </footer>
  );
}
