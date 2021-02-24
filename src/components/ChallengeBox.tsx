import styles from "../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
    return (
        <div className={styles.ChallengeBoxContainer}>
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um novo desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Avance de nível completando desafios
                </p>
            </div>
        </div>
    )
}