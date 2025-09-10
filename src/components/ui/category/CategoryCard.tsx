import Link from "next/link";
import { Camera, Computer, Gamepad, Headphones, Phone, Watch } from "lucide-react";
import { Button } from "../buttons";

const categories = [
  { label: "Phone", icon: <Phone /> },
  { label: "Computer", icon: <Computer /> },
  { label: "Watch", icon: <Watch /> },
  { label: "Camera", icon: <Camera /> },
  { label: "Headphones", icon: <Headphones /> },
  { label: "Gamepad", icon: <Gamepad /> },
];

export const CategoryCard: React.FC = () => {
  return (
    <div className="w-full py-7">
      <div
        className="
        grid grid-cols-2 gap-4 px-2 
        sm:grid-cols-3 
        md:flex md:px-2 md:gap-24 w-full
      "
      >
        {categories.map((cat) => (
          <Link key={cat.label} href={`/shop?category=${cat.label}`}>
            <Button
              variant="neutral"
              className="text-primary hover:bg-primary hover:text-primary-content py-2 px-3 md:px-4 md:py-8"
              size="xl"
              icon={cat.icon}
              label={cat.label}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
