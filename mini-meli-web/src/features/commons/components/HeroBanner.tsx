import Image from 'next/image';
import Link from 'next/link';

type HeroBannerProps = {
  className: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  linkClassName?: string;
  linkStyle?: React.CSSProperties;
};

export function HeroBanner({
  className,
  style,
  imageStyle,
  linkClassName,
  linkStyle,
}: HeroBannerProps) {
  return (
    <div className={className} style={style}>
      <Image
        src="https://tayuh2o6fu1ffl9a.public.blob.vercel-storage.com/products/huawei-watch-gt-3-review-monitoring-img-600x400-uhx54qZ0p6eKnDwplq1H3C1lwJXRQF.webp"
        alt="Productos en oferta"
        fill
        priority
        style={imageStyle}
      />
      <Link href="/items?search=wearables" className={linkClassName} style={linkStyle}>
        <p className="text-white mb-3 fs-5">El tiempo con papá es muy valioso</p>
        <p className="text-white mb-3 fs-3">Nada mejor que regalarle un SmartWatch</p>
        <span className="badge bg-success mb-3 fs-5">Hasta 40% OFF</span>
        <br className="d-none d-md-block" />
      </Link>
    </div>
  );
}
