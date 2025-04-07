import Image from "next/image";
import React from "react";

interface ProfileImageProps {
  sizes?: string;
}
const ProfileImage = ({ sizes }: ProfileImageProps) => (
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

export default ProfileImage;
