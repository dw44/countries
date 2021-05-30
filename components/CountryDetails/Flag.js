import Image from 'next/image';

export default function Flag({ name, flag }) {
  return (
    <Image 
      src={ flag }
      alt={ name }
      quality={100}
      layout="intrinsic"
      width={720}
      height={480}
    />
  );
}
