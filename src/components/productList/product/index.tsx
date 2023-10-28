import Image from "next/image"
import { motion } from "framer-motion"
const Product = (item: products) => {
  return (
    <motion.article
      whileHover={{ scale: 0.9, transition: { duration: 0.25, type: "keyframes" } }}
      className="shadow-xl p-2 rounded-lg"
    >
      <Image
        src={item.image}
        alt={item.title}
        width={500}
        height={500}
        loading="lazy"
        className="rounded-lg min-h-[30vh] max-h-[30vh]"
      />
      <div className="flex justify-between items-center pl-2">
        <div className="max-w-[70%]">
          <div className="mt-2 w-full overflow-hidden whitespace-nowrap text-ellipsis text-xxs md:text-sm">
            {item.title}
          </div>
          <div className="mt-1 flex [&>*]:text-xxs md:[&>*]:text-base">
            <div className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {item.price}
            </div>
          </div>
        </div>

        <div className="text-xxs md:text-base font-bold">{item.status}</div>
      </div>
    </motion.article>
  )
}
export default Product
