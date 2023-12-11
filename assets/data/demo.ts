import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
    name: "R 19 950pm",
    isOnline: true,
    match: "78",
    description:
      "5 Bedroom House to Rent in Observatory.",
    message:
      "Welcome to The Baker! This is a brand new development situated in PRIME Observatory. This will be a one of a kind co-living development which will boast lifestyle/community based living. The location allows all tenants easy access to shops and restaurants along with the Jamie Stop being 1km away!",
    image: IMAGE_01,
  },
  {
    id: 2,
    name: "R 19 950pm",
    isOnline: true,
    match: "78",
    description:
      "5 Bedroom House to Rent in Observatory.",
    message:
      "Welcome to The Baker! This is a brand new development situated in PRIME Observatory. This will be a one of a kind co-living development which will boast lifestyle/community based living. The location allows all tenants easy access to shops and restaurants along with the Jamie Stop being 1km away!",
    image: IMAGE_02,
  },
  {
    id: 3,
    name: "R 30 000pm",
    match: "45",
    description:
      "3 Bedroom House to Rent in Plattekloof",
    isOnline: false,
    message:
      "3 Bedroom Family Home within Secure Estate!",
    image: IMAGE_03,
  },
  {
    id: 4,
    name: "R 9 250pm",
    match: "88",
    description:
      "1 Bedroom Apartment / Flat to Rent in Burgundy Estate",
    isOnline: true,
    message: "This modern, spacious and sunny apartment is pet and family friendly. Located in The Vineyard, a secure complex with an array of great features.",
    image: IMAGE_04,
  },
  {
    id: 5,
    name: "R 11 750pm",
    match: "76",
    description:
      "2 Bedroom Apartment / Flat to Rent in Burgundy Estate",
    isOnline: false,
    message: "Look no Further - Ground Floor Apartment",
    image: IMAGE_05,
  },
  {
    id: 6,
    name: "R 6 400pm",
    match: "95",
    description:
      "2 Bedroom Apartment / Flat to Rent in Groenvallei",
    isOnline: true,
    message:
      "You have nothing, nothing to threaten me with. Nothing to do with all your strength.",
    image: IMAGE_06,
  },
  {
    id: 7,
    name: "R 11 000pm",
    match: "67",
    description:
      "Commercial Property to Rent in Tyger Valley",
    isOnline: true,
    message:
      "Never start with the head. The victim gets all fuzzy. He can't feel the next... See?",
    image: IMAGE_07,
  },
  {
    id: 8,
    name: "R 40 000pm",
    match: "85",
    description:
      "Commercial Property to Rent in Newlands",
    age: "27",
    location: "Irvine, CA",
    info1: 'Straight, Single, 5"10',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    isOnline: true,
    message:
      "And as for the television's so-called plan, Batman has no jurisdiction.",
    image: IMAGE_08,
  },
  {
    id: 9,
    name: "R 13 000",
    match: "74",
    description:
      "4 Bedroom House to Rent in Ruwari",
    isOnline: true,
    message:
      "This is what happens when an unstoppable force meets an immovable object.",
    image: IMAGE_09,
  },
  {
    id: 10,
    name: "R 15 000",
    match: "98",
    description:
      "Industrial Property to Rent in Brackenfell Industrial.",
    isOnline: false,
    message:
      "You want order in Gotham. Batman must take off his mask and turn himself in.",
    image: IMAGE_10,
  },
];

export default data;
