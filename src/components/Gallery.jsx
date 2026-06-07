import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "../utils/animations";

const dummyPhotos = [
  "src/assests/dhoni_image_1.jpg",
  "src/assests/dhoni_image_2.jpg",
  "src/assests/dhoni_image_3.jpg",
  "src/assests/dhoni_image_4.jpg",
  "src/assests/dhoni_image_5.jpg",
  "src/assests/dhoni_image_6.jpg",
];

function Gallery() {
  return (
    <div>
      <h1>GALLERY</h1>
      <motion.div
        className="gallery-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {dummyPhotos.map((photo, index) => (
          <motion.div key={index} variants={scaleIn} className="gallery-item">
            <img src={photo} alt={`Gallery ${index + 1}`} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Gallery;