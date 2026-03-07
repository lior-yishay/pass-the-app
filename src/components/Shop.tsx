import { FC, useState } from "react";
import { CowCard } from "./CowCard";
import { CowRunAnimation } from "./CowRunAnimation";
import { Cow } from "../shared/types";
import { useAppDispatch } from "../hooks/reduxHooks";
import { buyCow, rentCow } from "../store/cowSlice";

interface ShopProps {
  cows: Cow[];
  showActions?: boolean;
}

const Shop: FC<ShopProps> = ({ cows, showActions = true }) => {
  const [runCow, setRunCow] = useState(false);

  const dispatch = useAppDispatch();

  const runAnimation = (): void => {
    setRunCow(true);

    setTimeout(() => {
      setRunCow(false);
    }, 1800);
  };

  const handleBuyCow = (cow: Cow) => {
    runAnimation();
    dispatch(buyCow(cow));
  };

  const handleRentCow = (cowToRent: Cow) => {
    runAnimation();
    dispatch(rentCow(cowToRent));
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-4 gap-3">
        {cows.map((cow) => (
          <CowCard
            key={cow.name}
            cowDetails={cow}
            onBuy={showActions ? () => handleBuyCow(cow) : undefined}
            onRent={showActions ? () => handleRentCow(cow) : undefined}
          />
        ))}
      </div>

      <CowRunAnimation
        visible={runCow}
        image="https://dl.glitter-graphics.com/pub/3719/3719207vbqlx3dbs4.gif"
        onFinish={() => setRunCow(false)}
      />
    </div>
  );
};

export default Shop;
