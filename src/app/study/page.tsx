import Link from "next/link";
import { getAllCourses } from "../api-client";
import { PageHeader } from "../../common/PageHeader";

export default function Page() {
  const courses = getAllCourses();

  return (
    <div>
      <PageHeader
        title="Μελέτη"
        subtitle="Διάλεξε την ενότητα που θες να μελετήσεις"
        hasBackButton
      />
      <ul className="flex flex-col px-4 gap-2 w-[500px] max-w-full">
        {Object.values(courses).map((course) => (
          <li key={course.id} className="">
            <Link
              className="w-full text-lg text-slate-900 font-medium px-6 py-3 bg-slate-100 hover:bg-slate-200 rounded-md flex"
              href={`/study/${course.id}`}
            >
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
