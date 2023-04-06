type Props = {
  actionButton?: React.ReactNode;
  image?: React.ReactNode;
  title: string;
  label: string;
  description: string;
};

export function Card(props: Props) {
  const { actionButton, image, title, label, description } = props;
  return (
    <div className="h-[400px] w-full min-w-[300px] rounded-[14px] relative overflow-hidden">
      <div className="w-full h-full ">{image}</div>
      <div className="absolute top-0 right-0 left-0 bottom-0 flex flex-col">
        <div className="bg-gradient-to-b from-slate-950 to-transparent flex flex-1">
          <div className="p-4 flex flex-col justify-start items-start gap-1/2">
            <div className="text-gray-400 text-xs font-bold">{label}</div>
            <h3 className="text-slate-50 text-2xl">{title}</h3>
          </div>
        </div>
        <div className="p-4 flex items-center justify-between text-white h-16 w-full backdrop-blur-md bg-black bg-opacity-40 backdrop-saturate-150">
          <div className="text-xs text-slate-50">{description}</div>
          <div>{actionButton}</div>
        </div>
      </div>
    </div>
  );
}
