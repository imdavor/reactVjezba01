import { generateRandomNumber, isDateEven } from "./utils";

function FunkKomp(props) {
    const date = new Date();

    return (
        <div>
            <p> Ovo je Funkcionalna komponenta </p>
            {isDateEven() && "Date is even"}
            {!isDateEven() && generateRandomNumber(1, 100)}
        </div>
    );
}

export default FunkKomp;
