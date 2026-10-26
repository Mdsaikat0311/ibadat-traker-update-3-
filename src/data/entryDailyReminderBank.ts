import nawawi40Full from './nawawi40Full.json';
import qudsi40Full from './qudsi40Full.json';
import selected300Full from './selected300Full.json';
import shamayilFull from './shamayilFull.json';
import adabMufradFull from './adabMufradFull.json';
import riyadFull from './riyadFull.json';
import { HADITH_BOOKS } from './hadithCollection';
import bookSectionsMeta from './bookSectionsMeta.json';
import { ALL_SURAHS, toBengaliNumber } from './quranData';

export interface EntryReminderItem {
  id: string;
  type: 'quran' | 'hadith';
  badgeTitle: string; // "পবিত্র কুরআনুল কারীম" বা "সহীহ হাদিস শরীফ"
  category: string; // যেমন: "সহীহ বুখারী" অথবা "সূরা আল-বাক্বারাহ"
  narrator?: string; // হাদিসের রাবী বা বর্ণনাকারী
  meaning: string; // শুধুমাত্র বাংলা অর্থ ও মর্মবাণী (আরবি ছাড়া)
  reference: string; // সঠিক ও নির্ভরযোগ্য রেফারেন্স (কিতাব, অধ্যায়, হাদিস/আয়াত নং ও মান)
}

// ১৪টি হাদিস ক্যাটাগরির সুনির্দিষ্ট তালিকা
export interface HadithCategoryInfo {
  id: string;
  title: string;
  apiBookId?: string;
  isJson: boolean;
}

export const ALL_14_HADITH_CATEGORIES: HadithCategoryInfo[] = [
  { id: 'bukhari', title: 'সহীহ বুখারী', apiBookId: 'bukhari', isJson: false },
  { id: 'muslim', title: 'সহীহ মুসলিম', apiBookId: 'muslim', isJson: false },
  { id: 'abudawood', title: 'সুনানে আবু দাউদ', apiBookId: 'abudawud', isJson: false },
  { id: 'tirmidhi', title: "জামে' আত-তিরমিযী", apiBookId: 'tirmidhi', isJson: false },
  { id: 'shamayil', title: 'শামায়িলে তিরমিযী', isJson: true },
  { id: 'nasai', title: 'সুনানে আন-নাসায়ী', apiBookId: 'nasai', isJson: false },
  { id: 'ibnmajah', title: 'সুনানে ইবনে মাজাহ', apiBookId: 'ibnmajah', isJson: false },
  { id: 'malik', title: 'মুয়াত্তা ইমাম মালিক', apiBookId: 'malik', isJson: false },
  { id: 'nawawi40', title: 'ইমাম নববীর ৪০ হাদিস', isJson: true },
  { id: 'riyad500', title: 'রিয়াদুস সালেহীন (নির্বাচিত ৫০০)', isJson: true },
  { id: 'riyad_full', title: 'রিয়াদুস সালেহীন (সম্পূর্ণ সংকলন)', isJson: true },
  { id: 'selected300', title: 'নির্বাচিত ৩০০ হাদিস', isJson: true },
  { id: 'qudsi40', title: '৪০ হাদিসে কুদসী', isJson: true },
  { id: 'adab_mufrad', title: 'আল-আদাবুল মুফরাদ', isJson: true }
];

