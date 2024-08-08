import { motion } from "framer-motion";

// Function to split text into animated spans
const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(" ").map((word, index) => (
    <span key={index} className="inline-block mr-1">
      {word.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterAnimation}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}{" "}
    </span>
  ));
  return <span>{words}</span>;
};

const letterAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const fadeIn = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.01 } },
};

export default function Prose() {
  return (
    <main className="mx-auto max-w-7xl">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <p className="font-light mt-20">
          <AnimatedText text="I help teams bridge the gap between where they're at and what their audiences want, feel, and need. I've worked in places like The Museum of English Rural Life, Reading Museum, Storybook, Chromatic, and a bunch of leading UK high street brands. In August 2024, I'm returning to The MERL to become the museum's head of marketing." />
        </p>
        <p className="font-light mt-12">
          <AnimatedText text="On the side, I reserve some small capacity for freelance marketing and design projects, across editorial, social media marketing, and web design + development. If you have something in mind or you'd just like to chat through some ideas, I'm all ears and I'd love to hear from you." />
        </p>
        <div className="my-12 w-fit hover:underline">
          <a href="mailto:jbvaughan1993@gmail.com" title="Write to me" className='w-fit'>
            <p>
              <AnimatedText text="Reach out →" />
            </p>
          </a>
        </div>
      </motion.div>
    </main>
  );
}
