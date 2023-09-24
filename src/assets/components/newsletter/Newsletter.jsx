import ButtonPrimary from "../buttons/ButtonPrimary.jsx"
import Field from "../field/Field.jsx"

export default function Newsletter() {

    return (
        
        <div className="flex flex-row gap-4 w-[25rem] h-14 items-start">
            <Field height="h-14" />
            <ButtonPrimary width={"w-[8.875rem]"} />
        </div>
        
    )

}