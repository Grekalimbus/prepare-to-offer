import LoginGoogle from "@/frontend/shared/ui/Buttons/loginGoogle/LoginGoogle";
import LongPainted from "@/frontend/shared/ui/Buttons/longPainted/LongPainted";
import Separator from "@/frontend/shared/ui/separator/Separator";
import { signIn } from "next-auth/react";

const LowerSectionForm = () => {
    return (
        <>
            <LongPainted text="Войти" />
            <Separator />
            <LoginGoogle onClick={() => signIn("google", { callbackUrl: "/questionsPage/allQuestions" })} />
        </>
    );
};

export default LowerSectionForm;
