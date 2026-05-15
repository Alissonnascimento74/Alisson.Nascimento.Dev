"use client";

export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
    >
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-25 blur-3xl animate-aurora-1"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 100, 180, 0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-20 right-0 w-[450px] h-[450px] rounded-full opacity-30 dark:opacity-25 blur-3xl animate-aurora-2"
        style={{
          background:
            "radial-gradient(circle, rgba(100, 150, 255, 0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-25 dark:opacity-20 blur-3xl animate-aurora-3"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 200, 100, 0.6) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
