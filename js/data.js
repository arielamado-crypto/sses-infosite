/* =========================================================
   SSES WEBSITE — CONTENT FILE
   ---------------------------------------------------------
   Edit ONLY this file to update the website's content.
   - Keep the quotes " " around text.
   - Keep the comma , after each item.
   - Photos: put the image inside the images/teachers/ folder,
     then write its file name, e.g. photo: "images/teachers/juan.jpg"
     Leave photo: "" if there is no picture yet (initials will show).
   ========================================================= */

const SCHOOL = {
  name: "Special Science Elementary School",
  shortName: "SSES",
  parentSchool: "Estancia Central Elementary School",
  address: "Estancia, Iloilo, Philippines",
  region: "Region VI – Western Visayas",
  division: "Schools Division of Iloilo",
  district: "Schools District of Estancia",
  email: "116349@deped.gov.ph",          // TODO: replace
  phone: "(033) 000-0000",                     // TODO: replace
  facebook: "https://www.facebook.com/profile.php?id=61570621767240",       // TODO: replace with the school's Facebook page
  schoolId: "116349",                          // TODO: replace with DepEd School ID
  mapQuery: "Estancia Central Elementary School, Estancia, Iloilo",
  welcome:
    "Special Science Elementary School (SSES) of Estancia Central Elementary School nurtures young learners with a strong foundation in Science, Mathematics, and Research. We aim to develop curious, creative, and responsible Filipino children who love learning and serve their community.",
  developer: "Ariel L. Amado, Master Teacher I"
};

/* ---------- PRINCIPAL & TEACHERS (front-page carousel + Faculty page) ----------
   The FIRST person is shown first in the carousel (put the Principal first).
   role: "principal" gets a special gold badge.                                 */
const PEOPLE = [
  {
    name: "ZENAFE C. CATON, EdD",
    position: "Principal II",
    role: "principal",
    photo: "images/teachers/Caton.jpg",
    message: "Welcome to Special Science Elementary School — where every child is guided to discover, question, and grow."
  },
  { name: "ARIEL L. AMADO", position: "Master Teacher I",   role: "Grade Head", photo: "images/teachers/Amado.png", message: "Computer/Research Teacher" },
  { name: "LEGAYA G. SANTIAGO", position: "Master Teacher I",         role: "teacher", photo: "images/teachers/Santiago.jpg", message: "Grade 1 Adviser" },
  { name: "LESLIE KAYE S. BERIA", position: "Teacher II",          role: "teacher", photo: "images/teachers/Beria.jpg", message: "Grade 2 Adviser" },
  { name: "IVY G. AGUILAR", position: "Teacher III",          role: "teacher", photo: "images/teachers/Aguilar.jpg", message: "Grade 3 Adviser" },
  { name: "VELIA G. AMBITO", position: "Master Teacher I",          role: "teacher", photo: "images/teachers/Ambito.png", message: "Grade 4 Adviser" },
  { name: "MARIEL B. PANES", position: "Teacher III",          role: "teacher", photo: "images/teachers/Panes.jpg", message: "Grade 5 Adviser" },
  { name: "ROY JOHN A. MONTANIEL", position: "Master Teacher I",        role: "teacher", photo: "images/teachers/Montaniel.jpg", message: "Grade 6 Adviser" },
  { name: "MA. VICTORIA M. BUARON", position: "Master Teacher II",          role: "teacher", photo: "images/teachers/Buaron.jpg", message: "English/Research Teacher" },
  { name: "WELTER P. PAGAYONAN", position: "Master Teacher I",        role: "teacher", photo: "images/teachers/Pagayonan.jpg", message: "AP/EPP Teacher" }
];

/* ---------- NEWS & ANNOUNCEMENTS (newest first) ---------- */
const NEWS = [
  {
    date: "2026-10-22",
    title: "Welcome to the official SSES website!",
    text: "Stay updated with school news, announcements, and events through this site."
  },
  {
    date: "October 9–10, 2026",
    title: "SSES Foundation Celebration",
    text: "Celebrating the 3rd SSES Founding Anniversary"
  },
  {
    date: "2026-10-01",
    title: "[Sample] Parent–Teacher Conference",
    text: "Replace this with a real announcement. Edit the NEWS list in js/data.js."
  }
];

/* ---------- PHOTO GALLERY ----------
   Put photos in images/gallery/ then list them here:
   { photo: "images/gallery/sciencefair.jpg", caption: "Science Fair 2026" },   */
const GALLERY = [
];
