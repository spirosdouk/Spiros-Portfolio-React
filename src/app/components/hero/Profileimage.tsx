import Image from "next/image";
import React from "react";

interface ProfileImageProps {
  sizes: string;
}
export default function ProfileImage({ sizes = "100vw" }: ProfileImageProps) {
  return (
    <Image
      src="/images/profile.png"
      alt="Spiros Doukeris"
      fill
      sizes={sizes}
      className="object-cover object-center"
      priority
      quality={100}
    />
  );
}
