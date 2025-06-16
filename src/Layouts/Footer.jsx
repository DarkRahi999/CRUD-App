
export default function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-10">
      <div className="max-w-4xl mx-auto py-6 px-4 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Book Manager | Made with <i className="text-slate-800 text-lg fa-solid fa-heart"></i> by ~ <i className="text-slate-800">Bisakto Rahi</i> 
        </p>
      </div>
    </footer>
  );
}