// পবিত্র কুরআনের বিভিন্ন সূরা থেকে সংকলিত ৬০+ আয়াত (আরবি ছাড়া বাংলা অর্থ)
export const QURAN_ENTRY_REMINDERS: EntryReminderItem[] = [
  {
    id: "q_1",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-বাক্বারাহ",
    meaning: "অতএব তোমরা আমাকে স্মরণ কর, আমিও তোমাদেরকে স্মরণ করব। আর আমার প্রতি কৃতজ্ঞতা প্রকাশ কর এবং কখনো অকৃতজ্ঞ হয়ো না।",
    reference: "সূরা আল-বাক্বারাহ (২:১৫২)"
  },
  {
    id: "q_2",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-বাক্বারাহ (আয়াতুল কুরসী)",
    meaning: "আল্লাহ, তিনি ছাড়া কোনো সত্য ইলাহ নেই। তিনি চিরঞ্জীব, সবকিছুর ধারক। তন্দ্রা বা নিদ্রা তাঁকে স্পর্শ করে না। আসমানসমূহে যা কিছু আছে এবং যমীনে যা কিছু আছে সবই তাঁর। কে আছে এমন, যে তাঁর অনুমতি ব্যতীত তাঁর নিকট সুপারিশ করতে পারে? মানুষের সম্মুখে ও পেছনে যা কিছু আছে তা তিনি অবগত আছেন। আর তাঁর ইচ্ছার বাইরে তাঁর জ্ঞানের সামান্যতম অংশও কেউ আয়ত্ত করতে পারে না। তাঁর কুরসী সমস্ত আসমান ও যমীন পরিবেষ্টন করে আছে। আর এই দুটির রক্ষণাবেক্ষণ তাঁর জন্য কোনো ক্লান্তিকর বিষয় নয়। তিনি সর্বোচ্চ, মহান।",
    reference: "সূরা আল-বাক্বারাহ (২:২৫৫)"
  },
  {
    id: "q_3",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-বাক্বারাহ",
    meaning: "আর যখন আমার বান্দারা তোমার কাছে আমার সম্পর্কে জিজ্ঞেস করে, তখন তাদের বলে দাও— আমি তো তাদের অত্যন্ত নিকটেই আছি। কোনো আহ্বানকারী যখন আমাকে ডাকে, আমি তার ডাকে সাড়া দেই। অতএব তারাও যেন আমার হুকুম মেনে চলে এবং আমার ওপর দৃঢ় ঈমান রাখে, যাতে তারা সঠিক পথের দিশা পেতে পারে।",
    reference: "সূরা আল-বাক্বারাহ (২:১৮৬)"
  },
  {
    id: "q_4",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-বাক্বারাহ",
    meaning: "হে মুমিনগণ! তোমরা ধৈর্য ও সালাতের মাধ্যমে আল্লাহর সাহায্য প্রার্থনা কর। নিশ্চয়ই আল্লাহ ধৈর্যশীলদের সঙ্গে আছেন।",
    reference: "সূরা আল-বাক্বারাহ (২:১৫৩)"
  },
  {
    id: "q_5",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-বাক্বারাহ",
    meaning: "আল্লাহ কাউকে তার সাধ্যের অতিরিক্ত কোনো দায়িত্ব অর্পণ করেন না। সে যা ভালো অর্জন করে তা তার নিজের কল্যাণের জন্যই, আর যা মন্দ কামাই করে তাও তার নিজেরই ক্ষতি ডেকে আনে।",
    reference: "সূরা আল-বাক্বারাহ (২:২৮৬)"
  },
  {
    id: "q_6",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আলে ইমরান",
    meaning: "আর তোমরা তোমাদের প্রতিপালকের ক্ষমা এবং সেই জান্নাতের পানে দ্রুত অগ্রসর হও, যার প্রশস্ততা আসমান ও জমিনের সমান; যা প্রস্তুত করে রাখা হয়েছে মুত্তাক্বীদের (আল্লাহভীরুদের) জন্য।",
    reference: "সূরা আলে ইমরান (৩:১৩৩)"
  },
  {
    id: "q_7",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আলে ইমরান",
    meaning: "প্রত্যেক প্রাণীকেই মৃত্যুর স্বাদ গ্রহণ করতে হবে। আর কিয়ামতের দিনেই তোমাদের কর্মফল পুরোপুরিভাবে দেওয়া হবে। অতঃপর যাকে জাহান্নামের আগুন থেকে দূরে রাখা হলো এবং জান্নাতে প্রবেশ করানো হলো, সে-ই সফলকাম হলো। বস্তুত পার্থিব জীবন তো কেবল ছলনাময় মরিচিকা ছাড়া আর কিছুই নয়।",
    reference: "সূরা আলে ইমরান (৩:১৮৫)"
  },
  {
    id: "q_8",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আন-নিসা",
    meaning: "নিশ্চয় নির্দিষ্ট সময়ে সালাত কায়েম করা মুমিনদের ওপর একটি সুনির্দিষ্ট ফরজ দায়িত্ব।",
    reference: "সূরা আন-নিসা (৪:১০৩)"
  },
  {
    id: "q_9",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আন-নিসা",
    meaning: "তোমরা যদি কৃতজ্ঞতা আদায় কর এবং ঈমান নিয়ে আসো, তবে তোমাদের শাস্তি দিয়ে আল্লাহ কী করবেন? বস্তুত আল্লাহ তো গুণগ্রাহী ও সর্বজ্ঞ।",
    reference: "সূরা আন-নিসা (৪:১৪৭)"
  },
  {
    id: "q_10",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-আনআম",
    meaning: "বলুন, নিঃসন্দেহে আমার সালাত, আমার কুরবানী, আমার জীবন ও আমার মৃত্যু— সবকিছুই সমস্ত সৃষ্টির প্রতিপালক মহান আল্লাহর জন্য নিবেদিত।",
    reference: "সূরা আল-আনআম (৬:১৬২)"
  },
  {
    id: "q_11",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-আরাফ",
    meaning: "আর তোমার প্রতিপালককে স্মরণ কর মনে মনে, অনুনয়-বিনয় ও ভয়ের সঙ্গে এবং সকাল-সন্ধ্যায় অনুচ্চ স্বরে। আর কখনো উদাসীন ও গাফিলদের অন্তর্ভুক্ত হয়ো না।",
    reference: "সূরা আল-আরাফ (৭:২০৫)"
  },
  {
    id: "q_12",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আত-তাওবাহ",
    meaning: "যদি তারা মুখ ফিরিয়ে নেয়, তবে বলে দাও: আল্লাহই আমার জন্য যথেষ্ট। তিনি ছাড়া অন্য কোনো উপাস্য নেই। আমি তাঁরই ওপর ভরসা করেছি এবং তিনিই মহান আরশের অধিপতি।",
    reference: "সূরা আত-তাওবাহ (৯:১২৯)"
  },
  {
    id: "q_13",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা ইউসুফ",
    meaning: "ইয়াকুব (আ.) বললেন: আমি তো আমার অসহনীয় দুঃখ ও বেদনার ফরিয়াদ কেবল মহান আল্লাহর কাছেই পেশ করছি, আর আমি আল্লাহর পক্ষ থেকে এমন বিষয় জানি যা তোমরা জানো না।",
    reference: "সূরা ইউসুফ (১২:৮৬)"
  },
  {
    id: "q_14",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আর-রাদ",
    meaning: "যারা ঈমান এনেছে এবং আল্লাহর স্মরণে যাদের অন্তর প্রশান্ত হয়; জেনে রেখো, কেবল আল্লাহর স্মরণের মাধ্যমেই মানব হৃদয়সমূহ প্রকৃত প্রশান্তি লাভ করে।",
    reference: "সূরা আর-রাদ (১৩:২৮)"
  },
  {
    id: "q_15",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা ইব্রাহীম",
    meaning: "স্মরণ কর, যখন তোমাদের প্রতিপালক ঘোষণা দিয়েছিলেন: যদি তোমরা কৃতজ্ঞতা প্রকাশ কর, তবে নিশ্চয়ই আমি তোমাদের জন্য নিয়ামত আরও বৃদ্ধি করে দেব; আর যদি অকৃতজ্ঞ হও, তবে জেনে রেখো আমার শাস্তিও কিন্তু অত্যন্ত কঠোর।",
    reference: "সূরা ইব্রাহীম (১৪:৭)"
  },
  {
    id: "q_16",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-ইসরা (বনী ইসরাঈল)",
    meaning: "তোমার প্রতিপালক আদেশ দিচ্ছেন যে, তোমরা তিনি ছাড়া আর কারো ইবাদত করবে না এবং পিতা-মাতার সাথে সর্বোত্তম আচরণ করবে। যদি তাদের একজন অথবা উভয়জন তোমার জীবদ্দশায় বার্ধক্যে উপনীত হয়, তবে তাদেরকে কখনো 'উফ্' (বিরক্তিজনক কথা) বলো না, তাদেরকে ধমক দিও না এবং তাদের সাথে শ্রদ্ধাপূর্ণ ও নম্র কথা বলো।",
    reference: "সূরা আল-ইসরা (১৭:২৩)"
  },
  {
    id: "q_17",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-ইসরা (বনী ইসরাঈল)",
    meaning: "আর তাদের প্রতি ভালোবাসার সাথে বিনয়ের ডানা অবনমিত করে দাও এবং প্রার্থনা কর: 'হে আমার প্রতিপালক! তুমি তাঁদের উভয়ের ওপর তেমনিভাবে দয়া ও রহম কর, যেমনিভাবে শৈশবে তাঁরা আমাকে স্নেহ-মমতায় লালন-পালন করেছিলেন।' ",
    reference: "সূরা আল-ইসরা (১৭:২৪)"
  },
  {
    id: "q_18",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-কাহফ",
    meaning: "বলুন, যদি সমুদ্র আমার পালনকর্তার কথা লিপিবদ্ধ করার জন্য কালি হয়ে যায়, তবে আমার পালনকর্তার কথা শেষ হওয়ার আগেই সমুদ্র নিঃশেষ হয়ে যাবে— যদিও আমি এর সাহায্যের জন্য অনুরূপ আরও একটি সমুদ্র নিয়ে আসি।",
    reference: "সূরা আল-কাহফ (১৮:১০৯)"
  },
  {
    id: "q_19",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা মারইয়াম",
    meaning: "নিশ্চয় যারা ঈমান আনে এবং সৎকাজ করে, পরম দয়াময় আল্লাহ তাদের জন্য মানুষের অন্তরে গভীর ভালোবাসা সৃষ্টি করে দেবেন।",
    reference: "সূরা মারইয়াম (১৯:৯৬)"
  },
  {
    id: "q_20",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা ত্বা-হা",
    meaning: "নিশ্চয় আমিই আল্লাহ! আমি ছাড়া কোনো সত্য উপাস্য নেই। অতএব কেবল আমারই ইবাদাত কর এবং আমার স্মরণের উদ্দেশ্যে সালাত কায়েম কর।",
    reference: "সূরা ত্বা-হা (২০:১৪)"
  },
  {
    id: "q_21",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-আম্বিয়া",
    meaning: "আর মাছের পেটে ইউনুস (আ.) অন্ধকার থেকে কাতর কণ্ঠে ডাকলেন: 'তুমি ছাড়া কোনো সত্য উপাস্য নেই, তুমি পবিত্র-মহান! নিশ্চয় আমি নিজের ওপর সীমালঙ্ঘনকারীদের অন্তর্ভুক্ত হয়ে গেছি।' অতঃপর আমি তাঁর ডাকে সাড়া দিলাম এবং তাঁকে গভীর সংকট থেকে মুক্তি দান করলাম। এভাবেই আমি মুমিনদের উদ্ধার করে থাকি।",
    reference: "সূরা আল-আম্বিয়া (২১:৮৭-৮৮)"
  },
  {
    id: "q_22",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-মুমিনূন",
    meaning: "নিশ্চয়ই মুমিনগণ চূড়ান্ত সাফল্য অর্জন করেছে— যারা নিজেদের সালাতে অত্যন্ত বিনম্র, একাগ্র ও আত্মনিবেদিত।",
    reference: "সূরা আল-মুমিনূন (২৩:১-২)"
  },
  {
    id: "q_23",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-ফুরক্বান",
    meaning: "পরম দয়াময় আল্লাহর বান্দা তারাই, যারা পৃথিবীতে অত্যন্ত নম্র ও বিনম্রভাবে চলাফেরা করে এবং মূর্খরা যখন তাদের লক্ষ্য করে অশোভন কথা বলে, তখন তারা শান্তির বার্তা (সালাম) জানিয়ে প্রস্থান করে।",
    reference: "সূরা আল-ফুরক্বান (২৫:৬৩)"
  },
  {
    id: "q_24",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-আনকাবূত",
    meaning: "কিতাব থেকে যা তোমার প্রতি ওহী হিসেবে নাজিল করা হয়েছে তা তিলাওয়াত কর এবং সালাত কায়েম কর। নিশ্চয়ই সালাত মানুষকে অশ্লীল, নির্লজ্জ ও গর্হিত কাজ থেকে বিরত রাখে। আর আল্লাহর স্মরণই তো সর্বশ্রেষ্ঠ। তোমরা যা কিছু কর আল্লাহ তা সম্যক অবগত আছেন।",
    reference: "সূরা আল-আনকাবূত (২৯:৪৫)"
  },
  {
    id: "q_25",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-আনকাবূত",
    meaning: "আর যারা আমার পথে সর্বাত্মক সাধনা ও সংগ্রাম করে, আমি অবশ্যই তাদেরকে আমার হিদায়াতের পথসমূহে পরিচালিত করব। নিশ্চয়ই আল্লাহ সৎকর্মশীলদের সঙ্গে থাকেন।",
    reference: "সূরা আল-আনকাবূত (২৯:৬৯)"
  },
  {
    id: "q_26",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আর-রূম",
    meaning: "আর তাঁর এক সুমহান নিদর্শন এই যে, তিনি তোমাদের মধ্য হতেই তোমাদের জন্য সৃষ্টি করেছেন সঙ্গিনীদের, যাতে তোমরা তাদের কাছে পরম শান্তি লাভ কর এবং তিনি তোমাদের মধ্যে পারস্পরিক ভালোবাসা ও দয়া সৃষ্টি করেছেন। নিশ্চয় এতে চিন্তাশীলদের জন্য বহু নিদর্শন রয়েছে।",
    reference: "সূরা আর-রূম (৩০:২১)"
  },
  {
    id: "q_27",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা লুক্বমান",
    meaning: "হে আমার প্রিয় বৎস! সালাত কায়েম কর, সৎকাজের আদেশ দাও, মন্দকাজে নিষেধ কর এবং যে বিপদে তুমি পতিত হও তাতে ধৈর্য ধারণ কর। নিশ্চয় এটি অত্যন্ত দৃঢ় সংকল্পের কাজ। আর অহংকারবশত মানুষের দিক থেকে মুখ ফিরিয়ে নিয়ো না এবং যমীনে দম্ভভরে বিচরণ করো না। নিশ্চয়ই আল্লাহ কোনো দাম্ভিক ও অহংকারীকে ভালোবাসেন না।",
    reference: "সূরা লুক্বমান (৩১:১৭-১৮)"
  },
  {
    id: "q_28",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-আহযাব",
    meaning: "নিশ্চয়ই রাসূলুল্লাহ (সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম)-এর জীবনে তোমাদের জন্য রয়েছে সর্বোত্তম আদর্শ— এমন ব্যক্তির জন্য যে আল্লাহ ও পরকালের আশা রাখে এবং আল্লাহকে অধিক পরিমাণে স্মরণ করে।",
    reference: "সূরা আল-আহযাব (৩৩:২১)"
  },
  {
    id: "q_29",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-আহযাব",
    meaning: "হে ঈমানদারগণ! তোমরা আল্লাহকে অধিক পরিমাণে স্মরণ কর, এবং সকাল-সন্ধ্যায় তাঁর পবিত্রতা ও মহিমা ঘোষণা কর।",
    reference: "সূরা আল-আহযাব (৩৩:৪১-৪২)"
  },
  {
    id: "q_30",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা ইয়াসীন",
    meaning: "পরম দয়ালু প্রতিপালকের পক্ষ হতে তাদের বলা হবে: 'সালাম' (শান্তি)। আর তাঁর নির্দেশ তো কেবল এই— যখন তিনি কোনো কিছুর ইচ্ছা করেন, তিনি বলেন 'হও', আর তা তৎক্ষণাৎ হয়ে যায়।",
    reference: "সূরা ইয়াসীন (৩৬:৫৮, ৮২)"
  },
  {
    id: "q_31",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আয-যুমার",
    meaning: "বলুন: হে আমার বান্দাগণ! যারা নিজেদের জীবনের ওপর বাড়াবাড়ি ও সীমালঙ্ঘন করেছ, তোমরা মহান আল্লাহর অসীম রহমত থেকে কখনো নিরাশ হয়ো না। নিশ্চয়ই আল্লাহ সমস্ত গোনাহ ক্ষমা করে দেন। নিঃসন্দেহে তিনি পরম ক্ষমাশীল, পরম দয়ালু।",
    reference: "সূরা আয-যুমার (৩৯:৫৩)"
  },
  {
    id: "q_32",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা গাফির (আল-মুমিন)",
    meaning: "আর তোমাদের প্রতিপালক বলেন: তোমরা আমাকে ডাক, আমি তোমাদের ডাকে সাড়া দেব। নিশ্চয় যারা অহংকারবশত আমার ইবাদত থেকে মুখ ফিরিয়ে নেয়, তারা লাঞ্ছিত হয়ে জাহান্নামে প্রবেশ করবে।",
    reference: "সূরা গাফির (৪০:৬০)"
  },
  {
    id: "q_33",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা ফুসসিলাত",
    meaning: "ভালো এবং মন্দ কখনো সমান হতে পারে না। তুমি মন্দকে এমন আচরণের মাধ্যমে প্রতিহত কর যা সর্বোত্তম ও সুন্দর; ফলে দেখতে পাবে তোমার সাথে যার শত্রুতা ছিল, সে অকস্মাৎ তোমার অন্তরঙ্গ বন্ধুতে পরিণত হয়ে গেছে।",
    reference: "সূরা ফুসসিলাত (৪১:৩৪)"
  },
  {
    id: "q_34",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-হুজুরাত",
    meaning: "হে ঈমানদারগণ! তোমরা অধিকাংশ অনুমান থেকে দূরে থাক; কারণ কোনো কোনো অনুমান তো সুস্পষ্ট পাপ। আর তোমরা একে অপরের গোপনীয় দোষ অনুসন্ধান করো না এবং কেউ কারো গীবত (পরনিন্দা) করো না। তোমাদের কেউ কি তার মৃত ভাইয়ের গোশত খাওয়া পছন্দ করবে? বস্তুত তোমরা তো তা অপছন্দই কর। অতএব আল্লাহকে ভয় কর। নিশ্চয়ই আল্লাহ অতিশয় তওবা কবুলকারী, পরম দয়ালু।",
    reference: "সূরা আল-হুজুরাত (৪৯:১২)"
  },
  {
    id: "q_35",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা ক্বাফ",
    meaning: "নিশ্চয় আমি মানুষকে সৃষ্টি করেছি এবং তার প্রবৃত্তি তাকে যে কুমন্ত্রণা দেয় তাও আমি অবগত আছি। আর আমি তো মানুষের গ্রীবাস্থিত জীবন-ধমনী (ঘাড়ের রগ) অপেক্ষাও অধিক নিকটবর্তী।",
    reference: "সূরা ক্বাফ (৫০:১৬)"
  },
  {
    id: "q_36",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আয-যারিয়াত",
    meaning: "আমি জিন ও মানবজাতিকে কেবল আমারই ইবাদত করার উদ্দেশ্য ব্যতীত অন্য কোনো উদ্দেশ্যে সৃষ্টি করিনি।",
    reference: "সূরা আয-যারিয়াত (৫১:৫৬)"
  },
  {
    id: "q_37",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আর-রহমান",
    meaning: "অতএব তোমরা তোমাদের প্রতিপালকের কোন কোন নিয়ামতকে অস্বীকার করবে? ভূপৃষ্ঠে যা কিছু রয়েছে সবই নশ্বর ও ধ্বংসশীল; কেবল আপনার মহিমাময় ও মহানুভব প্রতিপালকের সত্তাই চিরকাল অবিনশ্বর থাকবে।",
    reference: "সূরা আর-রহমান (৫৫:১৩, ২৬-২৭)"
  },
  {
    id: "q_38",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-হাদীদ",
    meaning: "তিনিই সেই সত্তা, যিনি আসমান ও জমিন সৃষ্টি করেছেন এবং আরশের ওপর সমাসীন হয়েছেন। তিনি জানেন যা ভূমিতে প্রবেশ করে এবং যা তা থেকে নির্গত হয়, যা আসমান থেকে অবতীর্ণ হয় এবং যা তাতে উত্থিত হয়। তোমরা যেখানেই থাক না কেন, তিনি তোমাদের সঙ্গেই আছেন। আর তোমরা যা কিছু কর, আল্লাহ তার সম্যক প্রত্যক্ষকারী।",
    reference: "সূরা আল-হাদীদ (৫৭:৪)"
  },
  {
    id: "q_39",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-হাশর",
    meaning: "তিনিই আল্লাহ, যিনি ছাড়া সত্য কোনো উপাস্য নেই; তিনি দৃশ্য ও অদৃশ্যের সর্বজ্ঞাতা, তিনি পরম করুণাময়, অতি দয়ালু। তিনিই আল্লাহ, যিনি ছাড়া কোনো ইলাহ নেই; তিনিই একমাত্র অধিপতি, পরম পবিত্র, শান্তিদাতা, নিরাপত্তাদাতা, রক্ষক, পরাক্রমশালী, প্রতাপশালী ও মহিমান্বিত। তারা যাকে অংশীদার স্থাপন করে আল্লাহ তা থেকে বহুগুণ পবিত্র ও মুক্ত।",
    reference: "সূরা আল-হাশর (৫৯:২২-২৩)"
  },
  {
    id: "q_40",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-জুমুআহ",
    meaning: "হে ঈমানদারগণ! যখন জুমুআর দিনে সালাতের জন্য আহ্বান করা হয়, তখন তোমরা দ্রুত আল্লাহর স্মরণের পানে ধাবিত হও এবং ক্রয়-বিক্রয় বর্জন কর। এটিই তোমাদের জন্য সর্বাপেক্ষা উত্তম, যদি তোমরা জানতে!",
    reference: "সূরা আল-জুমুআহ (৬২:৯)"
  },
  {
    id: "q_41",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আত-তালাক",
    meaning: "আর যে ব্যক্তি আল্লাহকে ভয় করে এবং তাকওয়া অবলম্বন করে, আল্লাহ তার জন্য সংকট থেকে উত্তরণের পথ সহজ করে দেন। আর তাকে এমন উৎস থেকে রিজিক দান করেন যা সে কল্পনাও করতে পারে না। যে ব্যক্তি আল্লাহর ওপর পূর্ণ ভরসা রাখে, তার জন্য আল্লাহই যথেষ্ট।",
    reference: "সূরা আত-তালাক (৬৫:২-৩)"
  },
  {
    id: "q_42",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-মুলক",
    meaning: "মহিমান্বিত তিনি যাঁর হাতে রয়েছে সর্বময় কর্তৃত্ব, এবং তিনি সবকিছুর ওপর সর্বশক্তিমান। যিনি সৃষ্টি করেছেন মৃত্যু ও জীবন, যাতে তোমাদের পরীক্ষা করতে পারেন যে তোমাদের মধ্যে কাজে-কর্মে কে সর্বোত্তম? আর তিনি তো পরাক্রমশালী, পরম ক্ষমাশীল।",
    reference: "সূরা আল-মুলক (৬৭:১-২)"
  },
  {
    id: "q_43",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-ইনশিরাহ",
    meaning: "অতএব নিশ্চয়ই কষ্টের সাথেই রয়েছে অফুরন্ত স্বস্তি। নিশ্চয়ই কষ্টের সাথেই রয়েছে স্বস্তি। অতএব যখনই অবসর পাও, সাধ্যমতো ইবাদাতে আত্মনিয়োগ কর এবং তোমার প্রতিপালকের প্রতি গভীর মনোযোগ নিবিষ্ট কর।",
    reference: "সূরা আল-ইনশিরাহ (৯৪:৫-৮)"
  },
  {
    id: "q_44",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-আসর",
    meaning: "মহাকালের শপথ! নিশ্চয় সমগ্র মানবজাতি চরম ক্ষতির মধ্যে নিমজ্জিত। কেবল তারা ছাড়া— যারা ঈমান এনেছে, সৎকাজ করেছে এবং পরস্পরকে সত্যের উপদেশ দিয়েছে ও ধৈর্যের উপদেশ দিয়েছে।",
    reference: "সূরা আল-আসর (১০৩:১-৩)"
  },
  {
    id: "q_45",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-কাওসার",
    meaning: "নিশ্চয় আমি আপনাকে অফুরন্ত কল্যাণ ও কাওসার দান করেছি। অতএব আপনি আপনার প্রতিপালকের উদ্দেশ্যে সালাত আদায় করুন এবং কুরবানী করুন। নিশ্চয় আপনার প্রতি বিদ্বেষ পোষণকারীই নির্বংশ।",
    reference: "সূরা আল-কাওসার (১০৮:১-৩)"
  },
  {
    id: "q_46",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-কাফিরুন",
    meaning: "বলুন, হে কাফিররা! আমি তার ইবাদাত করি না যার ইবাদাত তোমরা কর, আর তোমরাও তাঁর ইবাদাতকারী নও যাঁর ইবাদাত আমি করি। তোমাদের দীন তোমাদের জন্য, আর আমার দীন আমার জন্য।",
    reference: "সূরা আল-কাফিরুন (১০৯:১-৬)"
  },
  {
    id: "q_47",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-ইখলাস",
    meaning: "বলুন, তিনিই আল্লাহ, একক ও অদ্বিতীয়। আল্লাহ কারো মুখাপেক্ষী নন, সকলেই তাঁর মুখাপেক্ষী। তিনি কাউকে জন্ম দেননি এবং তাঁকেও কেউ জন্ম দেয়নি। আর তাঁর সমকক্ষ বা সমতুল্য কেউই নেই।",
    reference: "সূরা আল-ইখলাস (১১২:১-৪)"
  },
  {
    id: "q_48",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-ফালাক",
    meaning: "বলুন, আমি আশ্রয় প্রার্থনা করছি ভোরের প্রতিপালকের নিকট— তিনি যা সৃষ্টি করেছেন তার অনিষ্ট হতে, রাতের অন্ধকারের অনিষ্ট হতে যখন তা ছেয়ে যায়, গিরায় ফুঁ দিয়ে জাদুকারিণীদের অনিষ্ট হতে, এবং হিংসুকের অনিষ্ট হতে যখন সে হিংসা করে।",
    reference: "সূরা আল-ফালাক (১১৩:১-৫)"
  },
  {
    id: "q_49",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আন-নাস",
    meaning: "বলুন, আমি আশ্রয় চাচ্ছি মানুষের প্রতিপালকের নিকট, মানুষের অধিপতির নিকট, মানুষের প্রকৃত উপাস্যের নিকট— আত্মগোপনকারী কুমন্ত্রণাদাতার অনিষ্ট থেকে, যে মানুষের অন্তরে কুমন্ত্রণা নিক্ষেপ করে, জিন কিংবা মানুষের মধ্য হতে।",
    reference: "সূরা আন-নাস (১১৪:১-৬)"
  },
  {
    id: "q_50",
    type: "quran",
    badgeTitle: "পবিত্র কুরআনুল কারীম",
    category: "সূরা আল-ফাতিহা",
    meaning: "যাবতীয় প্রশংসা একমাত্র মহান আল্লাহর জন্য, যিনি সমগ্র বিশ্বজগতের প্রতিপালক। যিনি পরম করুণাময়, অতি দয়ালু। প্রতিফল দিবসের একমাত্র মালিক। আমরা কেবলমাত্র তোমারই ইবাদাত করি এবং কেবলমাত্র তোমারই কাছে সাহায্য প্রার্থনা করি। আমাদের সরল ও সঠিক পথের দিশা দাও— তাদের পথ, যাদের প্রতি তুমি অনুগ্রহ করেছ; তাদের পথ নয় যারা অভিশপ্ত এবং যারা পথভ্রষ্ট।",
    reference: "সূরা আল-ফাতিহা (১:১-৭)"
  }
];

