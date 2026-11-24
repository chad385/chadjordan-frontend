export function MosaicPlaceholder() {
  return (
    <div
      className="flex flex-col justify-end min-h-[280px] aspect-video p-6 md:p-8"
      style={{ background: "#0d1b2e", border: "0.5px solid var(--border-hairline)" }}
      data-video-slot="mosaic"
    >
      <p className="label text-text-accent">Video embed placeholder</p>
      <h3 className="font-heading text-white text-3xl mt-4 leading-tight">Durindal · MOSAIC</h3>
      <p className="text-text-muted mt-3 max-w-[42ch] leading-relaxed">
        A 20-second spot for MOSAIC, Durindal&rsquo;s behavioral briefing software.
      </p>
      <p className="label !text-[0.55rem] mt-6 text-white/40">
        No video file is in the repo yet. The embed replaces this block.
      </p>
    </div>
  );
}

export function CsgFeature() {
  return (
    <a
      href="https://csgpro.app"
      target="_blank"
      rel="noreferrer"
      className="group block h-full"
      style={{ border: "0.5px solid var(--border-hairline)" }}
    >
      <div className="aspect-video overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/home/csgpro.webp"
          alt="CSG PRO, a studio image system"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
        />
      </div>
      <div className="p-6 md:p-8">
        <p className="label text-text-accent">CSG PRO</p>
        <p className="text-white mt-3 leading-relaxed">
          My own image system. It locks a brand&rsquo;s visual DNA once, then produces on-brand assets for close to free. Durindal uses it to make theirs.
        </p>
        <span className="label !text-[0.55rem] text-text-accent mt-4 inline-block">Open csgpro.app →</span>
      </div>
    </a>
  );
}
