export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export const stagger = (delay = 0.08) => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay } },
});

export const slideLeft = {
  hidden: { opacity: 0, x: -24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export const slideRight = {
  hidden: { opacity: 0, x: 24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
};

export const cardHover = {
  rest:  { y: 0,  boxShadow: "0 0px 0px rgba(0,0,0,0)", transition: { duration: 0.25 } },
  hover: { y: -6, boxShadow: "0 24px 64px rgba(0,0,0,0.4)", transition: { duration: 0.25 } },
};

export const viewportOnce = { once: true, margin: "-60px" };
