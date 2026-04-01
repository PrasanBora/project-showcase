export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-12 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1.5">
          <span className="font-mono tracking-widest font-bold text-text-primary text-xl">
            STUDIO
          </span>
          <span className="text-sm text-text-muted">
            Building the web, one project at a time.
          </span>
        </div>
        <div className="text-sm text-text-muted font-medium">
          © {new Date().getFullYear()} Studio Inc.
        </div>
      </div>
    </footer>
  );
}
