import { PageProps } from "../../../../.next/types/app/page";
import { PageHeader } from "../../../common/PageHeader";
import { getCourse } from "../../api-client";
import { BiCheckCircle, BiCircle, BiCheck } from "react-icons/bi";
import { PracticeTool } from "./PracticeTool";
import { shuffleArray } from "./utils/shuffleArray";

export default function Page({ params }: PageProps) {
  const { slug } = params;

  if (!slug || typeof slug !== "string") {
    return <h1>{`Not found :'(`}</h1>;
  }

  const course = getCourse(slug);

  if (!course) {
    return <h1>{`Not found :'(`}</h1>;
  }

  const { title, questions } = course;

  return (
    <div>
      <PageHeader
        title={title}
        subtitle="Απάντησε διαδοχικά τις ερωτήσεις του μαθήματος για να προετοιμαστείς για τις εξετάσεις. Οι ερωτήσεις κάθε φορά είναι ανακατεμένες."
        hasBackButton
      />
      <div className="w-full max-w-[820px] m-auto">
        <PracticeTool questions={shuffleArray(questions)} />
      </div>
    </div>
  );
}
