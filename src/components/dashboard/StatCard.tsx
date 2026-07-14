import { ElementType } from "react";
import styles from "./StatCard.module.scss";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ElementType;
  trend?: string;
  trendUp?: boolean;
}

export default function StatCard({ title, value, icon: Icon, trend, trendUp }: StatCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.iconWrapper}>
          <Icon size={20} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.value}>{value}</p>
        {trend && (
          <p className={`${styles.trend} ${trendUp ? styles.positive : styles.negative}`}>
            {trendUp ? "↑" : "↓"} {trend}
          </p>
        )}
      </div>
    </div>
  );
}
