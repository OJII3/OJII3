import { FC } from "react";

export const SkillCard: FC<{ name: string; image: string }> = ({
  name,
  image,
}) => (
  <div className="flex flex-col items-center justify-center w-32 h-40 p-4 mx-auto bg-white rounded-lg shadow-sm">
    <img src={image} alt={name} className="object-contain w-20 h-20" />
    <h3 className="mt-4 text-xl font-bold text-center text-gray-500">{name}</h3>
  </div>
);
