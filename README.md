### Сервис для помощи в подготовке к собеседованиям

## Инструменты

    - Next.js
    - TypeScript
    - Zustand
    - Tanstack/react-query
    - MongoDB
    - CSS Modules
    - Next auth

## В проекте используется модульная архитектура. В src лежат основные слои, в app страницы

**ui**: готовые кнопки/инпуты

**components**: Переиспользуемые компоненты (модалки, лодеры, кастомные радио/чекбокс кнопки)

**layouts**: (хедеры, футеры, навигация)

**modules**: полнофункциональные сущности имеющие свою логику, переиспользуемые (Например, компонент QuestionsCards, который отображает разный интерфейс в зависимости от условий и используется в разных частях приложения)

**hooks**: кастомные хуки в которых в основном запросы на данные с tanstack-query

## Примеры кода

**QuestionCreate.tsx**

```jsx
const QuestionCreate = () => {
    const [isError, setIsError] = useState < boolean > false;
    const [errorMessage, setErrorMessage] = useState < string > "";
    const { setIsLoader } = useLoader();
    const formRef = useRef < HTMLFormElement > null;
    const session = useSession();
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (session.data?.user?.email) {
            setIsLoader();
            const email = session.data.user?.email;
            await handleSubmit({ event, setErrorMessage, setIsError, email, formRef });
            setIsLoader();
        }
    };

    return (
        <section className={styles.wrapper}>
            <form onSubmit={onSubmit} className={styles.formBlock} ref={formRef}>
                <Input required={true} name="question" inputType="text" placeholder="Введите вопрос" />
                <TextareaAndLabel name="answer" placeholder="Введите ответ на вопрос" />
                <RadioSelect array={arrayTechnologies} name="technology" textForSelect="Выберите раздел" />
                <FieldForCodeSlice text="Добавить снипет кода" icon={<FaRegFileCode />} />
                <UsefulLinks />
                <CustomCheckbox />
                <span className={styles.line}></span>
                <Button text="Создать" />
            </form>
            <ErrorMessage errorMessage={errorMessage} isError={isError} />
        </section>
    );
};

export default QuestionCreate;
```
