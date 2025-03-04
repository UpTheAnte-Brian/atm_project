import { RightButton } from "./right-button";
import { LeftButton } from "./left-button";

export default function ButtonColumn({ side }: { side: string }) {
  if (side === "left") {
    return (
      <>
        <div className="col-span-2 row-span-3"></div>
        <div className="col-span-2 row-span-4">
          <LeftButton type="submit">hi</LeftButton>
          <LeftButton type="submit">hi</LeftButton>
          <LeftButton type="submit">hi</LeftButton>
          <LeftButton type="submit">hi</LeftButton>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="col-span-2 row-span-3"></div>
        <div className="col-span-2 row-span-4">
          <RightButton type="submit">hi</RightButton>
          <RightButton type="submit">hi</RightButton>
          <RightButton type="submit">hi</RightButton>
          <RightButton type="submit">hi</RightButton>
        </div>
      </>
    );
  }
}
