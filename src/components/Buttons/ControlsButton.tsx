import { SvgIconComponent } from "@mui/icons-material";

type ControlButtonProps = {
  onControl: () => void;
  Icon: SvgIconComponent;
  side: "left" | "right";
};
export const ControlButton = ({
  onControl,
  Icon,
  side,
}: ControlButtonProps) => {
  return (
    <button
      type="button"
      onClick={onControl}
      className={`h-10 w-10 rounded-full bg-[var(--color-bg)] text-[var(--color-text-primary)] [box-shadow:var(--shadow-primary)] hover:shadow-blue-400/30 hover:shadow-xl hover:scale-110`}
    >
      <Icon fontSize="small" className={`${side === "left" && "ml-1"}`} />
    </button>
  );
};
