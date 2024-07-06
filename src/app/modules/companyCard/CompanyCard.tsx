import { Company } from "@/types/company/company";
import styles from "./CompanyCard.module.css";
interface Props {
    companies:
        | {
              companiesPending: Company[] | undefined;
              isLoading: boolean;
              error: Error | null;
          }
        | undefined;
}
const CompanyCard = ({ companies }: Props) => {
    console.log("companies?.companiesPending", companies?.companiesPending);
    if (companies?.isLoading) {
        return <div>LOADING</div>;
    }
    if (companies?.error) {
        return <div>ERROR</div>;
    }
    if (companies?.companiesPending !== undefined) {
        return (
            <section className={styles.commonWrapper}>
                <div className={styles.wrapperCompany}>
                    {companies.companiesPending && (
                        <>
                            {companies.companiesPending.map((company: Company) => {
                                return (
                                    <div key={company._id} className={styles.companyCard}>
                                        <div className={styles.point}>Название компании: {company.companyName}</div>
                                        {company.linkVacancy && (
                                            <div className={styles.point}>
                                                Ссылка на вакансию: {company.linkVacancy}
                                            </div>
                                        )}
                                        {company.description && (
                                            <div className={styles.point}>Описание:{company.description}</div>
                                        )}
                                        <div className={styles.point}>Сложность:{company.difficulty}</div>
                                        <div className={styles.point}>Формат: {company.typeOfInterview}</div>
                                        <div className={styles.point}>Лайфкодинг: {company.liveCoding}</div>
                                        {company.sliceOfCode && (
                                            <div className={styles.point}>Задачи: {company.sliceOfCode}</div>
                                        )}
                                        <div className={styles.point}>
                                            {company.questions.map((question: string) => {
                                                return <p key={question}>{question}</p>;
                                            })}
                                        </div>
                                        <div className={styles.point}>Дата создания : {company.createdAt}</div>
                                    </div>
                                );
                            })}
                        </>
                    )}
                    {/* <div className={styles.companyCard}>
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
                    </div> */}
                </div>
            </section>
        );
    }
};

export default CompanyCard;
