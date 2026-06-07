import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "../utils/animations";

// import img1 from "../public/dhoni_image_1.jpg";
// import img2 from "../public/dhoni_image_2.jpg";
// import img3 from "../public/dhoni_image_3.jpg";
// import img4 from "../public/dhoni_image_4.jpg";
// import img5 from "../public/dhoni_image_5.jpg";
// import img6 from "../public/dhoni_image_6.jpg";

const dummyPhotos = [
  "/dhoni_image_1.jpg",
  "/dhoni_image_2.jpg",
  "/dhoni_image_3.jpg",
  "/dhoni_image_4.jpg",
  "/dhoni_image_5.jpg",
  "/dhoni_image_6.jpg",
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