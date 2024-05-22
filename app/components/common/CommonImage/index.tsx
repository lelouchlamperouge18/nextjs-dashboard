import Image, { ImageProps } from 'next/image';

export default function CommonImage(props: ImageProps) {
  return (
    <div className={props.className}>
      <Image {...props} className="h-full w-auto" />
    </div>
  );
}
