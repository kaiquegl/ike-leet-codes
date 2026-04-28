import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";

export function RootLayout() {
  return (
    <div className="flex min-h-svh bg-[var(--codex-bg)] text-foreground">
      {/* scanline grid texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px"
        }}
      />

      <Sidebar />

      <main className="relative z-10 flex min-h-svh flex-1 flex-col overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
