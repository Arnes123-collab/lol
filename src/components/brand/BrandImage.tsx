'use client';

import { type BrandAssetKey } from '@/lib/brand/defaultBrand';
import { useBrandProfile } from '@/lib/brand/useBrandProfile';

type Props = {
  assetKey: BrandAssetKey;
  className?: string;
  fallbackLabel?: string;
};

export default function BrandImage({ assetKey, className = '', fallbackLabel = 'Фото тренера' }: Props) {
  const { profile } = useBrandProfile();
  const asset = profile.assets.find((item) => item.key === assetKey);
  const imageUrl = asset?.imageUrl || '';

  if (imageUrl) {
    return <img src={imageUrl} alt={fallbackLabel} className={`h-full w-full object-cover ${className}`} />;
  }

  return (
    <div className={`flex h-full w-full items-center justify-center bg-[#EFE7DA] p-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#666666] ${className}`}>
      {fallbackLabel}
    </div>
  );
}
