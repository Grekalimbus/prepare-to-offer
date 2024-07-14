import ButtonAddField from "@/components/button/ButtonAddField";
import InputWithRemoveButton from "@/components/input/InputWithRemoveButton";
import { useState } from "react";
import { MdLink } from "react-icons/md";

const UsefulLinks = () => {
    const [numberLinks, setNumberLinks] = useState<[] | string[]>([]);
    const handleIncrement = () => {
        setNumberLinks(prev => {
            const nextNumber = prev.length === 0 ? 0 : Number(prev[prev.length - 1]) + 1;
            return [...prev, String(nextNumber)];
        });
    };

    const handleDecrement = (value: string) => {
        setNumberLinks(prev => prev.filter(item => item !== value));
    };
    return (
        <>
            {numberLinks.length > 0 && (
                <>
                    {numberLinks.map(item => {
                        return (
                            <InputWithRemoveButton
                                key={item}
                                valueKey={item}
                                name="link"
                                type="text"
                                placeholder="https://any-resourses.io"
                                required={true}
                                handleDecrement={handleDecrement}
                            />
                        );
                    })}
                </>
            )}
            <ButtonAddField icon={<MdLink />} handleIncrement={handleIncrement} text="Добавить ссылки на материалы" />
        </>
    );
};

export default UsefulLinks;
