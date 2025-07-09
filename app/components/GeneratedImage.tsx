import Image from "next/image";

interface GeneratedImageProps {
  imageUrl: string;
}

export default function GeneratedImage({ imageUrl }: GeneratedImageProps) {
  return (
    <div className="mt-8">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <img src={imageUrl} alt="Generated artwork" className="object-cover" />
      </div>
    </div>
  );
}
