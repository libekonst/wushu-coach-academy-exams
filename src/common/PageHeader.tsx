import { BackButton } from "./BackButton";

type Props = {
  title?: string;
  subtitle?: string;
  hasBackButton?: boolean;
};

export function PageHeader({ subtitle, title, hasBackButton }: Props) {
  return (
    <>
      {hasBackButton ? (
        <div className="mt-2">
          <BackButton />
        </div>
      ) : null}
      <div className="mt-6">
        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
        <p className="mt-2 mb-8 text-sm leading-7 text-slate-500">{subtitle}</p>
      </div>
    </>
  );
}
