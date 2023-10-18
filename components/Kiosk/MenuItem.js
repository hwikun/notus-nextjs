import Image from "next/image";

export default function MenuItem({img, menuName}) {
  return (
    <div className={`flex flex-col justify-center items-center w-1/4 py-2 px-4`}>
      <div className={`relative overflow-hidden w-full h-full`}>
        <Image src={img} alt={`menuImg`} layout={`fill`} objectFit={"cover"} objectPosition={"center"} />
      </div>
      <span>{menuName}</span>

    </div>
  )
}