import StatCounter from "./StatCounter";

function StatsSection() {
  return (
    <div className="stats">
      <StatCounter target={5} suffix="" label="Community centres" />
      <StatCounter target={8} suffix="+" label="Support programs" />
      <StatCounter target={50} suffix="+" label="Community stories" />
      <StatCounter target={6} suffix="" label="Days of weekly service" />
    </div>
  );
}

export default StatsSection;