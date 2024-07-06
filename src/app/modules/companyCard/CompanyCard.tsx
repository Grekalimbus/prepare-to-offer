import styles from "./CompanyCard.module.css";
const CompanyCard = () => {
    return (
        <section className={styles.companyWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.companyContent}>
                    <div className={styles.point}>Название компании: Неизвестно</div>
                    <div className={styles.point}>Ссылка на вакансию если есть</div>
                    <div className={styles.point}>
                        Описание: Легкое интервью. Не сложные вопросы. Показали пару задачек, но не лайф кодинг
                    </div>
                    <div className={styles.point}>Сложность</div>
                    <div className={styles.point}>Тип: Скрининг / технический/ финальное/ другое</div>
                    <div className={styles.point}>Лайфкодинг: Был/ Не было</div>
                    <div className={styles.point}>
                        <p>Вопросы:</p>
                        <p>Что такое React</p>
                        <p>Как Реакт рендерит страницу</p>
                        <p>Что такое виртуальный DOM</p>
                    </div>
                    <div className={styles.point}>Дата создания : 25.05.2025</div>
                </div>
            </div>
        </section>
    );
};

export default CompanyCard;
