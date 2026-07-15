import { ArrowLeft, Save, BrainCircuit, AlignLeft, Info } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.scss";

export default function NewJobPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.leftNav}>
          <Link href="/jobs" className={styles.backButton}>
            <ArrowLeft size={20} />
            Wróć do bazy ofert
          </Link>
          <h1 className={styles.title}>Kreator Nowej Oferty Pracy</h1>
          <p className={styles.subtitle}>Zdefiniuj wymagania, na podstawie których AI oceni wgrane CV.</p>
        </div>
        
        <div className={styles.actions}>
          <Link href="/jobs" className={styles.cancelBtn}>Anuluj</Link>
          <button className={styles.saveBtn}>
            <Save size={18} />
            Zapisz i Aktywuj
          </button>
        </div>
      </header>

      <div className={styles.formGrid}>
        {/* Kolumna Lewa: Podstawowe Dane */}
        <div className={styles.mainColumn}>
          <section className={styles.panel}>
            <div className={styles.panelHeader}>
              <AlignLeft className={styles.icon} />
              <h2>Podstawowe Informacje</h2>
            </div>
            
            <div className={styles.formGroup}>
              <label>Tytuł Stanowiska</label>
              <input type="text" placeholder="np. Senior Frontend Developer" />
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>Departament</label>
                <select>
                  <option>Wybierz departament...</option>
                  <option>Engineering (IT)</option>
                  <option>Product & Design</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Lokalizacja</label>
                <input type="text" placeholder="np. Warszawa / Zdalnie" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>Typ Umowy</label>
                <select>
                  <option>B2B</option>
                  <option>UoP</option>
                  <option>Zlecenie</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Poziom Doświadczenia</label>
                <select>
                  <option>Junior</option>
                  <option>Mid / Regular</option>
                  <option>Senior</option>
                  <option>Lead / Manager</option>
                </select>
              </div>
            </div>
          </section>

          <section className={styles.panel}>
            <div className={styles.panelHeader}>
              <BrainCircuit className={styles.iconAi} />
              <h2>Wymagania dla Sztucznej Inteligencji (Prompt)</h2>
            </div>
            <p className={styles.helperText}>
              Wklej tutaj pełen opis stanowiska i oczekiwań. Moduł AI użyje tego tekstu, aby przeanalizować i ocenić pliki PDF (CV) kandydatów z dokładnością do 99%.
            </p>
            
            <div className={styles.formGroup}>
              <textarea 
                rows={12} 
                placeholder="Wymagania:&#10;- Minimum 3 lata doświadczenia z React i TypeScript&#10;- Dobra znajomość wzorców projektowych...&#10;&#10;Opisz dokładnie kogo szukasz, AI zajmie się resztą." 
              />
            </div>
          </section>
        </div>

        {/* Kolumna Prawa: Ustawienia AI */}
        <div className={styles.sideColumn}>
          <section className={styles.panel}>
            <div className={styles.panelHeader}>
              <BrainCircuit className={styles.iconAi} />
              <h2>Ustawienia Matchingu AI</h2>
            </div>
            
            <div className={styles.aiSettingsBox}>
              <div className={styles.infoAlert}>
                <Info size={16} />
                <span>Określ, jak surowy ma być algorytm oceniający CV w skali 0-100%.</span>
              </div>

              <div className={styles.formGroup}>
                <label>Rygorystyczność Algorytmu</label>
                <select className={styles.highlightSelect}>
                  <option>Normalna (Domyślnie)</option>
                  <option>Luźna (Szukam talentów)</option>
                  <option>Bardzo restrykcyjna (Tylko 100% Match)</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>Wymagane Twarde Skille (Oddziel przecinkiem)</label>
                <input type="text" placeholder="np. React, Node.js, AWS" />
                <span className={styles.fieldHint}>AI automatycznie odrzuci CV bez tych słów kluczowych.</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
