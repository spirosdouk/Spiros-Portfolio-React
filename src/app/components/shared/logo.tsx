import Image from "next/image";

const Logo = () => (
  <div className="flex-shrink-0">
    <Image
      src="/images/logosign.png"
      alt="Logo"
      width={192}
      height={48}
      className="h-12 w-auto"
      quality={100}
      priority
    />
  </div>
);

export default Logo;
