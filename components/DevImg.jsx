import Image from "next/image"

const DevImg = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} alt="Developer Image" fill priority/>
    </div>
  )
}

export default DevImg