// Helper to get dynamically cached Quran Ayahs from localStorage
function getDynamicQuranAyahs(): EntryReminderItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem('ibadat_dynamic_quran_cache');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {}
  return [];
}

// Background worker: Fetches a random Ayah across all 6,236 Ayahs of the Holy Quran
export async function prefetchRandomQuranAyah() {
  if (typeof window === 'undefined' || typeof fetch === 'undefined') return;
  try {
    // Pick random global Ayah from 1 to 6236
    const randomAyahNumber = Math.floor(Math.random() * 6236) + 1;
    const url = `https://api.alquran.cloud/v1/ayah/${randomAyahNumber}/bn.bengali`;
    const res = await fetch(url);
    if (!res.ok) return;
    const json = await res.json();
    if (json?.data?.text) {
      const d = json.data;
      const surahNum = d.surah?.number || 1;
      const surahMeta = ALL_SURAHS.find((s) => s.number === surahNum);
      const surahName = surahMeta ? surahMeta.banglaName : (d.surah?.englishName || `সূরা ${surahNum}`);
      const ayahInSurah = d.numberInSurah || 1;

      const newItem: EntryReminderItem = {
        id: `q_dyn_${d.number}`,
        type: 'quran',
        badgeTitle: 'পবিত্র কুরআনুল কারীম',
        category: `সূরা ${surahName}`,
        meaning: String(d.text).trim(),
        reference: `সূরা ${surahName}, আয়াত: ${toBengaliNumber(ayahInSurah)} (${surahNum}:${ayahInSurah})`
      };

      const existing = getDynamicQuranAyahs();
      if (!existing.some((x) => x.id === newItem.id)) {
        const updated = [newItem, ...existing].slice(0, 300);
        localStorage.setItem('ibadat_dynamic_quran_cache', JSON.stringify(updated));
      }
    }
  } catch (err) {
    // Background fetch failure is completely safe and silent
  }
}

