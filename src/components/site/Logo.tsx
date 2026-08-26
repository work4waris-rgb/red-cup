import logo from "@/assets/redcup-logo.png";

export function Logo({
  size = 32,
  withWordmark = true,
}: {
  size?: number;
  withWordmark?: boolean;
}) {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src={logo}
        alt="Red Cup logo"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="object-contain drop-shadow-[0_0_14px_oklch(0.56_0.222_26.5/45%)]"
      />
      {withWordmark && (
        <span className="display text-[15px] tracking-[0.22em] uppercase">Red Cup</span>
      )}
    </span>
  );
}
