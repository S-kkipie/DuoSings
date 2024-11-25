import { BorderBeam } from "@/components/ui/border-beam";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Marquee from "@/components/ui/marquee";
import SparklesText from "@/components/ui/sparkles-text";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { title } from "process";
const reviews = [
  {
    name: "Ana",
    username: "@ana",
    body: "¡Increíble! Facilita la comunicación en tiempo real.",
    img: "https://avatar.vercel.sh/ana",
  },
  {
    name: "Carlos",
    username: "@carlos",
    body: "Una herramienta esencial para la inclusión.",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "Sofia",
    username: "@sofia",
    body: "Fácil de usar y traducción precisa.",
    img: "https://avatar.vercel.sh/sofia",
  },
  {
    name: "Luis",
    username: "@luis",
    body: "Revoluciona la forma de aprender lenguaje de señas.",
    img: "https://avatar.vercel.sh/luis",
  },
  {
    name: "María",
    username: "@maria",
    body: "Excelente app para mejorar la comunicación.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Pedro",
    username: "@pedro",
    body: "Una herramienta clave para la inclusión social.",
    img: "https://avatar.vercel.sh/pedro",
  },
];
const modules = [
  {
    title: "ASL Foundations: A Beginner’s Journey (5 weeks)",
    description:
      "Learn the basics of American Sign Language, including the alphabet, numbers, and common phrases.",
    duration: "5 weeks",
    lessons: [
      {
        week: "Week 1",
        lesson: "Deaf Awareness, Alphabet, Meet & Greet",
        activities:
          "Complete Deaf Awareness Quiz, Practice fingerspelling names, Fingerspell phone game",
        homework:
          "Complete ABC’s and Meet & Greet activities on ASLdeafined, Record an expressive video signing the ABC’s",
      },
      {
        week: "Week 2",
        lesson: "Review Alphabet, Numbers 1-20, Handshapes & Locations, Colors",
        activities:
          "Review ABC’s, Count from 1-20 with a partner, Share favorite and least favorite colors",
        homework:
          "Complete activities on ASLdeafined, Record signing numbers 1-20",
      },
      {
        week: "Week 3",
        lesson: "Survival Words, Deaf Culture 1, Fingerspelling 1",
        activities:
          "Identify handshapes and locations, Practice vocabulary, Sentence translations, Engage in short ASL conversations",
        homework:
          "Complete activities on ASLdeafined, Record fingerspelling your 10 favorite people",
      },
      {
        week: "Week 4",
        lesson: "Family, Pronouns, Verb 1",
        activities:
          "Identify handshapes and locations, Practice vocabulary, Sentence translations, Engage in short ASL conversations",
        homework:
          "Complete activities on ASLdeafined, Record fingerspelling family members' names",
      },
      {
        week: "Week 5",
        lesson:
          "Antonyms & Synonyms 1, Famous Deaf People 1, Classroom Essentials 1, Quiz 1",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Complete activities on ASLdeafined, Record fingerspelling each word and signing it",
      },
    ],
  },
  {
    title: "ASL in Action: Building on Basics (6 weeks)",
    description:
      "Continue learning American Sign Language with more advanced vocabulary and sentence structure.",
    duration: "6 weeks",
    lessons: [
      {
        week: "Week 6",
        lesson: "Handshape Quiz 1, Grammar Quiz 1, Question Words",
        activities:
          "Identify handshapes and locations, Practice vocabulary and sentences, Engage in ASL conversations",
        homework: "Record signing sentences using 10 question words",
      },
      {
        week: "Week 7",
        lesson: "Classroom Essentials 2, Time-1",
        activities:
          "Practice vocabulary and sentences, Handshape games, Engage in ASL conversations",
        homework: "Record using 10 vocabulary signs from Time-1 in sentences",
      },
      {
        week: "Week 8",
        lesson: "Emotions, Deaf Culture 2, Clothing",
        activities:
          "Practice vocabulary and sentences, Handshape games, Engage in ASL conversations",
        homework: "Record signing what emotion you feel today and why",
      },
      {
        week: "Week 9",
        lesson: "Animals 1, Verbs 2, Antonyms & Synonyms 2",
        activities:
          "Practice vocabulary and sentences, Handshape games, Engage in ASL conversations",
        homework: "Record signing animals seen in a petting zoo",
      },
      {
        week: "Week 10",
        lesson: "Beverages 1, Deaf History 1, Quiz 2",
        activities:
          "Practice vocabulary and sentences, Handshape games, Engage in ASL conversations",
        homework:
          "Record signing preferred beverages, with matching facial expressions",
      },
      {
        week: "Week 11",
        lesson: "Location Quiz 1, Famous Deaf People 2, Human Body",
        activities:
          "Identify handshapes and locations, Practice vocabulary with partner, Engage in ASL conversations",
        homework:
          "Complete activities on ASLdeafined, Record fingerspelling body parts and point to them on your body",
      },
    ],
  },
  {
    title: "Mastering ASL: Advanced Vocabulary and Conversations (6 weeks)",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "6 weeks",
    lessons: [
      {
        week: "Week 12",
        lesson: "Numbers 21-40, Math Number Challenge 2, House",
        activities:
          "Practice vocabulary, Sentence translations, Handshape games, Engage in ASL conversations",
        homework:
          "Record a video describing the cleanest, dirtiest, and biggest room in your house",
      },
      {
        week: "Week 13",
        lesson: "Food 1, Storytime by Jonelle 1, Deaf Culture 3",
        activities:
          "Practice learned vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Record a video discussing what you eat for breakfast, lunch, and dinner",
      },
      {
        week: "Week 14",
        lesson: "Fingerspelling 2, Verbs 3, Antonyms & Synonyms 3",
        activities:
          "Identify handshapes, Practice sentence translations, Engage in ASL conversations",
        homework:
          "Record 10 verbs from the lesson, fingerspell and sign them, find synonyms for each",
      },
      {
        week: "Week 15",
        lesson: "Adjectives (Size), Seasons, Days of the Week, Quiz 3",
        activities:
          "Practice vocabulary and sentence translations, Engage in ASL conversations",
        homework:
          "Record signing each day of the week and describe your activities on those days",
      },
      {
        week: "Week 16",
        lesson: "Handshape Quiz, Grammar Quiz 2, Famous Deaf People 3",
        activities:
          "Identify handshapes, Practice sentence translations, Engage in ASL conversations",
        homework: "Record three facts about William Ellsworth 'Dummy' Hoy",
      },
      {
        week: "Week 17",
        lesson: "Numbers 41-60, Math Number Challenge 3, Rooms in a House",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework: "Record signing numbers 0-60 and identify any difficulties",
      },
    ],
  },
  {
    title: "Fluent in ASL: Advanced Concepts and Conversation (8 weeks)",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "8 weeks",
    lessons: [
      {
        week: "Week 18",
        lesson: "Feelings, Verbs 4, Antonyms & Synonyms 4",
        activities:
          "Practice vocabulary and sentence translations, Engage in ASL conversations",
        homework:
          "Record gestures (no signing) for feelings like thirsty, lost, and confident",
      },
      {
        week: "Week 19",
        lesson: "Prepositions, Food 2, Action Verbs 1",
        activities:
          "Practice vocabulary, Sentence translations, Handshape games, Engage in ASL conversations",
        homework:
          "Write 10 sentences in English, translate to ASL, and record signing them",
      },
      {
        week: "Week 20",
        lesson: "Midterm Review and Examination",
        activities:
          "Review all lessons from weeks 1-19, Practice vocabulary and sentence construction",
        homework:
          "Prepare for the midterm exam, review all ASL concepts and recordings",
      },
      {
        week: "Week 21",
        lesson: "Character, Deaf History 2, Quiz 4",
        activities:
          "Identify handshapes and locations, Practice vocabulary and sentence translations, Engage in ASL conversations",
        homework:
          "Record yourself signing about 10 family members and match a character trait to them",
      },
      {
        week: "Week 22",
        lesson: "Location Quiz 2, Numbers 61-80, Math Number Challenge 4",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Record signing numbers 0-80 while someone calls out random numbers",
      },
      {
        week: "Week 23",
        lesson: "Famous Deaf People 4, Fruits & Veggies, Places",
        activities:
          "Identify handshapes and locations, Practice vocabulary and sentence translations, Engage in ASL conversations",
        homework:
          "Record a video planning a weekend for your family, describing 4 places you will visit",
      },
      {
        week: "Week 24",
        lesson: "Adverbs 1, Deaf Culture 4, Verbs 5",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Record fingerspelling and signing each vocabulary word, then review the video for improvements",
      },
      {
        week: "Week 25",
        lesson: "Antonyms & Synonyms 5, Time 2, Kitchen",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Record signing 10 different times (a.m. and p.m.) and review the clarity of your signs",
      },
    ],
  },
  {
    title: "ASL Proficiency: Mastering Complex Sentences (6 weeks)",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "6 weeks",
    lessons: [
      {
        week: "Week 26",
        lesson: "Calendar, Storytime by Jonelle 2, Quiz 5",
        activities:
          "Identify handshapes, Practice vocabulary, Engage in ASL conversations",
        homework:
          "Record introducing your family members and their birthdates, including any pets",
      },
      {
        week: "Week 27",
        lesson: "Handshape Quiz 3, Grammar Quiz 2, Famous Deaf People 5",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework: "Record three facts about Helen Keller",
      },
      {
        week: "Week 28",
        lesson:
          "Numbers 81-100, Math Number Challenge 5, Symptoms of Illness 1",
        activities:
          "Practice vocabulary and sentence translations, Engage in ASL conversations",
        homework:
          "Record a video describing a time you visited a doctor’s office or hospital and how you felt",
      },
      {
        week: "Week 29",
        lesson: "Grocery Store, Extended Family, Living Room",
        activities:
          "Identify handshapes, Practice vocabulary, Engage in ASL conversations",
        homework:
          "Record describing various family members, such as grandparents, nieces, and best friends",
      },
      {
        week: "Week 30",
        lesson: "Verbs 6, Antonyms & Synonyms 6, Food 3",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Record 10 verbs without looking up synonyms and identify alternative words from memory",
      },
      {
        week: "Week 31",
        lesson: "Religion 1, Deaf History 3, Quiz 6",
        activities:
          "Identify handshapes, Practice vocabulary and sentence translations, Engage in ASL conversations",
        homework:
          "Record yourself discussing how you would plan a worship service, including details like music or prayer",
      },
    ],
  },
  {
    title: "Advanced ASL Immersion: Culture and Communication (4 weeks)",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "4 weeks",
    lessons: [
      {
        week: "Week 32",
        lesson: "Location Quiz 3, Sports, Famous Deaf People 6",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Record a video explaining which sport you would play professionally or why you don't like sports",
      },
      {
        week: "Week 33",
        lesson: "Bathroom, Celebrations, Domestic Pets",
        activities:
          "Identify handshapes, Practice vocabulary, Engage in ASL conversations",
        homework:
          "Record yourself signing about the domestic pets you would love to have and why",
      },
      {
        week: "Week 34",
        lesson: "Deaf Culture 5, Fingerspelling 3, Clothing Accessories",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Record signing about the types of clothing accessories you use most and where you buy them",
      },
      {
        week: "Week 35",
        lesson: "Bedroom, Winter, Quiz 7, Handshape Quiz 4",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Record signing about your favorite winter memory, including detailed experiences",
      },
    ],
  },
  {
    title: "ASL Mastery: Fluency and Cultural Exploration (5 weeks)",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "5 weeks",
    lessons: [
      {
        week: "Week 36",
        lesson:
          "Grammar Quiz 4, Numbers in Hundreds, Math Number Challenge 6, Weather 1",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Record signing about weather you dislike, such as lightning or driving in snow",
      },
      {
        week: "Week 37",
        lesson: "Storytime by Jonelle 3, Symptoms of Illness 2, Verbs 7",
        activities:
          "Identify handshapes, Practice vocabulary, Engage in ASL conversations",
        homework:
          "Record fingerspelling a verb from the lesson and signing its opposite (e.g., destroy and build)",
      },
      {
        week: "Week 38",
        lesson: "Antonyms & Synonyms 7, Time 3, Professionals 1",
        activities:
          "Practice vocabulary, Sentence translations, Engage in ASL conversations",
        homework:
          "Record signing your daily activities from Monday through Sunday",
      },
      {
        week: "Week 39",
        lesson: "Transportation, Storytime by Levi 1, Thanksgiving",
        activities:
          "Identify handshapes, Practice vocabulary, Engage in ASL conversations",
        homework:
          "Record signing about a memorable Thanksgiving, including what you ate and who was with you",
      },
      {
        week: "Week 40",
        lesson: "Final Exam",
        activities:
          "Review all learned material, Practice vocabulary and sentence construction, Final assessments",
        homework:
          "Prepare for the final exam by reviewing all previous recordings and lessons",
      },
    ],
  },
];
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
export function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-transparent md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l dark:from-background"></div>
    </div>
  );
}
export default function Home() {
  return (
    <div className="mx-auto flex-1 overflow-hidden">
      <section
        id="hero"
        className="relative mx-auto mt-12 flex flex-col items-center px-6 text-center md:px-8"
      >
        <div className="mb-16 px-10">
          <GradualSpacing
            framerProps={{
              hidden: { opacity: 0.3, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            text="Duosing es la nueva forma"
            delayMultiple={0.05}
            className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
          />
          <GradualSpacing
            framerProps={{
              hidden: { opacity: 0.3, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            text="de aprender"
            delayMultiple={0.15}
            className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
          />

          <GradualSpacing
            framerProps={{
              hidden: { opacity: 0.3, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            delayMultiple={0.1}
            text="lenguaje de señas"
            className="animate-fade-in translate-y-[-1rem] bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-3 text-center font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
          />
        </div>
        <SparklesText
          text="Descubre la comunicación sin barreras con nuestra app de traducción de
          señas impulsada por IA"
          className="animate-fade-in mb-12 translate-y-[-1rem] text-center text-lg tracking-tight text-gray-400 [--animation-delay:400ms] md:text-xl"
        ></SparklesText>
        <button className="animate-fade-in inline-flex h-9 translate-y-[-1rem] items-center justify-center gap-1 whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors ease-in-out [--animation-delay:600ms] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-black">
          <span>Crea una cuenta gratis! </span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          >
            <path
              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="relative mt-12 flex h-[500px] w-full max-w-[80rem] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <img src="/duoHero.jpeg" alt="" />
          <BorderBeam duration={12} delay={9} />
        </div>
        <MarqueeDemo />
        <h2 className="my-5 w-full text-left">
          Inspirado en el curso de{" "}
          <a
            className="font-bold text-primary"
            href="https://lifeprint.com/asl101/lessons/lessons.htm"
          >
            LIFEPRINT
          </a>
        </h2>
        <h1 className="mb-8 text-4xl font-bold text-primary">ROADMAP</h1>
        <Accordion type="single" collapsible className="w-2/3">
          <div className="relative flex flex-col justify-center overflow-hidden antialiased">
            <div className="mx-auto w-full px-4 md:px-6">
              <div className="flex flex-col justify-center divide-y [&>*]:py-4">
                <div className="mx-auto w-full">
                  <div className="relative space-y-8 before:absolute border-dotted before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent  md:before:translate-x-0">
                    {modules.map((module, index) => {
                      return (
                        <div className="relative">
                          <div className="mb-3 items-center md:flex md:space-x-4">
                            <div className="flex  space-x-4 md:space-x-2 md:space-x-reverse">
                              <div className="flex h-10 w-10 font-bold text-xl translate-y-3 items-center text-secondary justify-center rounded-full bg-white shadow ">
                                {index + 1} 
                              </div>
                              <AccordionItem
                                className="relative !ml-14"
                                value={`item-` + index}
                              >
                                <AccordionTrigger className="text-xl font-semibold text-primary">
                                  {module.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="relative flex flex-col justify-center overflow-hidden antialiased">
                                    <div className="mx-auto w-full px-4 md:px-6">
                                      <div className="flex flex-col justify-center divide-y [&>*]:py-4">
                                        <div className="mx-auto w-full">
                                          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:ml-[8.75rem] md:before:translate-x-0">
                                            {module.lessons.map(
                                              (value: any, index: number) => {
                                                return (
                                                  <div className="relative">
                                                    <div className="mb-3 items-center md:flex md:space-x-4">
                                                      <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                                                          <svg
                                                            className={
                                                              index === 0
                                                                ? "fill-primary"
                                                                : index ===
                                                                    module
                                                                      .lessons
                                                                      .length -
                                                                      1
                                                                  ? "fill-red-500"
                                                                  : "fill-slate-300"
                                                            }
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                          >
                                                            <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                                          </svg>
                                                        </div>
                                                        <h1 className="text-secondary md:w-28">
                                                          {value.week}
                                                        </h1>
                                                      </div>
                                                      <div className="ml-14">
                                                        <span className="font-bold text-primary">
                                                          {value.lesson}
                                                        </span>
                                                      </div>
                                                    </div>
                                                    <div className="ml-14 rounded border p-4 shadow md:ml-44">
                                                      {value.activities}.
                                                      <br></br>
                                                      {value.homework}
                                                    </div>
                                                  </div>
                                                );
                                              },
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Accordion>
        {/* <div className="relative flex flex-col justify-center overflow-hidden antialiased">
          <div className="mx-auto w-full px-4 md:px-6">
            <div className="flex flex-col justify-center divide-y [&>*]:py-16">
              <div className="mx-auto w-full">
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:ml-[8.75rem] md:before:translate-x-0">
                  {weeks.map((value: any, index: number) => {
                    return (
                      <div className="relative">
                        <div className="mb-3 items-center md:flex md:space-x-4">
                          <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                              <svg
                                className={
                                  index === 0
                                    ? "fill-primary"
                                    : index === 39
                                      ? "fill-red-500"
                                      : "fill-slate-300"
                                }
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                              >
                                <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                              </svg>
                            </div>
                            <h1 className="text-secondary md:w-28">
                              {value.week}
                            </h1>
                          </div>
                          <div className="ml-14">
                            <span className="font-bold text-primary">
                              {value.lesson}
                            </span>
                          </div>
                        </div>
                        <div className="ml-14 rounded border p-4 shadow md:ml-44">
                          {value.activities}.<br></br>
                          {value.homework}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