// Helper to get cached hadiths for an API book (Bukhari, Muslim, etc.)
function getCachedHadithsForBook(bookId: string): any[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`ibadat_hadith_cache_${bookId}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {}
  return [];
}

// Background worker: Prefetches random chapters from Bukhari, Muslim, Abu Dawood, Tirmidhi, Nasai, Ibn Majah, Malik
export async function prefetchRandomBookSection(bookId: string, apiBookId: string) {
  if (typeof window === 'undefined' || typeof fetch === 'undefined') return;
  try {
    const meta = (bookSectionsMeta as any)[apiBookId];
    if (!meta || !meta.sections) return;
    const secKeys = Object.keys(meta.sections).filter((k) => k !== '0');
    if (secKeys.length === 0) return;

    const randomSec = secKeys[Math.floor(Math.random() * secKeys.length)];
    const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ben-${apiBookId}/sections/${randomSec}.min.json`;
    const res = await fetch(url);
    if (!res.ok) return;

    const json = await res.json();
    if (Array.isArray(json?.hadiths) && json.hadiths.length > 0) {
      const existing = getCachedHadithsForBook(bookId);
      const newItems = json.hadiths
        .map((h: any) => ({
          hadithNumber: h.hadithnumber ? `হাদিস ${h.hadithnumber}` : '',
          chapter: meta.sections[randomSec] || '',
          text: String(h.text || '').trim(),
          reference: `${meta.name}: ${h.hadithnumber}`,
          grade: 'সহীহ'
        }))
        .filter((h: any) => h.text.length > 0);

      // Keep up to 250 hadiths per book in local storage
      const combined = [...existing, ...newItems].slice(-250);
      localStorage.setItem(`ibadat_hadith_cache_${bookId}`, JSON.stringify(combined));
    }
  } catch (err) {
    // Silent background handling
  }
}

