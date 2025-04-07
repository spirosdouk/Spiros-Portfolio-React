import Image from "next/image";

const Logo = () => (
  <div className="flex-shrink-0">
    <Image
      src="/images/logosign.png"
      alt="Logo"
      width={192}
      height={48}
      quality={100}
      priority
      style={{ width: "192px", height: "48px" }}
    />
  </div>
);

export default Logo;
