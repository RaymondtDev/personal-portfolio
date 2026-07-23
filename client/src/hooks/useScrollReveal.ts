import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(trigger: HTMLElement | null, targets: NodeListOf<Element> | any) {
  gsap.from(targets, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",

    scrollTrigger: {
      trigger,
      start: "top 75%",
      toggleActions: "play none none none",
      once: true
    }
  })
}