import ModalPolicy from "@/frontend/shared/components/modalWindow/modalPolicy/ModalPolicy";
import LoginGoogle from "@/frontend/shared/ui/Buttons/loginGoogle/LoginGoogle";
import LongPainted from "@/frontend/shared/ui/Buttons/longPainted/LongPainted";
import Separator from "@/frontend/shared/ui/separator/Separator";
import { signIn } from "next-auth/react";
import { useState } from "react";
import styles from "../SignIn.module.css";

const LowerSectionForm = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <p className={styles.titleWarning}>
                Вы соглашаетесь с нашими Условиями использования и подтверждаете, что прочитали и поняли нашу
                <span onClick={() => setIsOpen(true)} className={styles.span}>
                    Политику конфиденциальности
                </span>
                . Ваши данные будут использоваться в соответствии с этой политикой для обеспечения безопасности и
                улучшения качества наших услуг.
            </p>
            <LongPainted text="Зарегистрироваться" />
            <Separator />
            <LoginGoogle onClick={() => signIn("google", { callbackUrl: "/questionsPage/allQuestions" })} />
            <ModalPolicy isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default LowerSectionForm;