/**
 * ১৪টি সুনির্দিষ্ট হাদিস ক্যাটাগরির প্রতিটি থেকে সমভাবে রেন্ডম হাদিস নির্বাচন
 * বড় বা ছোট যে কোনো সাইজের হাদিস কোনো ফিল্টার ছাড়া সম্পূর্ণ গৃহীত হবে
 */
export function getRandomHadithFrom14Categories(): EntryReminderItem {
  // ১. সমসম্ভাব্যতায় ১৪টি ক্যাটাগরির যেকোনো একটি নির্বাচন (১/১৪ সম্ভাবনা)
  const categoryIdx = Math.floor(Math.random() * ALL_14_HADITH_CATEGORIES.length);
  const chosenCat = ALL_14_HADITH_CATEGORIES[categoryIdx];

  let rawList: any[] = [];
  let fallbackChapter = chosenCat.title;

  switch (chosenCat.id) {
    case 'shamayil':
      rawList = shamayilFull as any[];
      break;
    case 'nawawi40':
      rawList = nawawi40Full as any[];
      break;
    case 'qudsi40':
      rawList = qudsi40Full as any[];
      break;
    case 'adab_mufrad':
      rawList = adabMufradFull as any[];
      break;
    case 'selected300':
      rawList = selected300Full as any[];
      break;
    case 'riyad500':
      rawList = (riyadFull as any[]).slice(0, 500);
      break;
    case 'riyad_full':
      rawList = riyadFull as any[];
      break;
    default: {
      // canonical 7 books: bukhari, muslim, abudawood, tirmidhi, nasai, ibnmajah, malik
      const bundledBook = HADITH_BOOKS.find((b) => b.id === chosenCat.id);
      const bundledHadiths = bundledBook?.hadiths || [];
      const cachedHadiths = getCachedHadithsForBook(chosenCat.id);
      rawList = [...bundledHadiths, ...cachedHadiths];

      // ব্যাকগ্রাউন্ডে এই বইটির আরও নতুন সেকশন ফেচ করার নির্দেশ
      if (chosenCat.apiBookId) {
        prefetchRandomBookSection(chosenCat.id, chosenCat.apiBookId);
      }
      break;
    }
  }

  // যদি কোনো ক্যাটাগরির তালিকা সাময়িকভাবে খালি থাকে, riyadFull বা selected300 থেকে ব্যাকআপ নেওয়া
  if (!Array.isArray(rawList) || rawList.length === 0) {
    const backupBook = HADITH_BOOKS.find((b) => b.id === chosenCat.id);
    rawList = backupBook?.hadiths?.length ? backupBook.hadiths : (selected300Full as any[]);
  }

  // ২. নির্বাচিত ক্যাটাগরি থেকে যেকোনো হাদিস (ছোট অথবা বড়—কোনো সাইজ ফিল্টার ছাড়া)
  const picked = rawList[Math.floor(Math.random() * rawList.length)];

  // টেক্সট, বর্ণনাকারী ও রেফারেন্স প্রস্তুতি (আরবি বাদ দিয়ে শুধুমাত্র বাংলা অর্থ)
  const text: string = String(picked?.text || picked?.translation || '').trim();
  const rawRef: string = String(
    picked?.reference || picked?.chapter || chosenCat.title
  ).trim();
  const grade: string = picked?.grade ? ` [মান: ${String(picked.grade).trim()}]` : '';
  const narrator: string = picked?.narrator ? String(picked.narrator).trim() : '';
  const chapter: string = picked?.chapter
    ? String(picked.chapter).trim()
    : fallbackChapter;

  return {
    id: `h_${chosenCat.id}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    type: 'hadith',
    badgeTitle: `সহীহ হাদিস শরীফ (${chosenCat.title})`,
    category: chapter,
    narrator: narrator ? `${narrator}` : undefined,
    meaning: text,
    reference: `${rawRef}${grade}`
  };
}

/**
 * পবিত্র কুরআনুল কারীমের সম্পূর্ণ ১১৪টি সূরা ও ৬,২৩৬টি আয়াত থেকে রেন্ডম আয়াত নির্বাচন
 */
export function getRandomQuranAyah(): EntryReminderItem {
  // ব্যাকগ্রাউন্ডে ক্রমাগত নতুন আয়াত ফেচ করা যাতে লাইব্রেরী বড় হতে থাকে
  prefetchRandomQuranAyah();

  const dynamicAyahs = getDynamicQuranAyahs();
  const combinedPool = [...QURAN_ENTRY_REMINDERS, ...dynamicAyahs];

  const picked = combinedPool[Math.floor(Math.random() * combinedPool.length)];
  return picked;
}

/**
 * মূল এন্ট্রি ফাংশন: ৫০% কুরআনের আয়াত এবং ৫০% হাদিস (১৪টি ক্যাটাগরি থেকে)
 */
export function getRandomEntryReminder(): EntryReminderItem {
  const isQuran = Math.random() < 0.5;

  if (isQuran) {
    return getRandomQuranAyah();
  }

  try {
    return getRandomHadithFrom14Categories();
  } catch (err) {
    console.warn("Fallback to Quran on Hadith pick error:", err);
    return getRandomQuranAyah();
  }
}
