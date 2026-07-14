import styles from "./RecentActivity.module.scss";

const activities = [
  { id: 1, text: "AI Router przeanalizował CV Krystiana P.", time: "10 minut temu", type: "ai" },
  { id: 2, text: "Nowa aplikacja na stanowisko Frontend Developer", time: "1 godzinę temu", type: "user" },
  { id: 3, text: "Zaktualizowano status Anny N. na 'Rozmowa'", time: "3 godziny temu", type: "action" },
  { id: 4, text: "Wygenerowano raport porównawczy dla 5 kandydatów", time: "Wczoraj", type: "system" },
];

export default function RecentActivity() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Ostatnia Aktywność</h3>
      <ul className={styles.list}>
        {activities.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={`${styles.indicator} ${styles[item.type]}`} />
            <div className={styles.content}>
              <p className={styles.text}>{item.text}</p>
              <p className={styles.time}>{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
