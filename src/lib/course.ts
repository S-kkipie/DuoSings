interface Lesson {
<<<<<<< HEAD
  title: string;
  activities: string;
  homework: string;
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
        title: "Introduction to ASL, alphabet, and basic numbers.",
        activities:
          "-Practice fingerspelling your name and basic numbers with a partner.",
        homework: "-Watch an ASL alphabet video and spell 10 common words.",
        href: "/lesson01",
      },
      {
        title: "Common greetings and farewells.",
        activities: "-Role-play meeting someone new and saying goodbye.",
        homework:
          "-Practice signing 5 greetings and farewells in front of a mirror.",
        href: "/lesson02",
      },
      {
        title: "Personal pronouns and basic questions.",
        activities:
          "-Play a matching game pairing pronouns with common actions.",
        homework: "-Write and sign 5 simple sentences using pronouns.",
        href: "/lesson03",
      },
      {
        title: "Emotions and simple descriptions.",
        activities: "-Act out emotions and have your partner guess them.",
        homework: "-Create flashcards for 10 emotion-related signs.",
        href: "/lesson04",
      },
      {
        title: "Family and relationships.",
        activities: "-Draw a family tree and sign each relationship.",
        homework: "-Practice introducing your family to someone in ASL",
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
        activities: "-Sign a pretend grocery list to a partner.",
        homework: "-Watch a cooking video in ASL and list new vocabulary.",
        href: "/lesson01",
      },
      {
        title: "Advanced numbers and time concepts.",
        activities: "-Create a schedule and sign the times for each activity.",
        homework: "-Practice signing the time for daily activities.",
        href: "/lesson02",
      },
      {
        title: "Daily activities.",
        activities: "Sign your morning or evening routine.",
        homework: "Record yourself signing 5 daily activities.",
        href: "/lesson03",
      },
      {
        title: "Transportation and directions.",
        activities: "Role-play giving directions to a destination.",
        homework: "Create a map and sign directions to key places.",
        href: "/lesson04",
      },
      {
        title: "Weather and nature.",
        activities: "Use weather flashcards to describe today’s weather.",
        homework: "Sign a 7-day weather forecast.",
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
        activities: "Sign items in a classroom scene.",
        homework: "Write and sign 3 sentences about your school experience.",
        href: "/lesson01",
      },
      {
        title: "Jobs and professions.",
        activities: "Mime various professions and have others guess them.",
        homework: "Create a list of 5 professions and their signs.",
        href: "/lesson02",
      },
      {
        title: "Hobbies and sports",
        activities: "Sign a dialogue about your favorite hobby.",
        homework: "Learn and practice 3 sports-related signs.",
        href: "/lesson03",
      },
      {
        title: "Vacations and holilessons",
        activities: "Sign your favorite holiday traditions.",
        homework: "Create a short video signing about your last vacation.",
        href: "/lesson04",
      },
      {
        title: "Shopping and money",
        activities: "Role-play shopping and discussing prices.",
        homework: "Write and sign 3 dialogues involving shopping.",
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
        activities:
          "Identify objects of specific colors and shapes in the room.",
        homework: "Create a visual collage and label it with ASL signs.",
        href: "/lesson01",
      },
      {
        title: "Animals and household objects.",
        activities: "Match animal signs to their pictures.",
        homework: "Sign a story about a pet or favorite animal.",
        href: "/lesson02",
      },
      {
        title: "Common verbs and adjectives.",
        activities: "Pair verbs with adjectives in mini-sentences.",
        homework: "Practice signing 10 action-oriented sentences.",
        href: "/lesson03",
      },
      {
        title: "Telling simple stories.",
        activities: "Retell a simple children’s story in ASL.",
        homework: "Create a storyboard for an ASL tale.",
        href: "/lesson04",
      },
      {
        title: "Idiomatic expressions",
        activities: "Learn 5 idioms and use them in a conversation.",
        homework: "Research 3 more idioms and practice signing them.",
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
        activities: "Role-play asking for help in an emergency",
        homework: "Create flashcards for 5 health-related signs",
        href: "/lesson01",
      },
      {
        title: "Public transport and travel",
        activities: "Sign a dialogue about planning a trip",
        homework: "Watch a travel-related ASL video and note new vocabulary",
        href: "/lesson02",
      },
      {
        title: "Restaurants and ordering food",
        activities: "Role-play ordering at a restaurant",
        homework: "Sign a list of your favorite meals",
        href: "/lesson03",
      },
      {
        title: "Video phone conversations",
        activities: "Simulate a video call in ASL",
        homework: "Write a script for a video conversation",
        href: "/lesson04",
      },
      {
        title: "Deaf community culture and etiquette",
        activities: "Discuss and sign 3 facts about Deaf culture",
        homework: "Research Deaf events and write a short summary",
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
        activities: "Describe an object in detail",
        homework: "Sign 3 descriptions of items in your house",
        href: "/lesson01",
      },
      {
        title: "Advanced grammar and sentence structure",
        activities: "Rearrange sentences to practice ASL grammar",
        homework: "Translate 3 English sentences into ASL structure",
        href: "/lesson02",
      },
      {
        title: "Comparisons and contrasts",
        activities: "Sign comparisons between two items or ideas",
        homework: "Create a Venn diagram and explain it in ASL",
        href: "/lesson03",
      },
      {
        title: "Formal and informal registers",
        activities: "Practice signing in formal and casual styles",
        homework: "Write a formal ASL introduction",
        href: "/lesson04",
      },
      {
        title: "Persuasive and argumentative speech",
        activities: "Debate a simple topic using ASL",
        homework: "Sign a persuasive message about a topic you care about",
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
        activities: "Present a historical fact about the Deaf community.",
        homework: "Watch a video on Deaf history and summarize it.",
        href: "/lesson01",
      },
      {
        title: "Events and social participation.",
        activities: "Practice signing an invitation to an event.",
        homework: "Create an ASL flyer for a fictional Deaf event.",
        href: "/lesson02",
      },
      {
        title: "Technology use in ASL.",
        activities: "Role-play using a device like a TTY or video relay.",
        homework: "Research a new ASL-related technology.",
        href: "/lesson03",
      },
      {
        title: "Interviews and dialogues.",
        activities: "Conduct a mock interview.",
        homework: "Write and practice 5 interview questions.",
        href: "/lesson04",
      },
      {
        title: "Diversity in ASL (regionalisms).",
        activities: "Learn and practice 3 regional variations in signs.",
        homework: "Research and record 3 examples of ASL diversity.",
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
        title: "Games and activities in ASL.",
        activities: "Play ASL charades or bingo.",
        homework: "Create your own ASL game.",
        href: "/lesson01",
      },
      {
        title: "Advanced storytelling and presentations.",
        activities: "Present a short ASL story.",
        homework: "Record and review a signed story.",
        href: "/lesson02",
      },
      {
        title: "Assessment and feedback.",
        activities: "Peer-review signed sentences or stories.",
        homework: "Reflect on your ASL learning journey in a signed video.",
        href: "/lesson03",
      },
      {
        title: "Interactions.",
        activities: "Collaborate on a sign language presentation.",
        homework: "Develop a sign language story or conversation.",
        href: "/lesson04",
      },
      {
        title: "Real-life simulations.",
        activities: "Role-play real-world scenarios, like job interviews.",
        homework: "Sign a goodbye video summarizing your learning experience.",
        href: "/lesson05",
      },
    ],
  },
];
=======
    week: string;
    lesson: string;
    activities: string;
    homework: string;
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
      duration: "5 weeks",
      href: "/learn/module/01",
      lessons: [
        {
          week: "Week 1",
          lesson: "Introduction to ASL, alphabet, and basic numbers.",
          activities:
            "-Practice fingerspelling your name and basic numbers with a partner.",
          homework: "-Watch an ASL alphabet video and spell 10 common words.",
          href: "/lesson01",
        },
        {
          week: "Week 2",
          lesson: "Common greetings and farewells.",
          activities: "-Role-play meeting someone new and saying goodbye.",
          homework:
            "-Practice signing 5 greetings and farewells in front of a mirror.",
          href: "/lesson02",

        },
        {
          week: "Week 3",
          lesson: "Personal pronouns and basic questions.",
          activities:
            "-Play a matching game pairing pronouns with common actions.",
          homework: "-Write and sign 5 simple sentences using pronouns.",
          href: "/lesson03",

        },
        {
          week: "Week 4",
          lesson: "Emotions and simple descriptions.",
          activities: "-Act out emotions and have your partner guess them.",
          homework: "-Create flashcards for 10 emotion-related signs.",
          href: "/lesson04",

        },
        {
          week: "Week 5",
          lesson: "Family and relationships.",
          activities: "-Draw a family tree and sign each relationship.",
          homework: "-Practice introducing your family to someone in ASL",
          href: "/lesson04",

        },
      ],
    },
    {
      title: "Everyday Communication",
      description:
        "Continue learning American Sign Language with more advanced vocabulary and sentence structure.",
      duration: "6 weeks",
      href: "/learn/module/02",

      lessons: [
        {
          week: "Week 6",
          lesson: "Foods and drinks.",
          activities: "-Sign a pretend grocery list to a partner.",
          homework: "-Watch a cooking video in ASL and list new vocabulary.",
          href: "/lesson01",

        },
        {
          week: "Week 7",
          lesson: "Advanced numbers and time concepts.",
          activities: "-Create a schedule and sign the times for each activity.",
          homework: "-Practice signing the time for daily activities.",
          href: "/lesson02",

        },
        {
          week: "Week 8",
          lesson: "Daily activities.",
          activities: "Sign your morning or evening routine.",
          homework: "Record yourself signing 5 daily activities.",
          href: "/lesson03",

        },
        {
          week: "Week 9",
          lesson: "Transportation and directions.",
          activities: "Role-play giving directions to a destination.",
          homework: "Create a map and sign directions to key places.",
          href: "/lesson04",

        },
        {
          week: "Week 10",
          lesson: "Weather and nature.",
          activities: "Use weather flashcards to describe today’s weather.",
          homework: "Sign a 7-day weather forecast.",
          href: "/lesson05",

        },
      ],
    },
    {
      title: "Social Environment",
      description:
        "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
      duration: "6 weeks",
      href: "/learn/module/03",
      lessons: [
        {
          week: "Week 11",
          lesson: "School and education.",
          activities: "Sign items in a classroom scene.",
          homework: "Write and sign 3 sentences about your school experience.",
          href: "/lesson01",

        },
        {
          week: "Week 12",
          lesson: "Jobs and professions.",
          activities: "Mime various professions and have others guess them.",
          homework: "Create a list of 5 professions and their signs.",
          href: "/lesson02",

        },
        {
          week: "Week 13",
          lesson: "Hobbies and sports",
          activities: "Sign a dialogue about your favorite hobby.",
          homework: "Learn and practice 3 sports-related signs.",
          href: "/lesson03",

        },
        {
          week: "Week 14",
          lesson: "Vacations and holidays",
          activities: "Sign your favorite holiday traditions.",
          homework: "Create a short video signing about your last vacation.",
          href: "/lesson04",

        },
        {
          week: "Week 15",
          lesson: "Shopping and money",
          activities: "Role-play shopping and discussing prices.",
          homework: "Write and sign 3 dialogues involving shopping.",
          href: "/lesson05",

        },
      ],
    },
    {
      title: "Expression and Storytelling",
      description:
        "Master American Sign Language with advanced grammar, vocabulary, and cultural knowledge.",
      duration: "8 weeks",
      href: "/learn/module/04",

      lessons: [
        {
          week: "Week 16",
          lesson: "Colors and shapes.",
          activities:
            "Identify objects of specific colors and shapes in the room.",
          homework: "Create a visual collage and label it with ASL signs.",
          href: "/lesson01",
          
        },
        {
          week: "Week 17",
          lesson: "Animals and household objects.",
          activities: "Match animal signs to their pictures.",
          homework: "Sign a story about a pet or favorite animal.",
          href: "/lesson02",

        },
        {
          week: "Week 18",
          lesson: "Common verbs and adjectives.",
          activities: "Pair verbs with adjectives in mini-sentences.",
          homework: "Practice signing 10 action-oriented sentences.",
          href: "/lesson03",

        },
        {
          week: "Week 19",
          lesson: "Telling simple stories.",
          activities: "Retell a simple children’s story in ASL.",
          homework: "Create a storyboard for an ASL tale.",
          href: "/lesson04",

        },
        {
          week: "Week 20",
          lesson: "Idiomatic expressions",
          activities: "Learn 5 idioms and use them in a conversation.",
          homework: "Research 3 more idioms and practice signing them.",
          href: "/lesson05",

        },
      ],
    },
    {
      title: "Practical Situations",
      description:
        "Master American Sign Language in practical scenarios, focusing on everyday situations and cultural etiquette.",
      duration: "5 weeks",
      href: "/learn/module/04",

      lessons: [
        {
          week: "Week 21",
          lesson: "Emergencies and health",
          activities: "Role-play asking for help in an emergency",
          homework: "Create flashcards for 5 health-related signs",
          href: "/lesson01",

        },
        {
          week: "Week 22",
          lesson: "Public transport and travel",
          activities: "Sign a dialogue about planning a trip",
          homework: "Watch a travel-related ASL video and note new vocabulary",
          href: "/lesson02",

        },
        {
          week: "Week 23",
          lesson: "Restaurants and ordering food",
          activities: "Role-play ordering at a restaurant",
          homework: "Sign a list of your favorite meals",
          href: "/lesson03",

        },
        {
          week: "Week 24",
          lesson: "Video phone conversations",
          activities: "Simulate a video call in ASL",
          homework: "Write a script for a video conversation",
          href: "/lesson04",

        },
        {
          week: "Week 25",
          lesson: "Deaf community culture and etiquette",
          activities: "Discuss and sign 3 facts about Deaf culture",
          homework: "Research Deaf events and write a short summary",
          href: "/lesson05",

        },
      ],
    },
    {
      title: "Advanced Topics",
      description:
        "Advance your ASL proficiency by tackling complex grammar, comparisons, and persuasive communication.",
      duration: "5 weeks",
      href: "/learn/module/05",

      lessons: [
        {
          week: "Week 26",
          lesson: "Detailed descriptions",
          activities: "Describe an object in detail",
          homework: "Sign 3 descriptions of items in your house",
          href: "/lesson01",

        },
        {
          week: "Week 27",
          lesson: "Advanced grammar and sentence structure",
          activities: "Rearrange sentences to practice ASL grammar",
          homework: "Translate 3 English sentences into ASL structure",
          href: "/lesson02",

        },
        {
          week: "Week 28",
          lesson: "Comparisons and contrasts",
          activities: "Sign comparisons between two items or ideas",
          homework: "Create a Venn diagram and explain it in ASL",
          href: "/lesson03",

        },
        {
          week: "Week 29",
          lesson: "Formal and informal registers",
          activities: "Practice signing in formal and casual styles",
          homework: "Write a formal ASL introduction",
          href: "/lesson04",

        },
        {
          week: "Week 30",
          lesson: "Persuasive and argumentative speech",
          activities: "Debate a simple topic using ASL",
          homework: "Sign a persuasive message about a topic you care about",
          href: "/lesson05",

        },
      ],
    },
    {
      title: "Connecting with the Community",
      description:
        "Engage with the Deaf community through cultural, technological, and social perspectives.",
      duration: "5 weeks",
      href: "/learn/module/06",

      lessons: [
        {
          week: "Week 31",
          lesson: "History of the Deaf community.",
          activities: "Present a historical fact about the Deaf community.",
          homework: "Watch a video on Deaf history and summarize it.",
          href: "/lesson01",

        },
        {
          week: "Week 32",
          lesson: "Events and social participation.",
          activities: "Practice signing an invitation to an event.",
          homework: "Create an ASL flyer for a fictional Deaf event.",
          href: "/lesson02",

        },
        {
          week: "Week 33",
          lesson: "Technology use in ASL.",
          activities: "Role-play using a device like a TTY or video relay.",
          homework: "Research a new ASL-related technology.",
          href: "/lesson03",

        },
        {
          week: "Week 34",
          lesson: "Interviews and dialogues.",
          activities: "Conduct a mock interview.",
          homework: "Write and practice 5 interview questions.",
          href: "/lesson04",

        },
        {
          week: "Week 35",
          lesson: "Diversity in ASL (regionalisms).",
          activities: "Learn and practice 3 regional variations in signs.",
          homework: "Research and record 3 examples of ASL diversity.",
          href: "/lesson05",

        },
      ],
    },
    {
      title: "Mastering ASL",
      description:
        "Achieve fluency through advanced storytelling, projects, and real-world applications.",
      duration: "5 weeks",
      href: "/learn/module/07",

      lessons: [
        {
          week: "Week 36",
          lesson: "Games and activities in ASL.",
          activities: "Play ASL charades or bingo.",
          homework: "Create your own ASL game.",
          href: "/lesson01",

        },
        {
          week: "Week 37",
          lesson: "Advanced storytelling and presentations.",
          activities: "Present a short ASL story.",
          homework: "Record and review a signed story.",
          href: "/lesson02",

        },
        {
          week: "Week 38",
          lesson: "Assessment and feedback.",
          activities: "Peer-review signed sentences or stories.",
          homework: "Reflect on your ASL learning journey in a signed video.",
          href: "/lesson03",

        },
        {
          week: "Week 39",
          lesson: "Interactions.",
          activities: "Collaborate on a sign language presentation.",
          homework: "Develop a sign language story or conversation.",
          href: "/lesson04",

        },
        {
          week: "Week 40",
          lesson: "Real-life simulations.",
          activities: "Role-play real-world scenarios, like job interviews.",
          homework: "Sign a goodbye video summarizing your learning experience.",
          href: "/lesson05",

        },
      ],
    },
  ];
>>>>>>> d35e6adba966ea2d9f3fe0433028e30e1f4c4435
