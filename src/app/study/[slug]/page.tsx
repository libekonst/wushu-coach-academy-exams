import { PageProps } from "../../../../.next/types/app/page";
import { PageHeader } from "../../../common/PageHeader";
import { getCourse } from "../../api-client";
import { BiCheckCircle, BiCircle, BiCheck } from "react-icons/bi";
import cn from "classnames";

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
        subtitle="Βρες τις ερωτήσεις του μαθήματος, με σημειώμενες τις σωστές απαντήσεις"
        hasBackButton
      />

      <ol className="space-y-3">
        {questions.map((question) => (
          <li
            key={question.id}
            className="rounded-[20px] bg-gray-50 px-4 py-5 hover:bg-gray-100 transition-colors text-slate-800 hover:text-slate-950"
          >
            <h2 className="text-base font-semibold">{question.text}</h2>
            <ol className="mt-2 ml-1">
              {question.options.map((option) => {
                return (
                  <li
                    key={option.id}
                    className={cn(
                      "flex items-center justify-start space-x-1 text-sm mt-1",
                      {
                        "font-semibold text-green-800 group-hover:text-green-950":
                          option.isCorrect,
                      }
                    )}
                  >
                    {option.isCorrect ? (
                      <div>
                        <BiCheck color="currentColor" />
                      </div>
                    ) : (
                      <div>
                        <BiCircle color="currentColor" />
                      </div>
                    )}
                    <div>{option.text}</div>
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
    </div>
  );
}
