interface Lesson {
  title: string;
  objetives: string[] | null;
  vocabulary: string[] | null;
  href: string;
}

interface Module {
  title: string;
  description: string;
  duration: string;
  href: string;
  lessons: Lesson[];
}
export const modules: Module[] = [
  {
    title: "ASL Fundamentals",
    description:
      "Learn the basics of American Sign Language, including the alphabet, numbers, and common phrases.",
    duration: "5 lessons",
    href: "/learn/module/01",
    lessons: [
      {
        title: "Greetings and Farewells in ASL",
        objetives: [
          "Recognize and interpret basic greetings and farewells in ASL.",
          "Perform greetings and farewells using appropriate facial expressions.",
          "Understand the cultural significance of greetings and farewells in Deaf interactions.",
          "Practice fluency and accuracy in signing the introduced vocabulary.",
        ],
        vocabulary: [
          "Greetings: Hello, Hi, Good morning, Good afternoon, Good evening, How are you?",
          "Farewells: Goodbye, See you later, Take care, See you tomorrow, Have a nice day",
          "Fingerspelling Alphabet: A-Z",
        ],
        href: "/lesson01",
      },
      {
        title: "Common greetings and farewells.",
        objetives: "-Role-play meeting someone new and saying goodbye.",
        vocabulary:
          "-Practice signing 5 greetings and farewells in front of a mirror.",
        href: "/lesson02",
      },
      {
        title: "Personal pronouns and basic questions.",
        objetives:
          "-Play a matching game pairing pronouns with common actions.",
        vocabulary: "-Write and sign 5 simple sentences using pronouns.",
        href: "/lesson03",
      },
      {
        title: "Emotions and simple descriptions.",
        objetives: "-Act out emotions and have your partner guess them.",
        vocabulary: "-Create flashcards for 10 emotion-related signs.",
        href: "/lesson04",
      },
      {
        title: "Family and relationships.",
        objetives: "-Draw a family tree and sign each relationship.",
        vocabulary: "-Practice introducing your family to someone in ASL",
        href: "/lesson04",
      },
    ],
  },
  {
    title: "Everyday Communication",
    description:
      "Continue learning American Sign Language with more advanced vocabulary and sentence structure.",
    duration: "6 lessons",
    href: "/learn/module/02",

    lessons: [
      {
        title: "Foods and drinks.",
        objetives: "-Sign a pretend grocery list to a partner.",
        vocabulary: "-Watch a cooking video in ASL and list new vocabulary.",
        href: "/lesson01",
      },
      {
        title: "Advanced numbers and time concepts.",
        objetives: "-Create a schedule and sign the times for each activity.",
        vocabulary: "-Practice signing the time for daily objetives.",
        href: "/lesson02",
      },
      {
        title: "Daily objetives.",
        objetives: "Sign your morning or evening routine.",
        vocabulary: "Record yourself signing 5 daily objetives.",
        href: "/lesson03",
      },
      {
        title: "Transportation and directions.",
        objetives: "Role-play giving directions to a destination.",
        vocabulary: "Create a map and sign directions to key places.",
        href: "/lesson04",
      },
      {
        title: "Weather and nature.",
        objetives: "Use weather flashcards to describe today’s weather.",
        vocabulary: "Sign a 7-day weather forecast.",
        href: "/lesson05",
      },
    ],
  },
  {
    title: "Social Environment",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "6 lessons",
    href: "/learn/module/03",
    lessons: [
      {
        title: "School and education.",
        objetives: "Sign items in a classroom scene.",
        vocabulary: "Write and sign 3 sentences about your school experience.",
        href: "/lesson01",
      },
      {
        title: "Jobs and professions.",
        objetives: "Mime various professions and have others guess them.",
        vocabulary: "Create a list of 5 professions and their signs.",
        href: "/lesson02",
      },
      {
        title: "Hobbies and sports",
        objetives: "Sign a dialogue about your favorite hobby.",
        vocabulary: "Learn and practice 3 sports-related signs.",
        href: "/lesson03",
      },
      {
        title: "Vacations and holilessons",
        objetives: "Sign your favorite holiday traditions.",
        vocabulary: "Create a short video signing about your last vacation.",
        href: "/lesson04",
      },
      {
        title: "Shopping and money",
        objetives: "Role-play shopping and discussing prices.",
        vocabulary: "Write and sign 3 dialogues involving shopping.",
        href: "/lesson05",
      },
    ],
  },
  {
    title: "Expression and Storytelling",
    description:
      "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
    duration: "8 lessons",
    href: "/learn/module/04",

    lessons: [
      {
        title: "Colors and shapes.",
        objetives:
          "Identify objects of specific colors and shapes in the room.",
        vocabulary: "Create a visual collage and label it with ASL signs.",
        href: "/lesson01",
      },
      {
        title: "Animals and household objects.",
        objetives: "Match animal signs to their pictures.",
        vocabulary: "Sign a story about a pet or favorite animal.",
        href: "/lesson02",
      },
      {
        title: "Common verbs and adjectives.",
        objetives: "Pair verbs with adjectives in mini-sentences.",
        vocabulary: "Practice signing 10 action-oriented sentences.",
        href: "/lesson03",
      },
      {
        title: "Telling simple stories.",
        objetives: "Retell a simple children’s story in ASL.",
        vocabulary: "Create a storyboard for an ASL tale.",
        href: "/lesson04",
      },
      {
        title: "Idiomatic expressions",
        objetives: "Learn 5 idioms and use them in a conversation.",
        vocabulary: "Research 3 more idioms and practice signing them.",
        href: "/lesson05",
      },
    ],
  },
  {
    title: "Practical Situations",
    description:
      "Master American Sign Language in practical scenarios, focusing on everyday situations and cultural etiquette.",
    duration: "5 lessons",
    href: "/learn/module/04",

    lessons: [
      {
        title: "Emergencies and health",
        objetives: "Role-play asking for help in an emergency",
        vocabulary: "Create flashcards for 5 health-related signs",
        href: "/lesson01",
      },
      {
        title: "Public transport and travel",
        objetives: "Sign a dialogue about planning a trip",
        vocabulary: "Watch a travel-related ASL video and note new vocabulary",
        href: "/lesson02",
      },
      {
        title: "Restaurants and ordering food",
        objetives: "Role-play ordering at a restaurant",
        vocabulary: "Sign a list of your favorite meals",
        href: "/lesson03",
      },
      {
        title: "Video phone conversations",
        objetives: "Simulate a video call in ASL",
        vocabulary: "Write a script for a video conversation",
        href: "/lesson04",
      },
      {
        title: "Deaf community culture and etiquette",
        objetives: "Discuss and sign 3 facts about Deaf culture",
        vocabulary: "Research Deaf events and write a short summary",
        href: "/lesson05",
      },
    ],
  },
  {
    title: "Advanced Topics",
    description:
      "Advance your ASL proficiency by tackling complex grammar, comparisons, and persuasive communication.",
    duration: "5 lessons",
    href: "/learn/module/05",

    lessons: [
      {
        title: "Detailed descriptions",
        objetives: "Describe an object in detail",
        vocabulary: "Sign 3 descriptions of items in your house",
        href: "/lesson01",
      },
      {
        title: "Advanced grammar and sentence structure",
        objetives: "Rearrange sentences to practice ASL grammar",
        vocabulary: "Translate 3 English sentences into ASL structure",
        href: "/lesson02",
      },
      {
        title: "Comparisons and contrasts",
        objetives: "Sign comparisons between two items or ideas",
        vocabulary: "Create a Venn diagram and explain it in ASL",
        href: "/lesson03",
      },
      {
        title: "Formal and informal registers",
        objetives: "Practice signing in formal and casual styles",
        vocabulary: "Write a formal ASL introduction",
        href: "/lesson04",
      },
      {
        title: "Persuasive and argumentative speech",
        objetives: "Debate a simple topic using ASL",
        vocabulary: "Sign a persuasive message about a topic you care about",
        href: "/lesson05",
      },
    ],
  },
  {
    title: "Connecting with the Community",
    description:
      "Engage with the Deaf community through cultural, technological, and social perspectives.",
    duration: "5 lessons",
    href: "/learn/module/06",

    lessons: [
      {
        title: "History of the Deaf community.",
        objetives: "Present a historical fact about the Deaf community.",
        vocabulary: "Watch a video on Deaf history and summarize it.",
        href: "/lesson01",
      },
      {
        title: "Events and social participation.",
        objetives: "Practice signing an invitation to an event.",
        vocabulary: "Create an ASL flyer for a fictional Deaf event.",
        href: "/lesson02",
      },
      {
        title: "Technology use in ASL.",
        objetives: "Role-play using a device like a TTY or video relay.",
        vocabulary: "Research a new ASL-related technology.",
        href: "/lesson03",
      },
      {
        title: "Interviews and dialogues.",
        objetives: "Conduct a mock interview.",
        vocabulary: "Write and practice 5 interview questions.",
        href: "/lesson04",
      },
      {
        title: "Diversity in ASL (regionalisms).",
        objetives: "Learn and practice 3 regional variations in signs.",
        vocabulary: "Research and record 3 examples of ASL diversity.",
        href: "/lesson05",
      },
    ],
  },
  {
    title: "Mastering ASL",
    description:
      "Achieve fluency through advanced storytelling, projects, and real-world applications.",
    duration: "5 lessons",
    href: "/learn/module/07",

    lessons: [
      {
        title: "Games and objetives in ASL.",
        objetives: "Play ASL charades or bingo.",
        vocabulary: "Create your own ASL game.",
        href: "/lesson01",
      },
      {
        title: "Advanced storytelling and presentations.",
        objetives: "Present a short ASL story.",
        vocabulary: "Record and review a signed story.",
        href: "/lesson02",
      },
      {
        title: "Assessment and feedback.",
        objetives: "Peer-review signed sentences or stories.",
        vocabulary: "Reflect on your ASL learning journey in a signed video.",
        href: "/lesson03",
      },
      {
        title: "Interactions.",
        objetives: "Collaborate on a sign language presentation.",
        vocabulary: "Develop a sign language story or conversation.",
        href: "/lesson04",
      },
      {
        title: "Real-life simulations.",
        objetives: "Role-play real-world scenarios, like job interviews.",
        vocabulary:
          "Sign a goodbye video summarizing your learning experience.",
        href: "/lesson05",
      },
    ],
  },
];
