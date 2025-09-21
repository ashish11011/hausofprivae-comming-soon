import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className=" w-screen h-screen">
      <Image
        src="/mobile.jpeg"
        alt="coming soon"
        width={500}
        height={500}
        className="h-full w-full object-cover md:hidden"
      />
      <Image
        src="/desktop.jpeg"
        alt="coming soon"
        width={900}
        height={900}
        className="h-full w-full object-cover hidden md:block"
      />
    </div>
  );
}
