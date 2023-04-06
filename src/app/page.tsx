import Link from "next/link";
import studyPic from "../../public/kung-fu-1.jpg";
import practicePic from "../../public/kung-fu-2.jpg";
import Image from "next/image";

import { Card } from "./Card";
import { PageHeader } from "../common/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader
        title="Προετοιμασία για τις εξετάσεις"
        subtitle="Ένας μικρός προπονητής γεννιέται 🥋"
      />
      <div className="flex gap-3 w-full h-full flex-col justify-start items-center md:flex-row md:items-start md:justify-center">
        <Link href="/study" className="flex w-fit h-fit">
          <Card
            title="Ύλη μαθημάτων"
            label="ΑΠΑΝΤΗΜΕΝΕΣ ΕΡΩΤΗΣΕΙΣ"
            description="Μελέτησε την ύλη του κάθε μαθήματος μέσα από απαντημένες ερωτήσεις"
            image={
              <Image
                src={studyPic}
                alt="Study picture"
                className="w-full h-full object-cover"
              />
            }
          />
        </Link>

        <Link href="/practice" className="flex w-fit h-fit">
          <Card
            title="Δοκίμασε τις γνώσεις σου"
            label="ΤΕΣΤ ΠΡΟΟΔΟΥ"
            description="Απάντησε στις ερωτήσεις πολλαπλής επιλογής του κάθε μαθήματος σε ανακατεμένη σειρά"
            image={
              <Image
                src={practicePic}
                alt="Practice picture"
                className="w-full h-full object-cover"
              />
            }
          />
        </Link>
      </div>
    </>
  );
}
