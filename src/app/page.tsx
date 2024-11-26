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
    title: "ASL Fundamentals",
    description:
      "Learn the basics of American Sign Language, including the alphabet, numbers, and common phrases.",
    duration: "5 weeks",
    lessons: [
      {
        week: "Week 1",
        lesson: "Introduction to ASL, alphabet, and basic numbers.",
        activities:
          "-Practice fingerspelling your name and basic numbers with a partner.",
        homework:
          "-Watch an ASL alphabet video and spell 10 common words.",
      },
      {
        week: "Week 2",
        lesson: "Common greetings and farewells.",
        activities:
          "-Role-play meeting someone new and saying goodbye.",
        homework:
          "-Practice signing 5 greetings and farewells in front of a mirror.",
      },
      {
        week: "Week 3",
        lesson: "Personal pronouns and basic questions.",
        activities:
          "-Play a matching game pairing pronouns with common actions.",
        homework:
          "-Write and sign 5 simple sentences using pronouns.",
      },
      {
        week: "Week 4",
        lesson: "Emotions and simple descriptions.",
        activities:
          "-Act out emotions and have your partner guess them.",
        homework:
          "-Create flashcards for 10 emotion-related signs.",
      },
      {
        week: "Week 5",
        lesson:
          "Family and relationships.",
        activities:
          "-Draw a family tree and sign each relationship.",
        homework:
          "-Practice introducing your family to someone in ASL",
      },
    ],
  },
  {
    title: "Everyday Communication",
    description:
      "Continue learning American Sign Language with more advanced vocabulary and sentence structure.",
    duration: "6 weeks",
    lessons: [
      {
        week: "Week 6",
        lesson: "Foods and drinks.",
        activities:
          "-Sign a pretend grocery list to a partner.",
        homework: "-Watch a cooking video in ASL and list new vocabulary.",
      },
      {
        week: "Week 7",
        lesson: "Advanced numbers and time concepts.",
        activities:
          "-Create a schedule and sign the times for each activity.",
        homework: "-Practice signing the time for daily activities.",
      },
      {
        week: "Week 8",
        lesson: "Daily activities.",
        activities:
          "Sign your morning or evening routine.",
        homework: "Record yourself signing 5 daily activities.",
      },
      {
        week: "Week 9",
        lesson: "Transportation and directions.",
        activities:
          "Role-play giving directions to a destination.",
        homework: "Create a map and sign directions to key places.",
      },
      {
        week: "Week 10",
        lesson: "Weather and nature.",
        activities:
          "Use weather flashcards to describe today’s weather.",
        homework:
          "Sign a 7-day weather forecast.",
      },  
    ],
  },
  {
    title: "Social Environment",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "6 weeks",
    lessons: [
      {
        week: "Week 11",
        lesson: "School and education.",
        activities:
          "Sign items in a classroom scene.",
        homework:
          "Write and sign 3 sentences about your school experience.",
      },
      {
        week: "Week 12",
        lesson: "Jobs and professions.",
        activities:
          "Mime various professions and have others guess them.",
        homework:
          "Create a list of 5 professions and their signs.",
      },
      {
        week: "Week 13",
        lesson: "Hobbies and sports",
        activities:
          "Sign a dialogue about your favorite hobby.",
        homework:
          "Learn and practice 3 sports-related signs.",
      },
      {
        week: "Week 14",
        lesson: "Vacations and holidays",
        activities:
          "Sign your favorite holiday traditions.",
        homework:
          "Create a short video signing about your last vacation.",
      },
      {
        week: "Week 15",
        lesson: "Shopping and money",
        activities:
          "Role-play shopping and discussing prices.",
        homework: "Write and sign 3 dialogues involving shopping.",
      },
    ],
  },
  {
    title: "Expression and Storytelling",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "8 weeks",
    lessons: [
      {
        week: "Week 16",
        lesson: "Colors and shapes.",
        activities:
          "Identify objects of specific colors and shapes in the room.",
        homework: "Create a visual collage and label it with ASL signs.",
      },
      {
        week: "Week 17",
        lesson: "Animals and household objects.",
        activities:
          "Match animal signs to their pictures.",
        homework:
          "Sign a story about a pet or favorite animal.",
      },
      {
        week: "Week 18",
        lesson: "Common verbs and adjectives.",
        activities:
          "Pair verbs with adjectives in mini-sentences.",
        homework:
          "Practice signing 10 action-oriented sentences.",
      },
      {
        week: "Week 19",
        lesson: "Telling simple stories.",
        activities:
          "Retell a simple children’s story in ASL.",
        homework:
          "Create a storyboard for an ASL tale.",
      },
      {
        week: "Week 20",
        lesson: "Idiomatic expressions",
        activities:
          "Learn 5 idioms and use them in a conversation.",
        homework:
          "Research 3 more idioms and practice signing them.",
      },
      
    ],
  },
  {
    "title": "Practical Situations",
    "description": "Master American Sign Language in practical scenarios, focusing on everyday situations and cultural etiquette.",
    "duration": "5 weeks",
    "lessons": [
      {
        "week": "Week 21",
        "lesson": "Emergencies and health",
        "activities": "Role-play asking for help in an emergency",
        "homework": "Create flashcards for 5 health-related signs"
      },
      {
        "week": "Week 22",
        "lesson": "Public transport and travel",
        "activities": "Sign a dialogue about planning a trip",
        "homework": "Watch a travel-related ASL video and note new vocabulary"
      },
      {
        "week": "Week 23",
        "lesson": "Restaurants and ordering food",
        "activities": "Role-play ordering at a restaurant",
        "homework": "Sign a list of your favorite meals"
      },
      {
        "week": "Week 24",
        "lesson": "Video phone conversations",
        "activities": "Simulate a video call in ASL",
        "homework": "Write a script for a video conversation"
      },
      {
        "week": "Week 25",
        "lesson": "Deaf community culture and etiquette",
        "activities": "Discuss and sign 3 facts about Deaf culture",
        "homework": "Research Deaf events and write a short summary"
      }
    ]
  },
  {
    "title": "Advanced Topics",
    "description": "Advance your ASL proficiency by tackling complex grammar, comparisons, and persuasive communication.",
    "duration": "5 weeks",
    "lessons": [
      {
        "week": "Week 26",
        "lesson": "Detailed descriptions",
        "activities": "Describe an object in detail",
        "homework": "Sign 3 descriptions of items in your house"
      },
      {
        "week": "Week 27",
        "lesson": "Advanced grammar and sentence structure",
        "activities": "Rearrange sentences to practice ASL grammar",
        "homework": "Translate 3 English sentences into ASL structure"
      },
      {
        "week": "Week 28",
        "lesson": "Comparisons and contrasts",
        "activities": "Sign comparisons between two items or ideas",
        "homework": "Create a Venn diagram and explain it in ASL"
      },
      {
        "week": "Week 29",
        "lesson": "Formal and informal registers",
        "activities": "Practice signing in formal and casual styles",
        "homework": "Write a formal ASL introduction"
      },
      {
        "week": "Week 30",
        "lesson": "Persuasive and argumentative speech",
        "activities": "Debate a simple topic using ASL",
        "homework": "Sign a persuasive message about a topic you care about"
      }
    ]
  },
  {
    "title": "Connecting with the Community",
    "description": "Engage with the Deaf community through cultural, technological, and social perspectives.",
    "duration": "5 weeks",
    "lessons": [
      {
        "week": "Week 31",
        "lesson": "History of the Deaf community.",
        "activities": "Present a historical fact about the Deaf community.",
        "homework": "Watch a video on Deaf history and summarize it."
      },
      {
        "week": "Week 32",
        "lesson": "Events and social participation.",
        "activities": "Practice signing an invitation to an event.",
        "homework": "Create an ASL flyer for a fictional Deaf event."
      },
      {
        "week": "Week 33",
        "lesson": "Technology use in ASL.",
        "activities": "Role-play using a device like a TTY or video relay.",
        "homework": "Research a new ASL-related technology."
      },
      {
        "week": "Week 34",
        "lesson": "Interviews and dialogues.",
        "activities": "Conduct a mock interview.",
        "homework": "Write and practice 5 interview questions."
      },
      {
        "week": "Week 35",
        "lesson": "Diversity in ASL (regionalisms).",
        "activities": "Learn and practice 3 regional variations in signs.",
        "homework": "Research and record 3 examples of ASL diversity."
      }
    ]
  },
  {
    "title": "Mastering ASL",
    "description": "Achieve fluency through advanced storytelling, projects, and real-world applications.",
    "duration": "5 weeks",
    "lessons": [
      {
        "week": "Week 36",
        "lesson": "Games and activities in ASL.",
        "activities": "Play ASL charades or bingo.",
        "homework": "Create your own ASL game."
      },
      {
        "week": "Week 37",
        "lesson": "Advanced storytelling and presentations.",
        "activities": "Present a short ASL story.",
        "homework": "Record and review a signed story."
      },
      {
        "week": "Week 38",
        "lesson": "Assessment and feedback.",
        "activities": "Peer-review signed sentences or stories.",
        "homework": "Reflect on your ASL learning journey in a signed video."
      },
      {
        "week": "Week 39",
        "lesson": "Interactions.",
        "activities": "Collaborate on a sign language presentation.",
        "homework": "Develop a sign language story or conversation."
      },
      {
        "week": "Week 40",
        "lesson": "Real-life simulations.",
        "activities": "Role-play real-world scenarios, like job interviews.",
        "homework": "Sign a goodbye video summarizing your learning experience."
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
