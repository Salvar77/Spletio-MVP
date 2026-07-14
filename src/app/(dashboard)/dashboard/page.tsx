import StatCard from "@/components/dashboard/StatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Users, Briefcase, CalendarCheck, FileText } from "lucide-react";
import styles from "./page.module.scss";

export default function DashboardPage() {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1 className={styles.title}>Witaj w Spletio 👋</h1>
        <p className={styles.subtitle}>Oto podsumowanie Twojego systemu rekrutacyjnego.</p>
      </header>

      <div className={styles.grid}>
        <StatCard 
          title="Łącznie Kandydatów" 
          value="1,248" 
          icon={Users} 
          trend="12% od zeszłego tygodnia"
          trendUp={true}
        />
        <StatCard 
          title="Otwarte Rekrutacje" 
          value="12" 
          icon={Briefcase} 
          trend="2 nowe od wczoraj"
          trendUp={true}
        />
        <StatCard 
          title="Umówione Rozmowy" 
          value="8" 
          icon={CalendarCheck} 
        />
        <StatCard 
          title="Nierozpatrzone CV" 
          value="34" 
          icon={FileText} 
          trend="Wymaga Twojej uwagi"
          trendUp={false}
        />
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.mainColumn}>
          <div className={styles.placeholderChart}>
            <h3>Skuteczność AI Parsera</h3>
            <div className={styles.chartArea}>
              <p>Wykres analityczny wygeneruje się automatycznie po dodaniu i przeanalizowaniu pierwszych 100 dokumentów CV.</p>
            </div>
          </div>
        </div>
        <div className={styles.sideColumn}>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
