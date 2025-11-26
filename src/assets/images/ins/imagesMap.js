import Aleksandra_Majkic from "./Aleksandra Majkic.jpeg";
import Alex_Hyett from "./Alex Hyett.jpeg";
import Alex_Tushinsky from "./Alex Tushinsky.jpeg";
import Amichai_Mantinband from "./Amichai Mantinband.jpg";
import Brandon_Minnick from "./Brandon Minnick.jpeg";
import Cory_House from "./Cory House.jpg";
import Dan_Clarke from "./Dan Clarke.jpg";
import David_Pine from "./David Pine.jpg";
import Dylan_Beattie from "./Dylan Beattie.jpg";
import Ed_Charbeneau from "./Ed Charbeneau.jpeg";
import Gui_Ferreira from "./Gui Ferreira.png";
import Hannes_Lowette from "./Hannes Lowette.png";
import Irina_Scurtu from "./Irina Scurtu.jpg";
import James_Charlesworth from "./James Charlesworth.jpg";
import James_Eastham from "./James Eastham.jpg";
import Jill_Gundersen from "./Jill Gundersen.jpg";
import Jimmy_Engström from "./Jimmy Engström.jpeg";
import Jody_Donetti from "./Jody Donetti.png";
import Jonathan_Tower from "./Jonathan Tower.png";
import Kevin_Dockx from "./Kevin Dockx.jpg";
import Mel_Grubb from "./Mel Grubb.jpg";
import Michael_Staib from "./Michael Staib.jpeg";
import Mohamad_Lawand from "./Mohamad Lawand.jpg";
import Nick_Chapsas from "./Nick Chapsas.jpeg";
import Nick_Cosentino from "./Nick Cosentino.jpeg";
import Nick_Proud from "./Nick Proud.jpg";
import Ryan_Murphy from "./Ryan Murphy.jpg";
import Scott_Sauber from "./Scott Sauber.png";
import Shelley_Benhoff from "./Shelley Benhoff.jpeg";
import Steve_ardalis_Smith from "./Steve ardalis Smith.jpg";

const raw = {
  "Aleksandra Majkic": Aleksandra_Majkic,
  "Alex Hyett": Alex_Hyett,
  "Alex Tushinsky": Alex_Tushinsky,
  "Amichai Mantinband": Amichai_Mantinband,
  "Brandon Minnick": Brandon_Minnick,
  "Cory House": Cory_House,
  "Dan Clarke": Dan_Clarke,
  "David Pine": David_Pine,
  "Dylan Beattie": Dylan_Beattie,
  "Ed Charbeneau": Ed_Charbeneau,
  "Gui Ferreira": Gui_Ferreira,
  "Hannes Lowette": Hannes_Lowette,
  "Irina Scurtu": Irina_Scurtu,
  "James Charlesworth": James_Charlesworth,
  "James Eastham": James_Eastham,
  "Jill Gundersen": Jill_Gundersen,
  "Jimmy Engström": Jimmy_Engström,
  "Jody Donetti": Jody_Donetti,
  "Jonathan Tower": Jonathan_Tower,
  "Kevin Dockx": Kevin_Dockx,
  "Mel Grubb": Mel_Grubb,
  "Michael Staib": Michael_Staib,
  "Mohamad Lawand": Mohamad_Lawand,
  "Nick Chapsas": Nick_Chapsas,
  "Nick Cosentino": Nick_Cosentino,
  "Nick Proud": Nick_Proud,
  "Ryan Murphy": Ryan_Murphy,
  "Scott Sauber": Scott_Sauber,
  "Shelley Benhoff": Shelley_Benhoff,
  "Steve ardalis Smith": Steve_ardalis_Smith,
};

function normalizeKey(s) {
  return String(s)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

const imagesMap = Object.fromEntries(
  Object.entries(raw).map(([k, v]) => [normalizeKey(k), v])
);

export default imagesMap;
