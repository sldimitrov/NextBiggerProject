import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Burgas%2C_Bulgaria_-_panoramio_%2814%29.jpg/375px-Burgas%2C_Bulgaria_-_panoramio_%2814%29.jpg",
    address: "Some address 5, 8500 Burgas/Bulgaria",
  },
  {
    id: "m1",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Samarsko_Zname_Panorama.jpg/375px-Samarsko_Zname_Panorama.jpg",
    address: "Some address 5, 3500 Stara Zagora/Bulgaria",
  },
  {
    id: "m1",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Shumen_chitalishte_Dobri_Voynikov.jpg/375px-Shumen_chitalishte_Dobri_Voynikov.jpg",
    address: "Shumen",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
