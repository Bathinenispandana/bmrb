import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0a1628] z-[100] flex flex-col items-center justify-center">
      <div className="relative">
        <Image
          src="/images/logo-symbol.avif"
          alt="Loading"
          width={80}
          height={80}
          className="animate-pulse"
        />
        <div className="absolute -inset-4 border-2 border-[#0367a6]/30 rounded-full animate-ping" />
      </div>
      <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full loading-bar rounded-full" />
      </div>
      <p className="mt-4 text-white/50 text-sm tracking-[0.2em] font-medium">LOADING</p>
    </div>
  );
}
