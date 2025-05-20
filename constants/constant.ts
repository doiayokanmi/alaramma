export interface SupportItem {
  id: number;
  image: string;
  title: string;
  para: string;
}

export const supportList: SupportItem[] = [
  {
    id: 0,
    image: "/personalize.png",
    title: "Personalized Support",
    para: 'Personalized one-on-one guidance and tailored lessons designed to help you succeed.',
  },
  {
    id: 1,
    image: "/progress.png",
    title: "Progress Tracking",
    para: 'Track your progress by regularly evaluating your performance and receiving feedback.',
  },
  {
    id: 2,
    image: "/engage.png",
    title: "Engagement",
    para: 'Experience interactive lessons that actively engage you, making learning more immersive and effective.',
  },
  {
    id: 3,
    image: "/personalize.png",
    title: "Flexibility",
    para: 'Learn at your own pace, anytime and anywhere, with the flexibility to fit Quranic studies into your daily life.',
  },
];


export const offerList: SupportItem[] = [
  {
    id: 0,
    image: "/reading.jpg",
    title: "Quran Recitation & Memorization",
    para: 'Allah has promised to preserve the Quran—and He enables His servants to memorize it. Start your Hifz journey today from home.',
  },
  {
    id: 1,
    image: "/praying.jpg",
    title: "Tawheed & Fiqh",
    para: 'Tawhid is the heart of Islam—affirming the oneness of Allah and forming the foundation of our faith. Fiqh brings Sharia into everyday life, offering practical guidance through the Quran and Sunnah.',
  },
  {
    id: 2,
    image: "/tajweed.jpg",
    title: "Tajweed",
    para: 'Tajweed ensures the perfect pronunciation of Quranic letters, preserving their qualities and rules. Learning Quran with Tajweed helps you recite each letter and word accurately, giving every verse its rightful beauty.',
  },
  {
    id: 3,
    image: "/alphabet.webp",
    title: "Arabic",
    para: 'Learning Arabic unlocks a deeper connection to the Quran, strengthens faith, preserves Islamic heritage, and enhances communication and cognitive skills.',
  },
]
