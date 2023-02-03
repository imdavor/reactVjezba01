import { generateRandomNumber, isDateEven } from "./utils";

function FunkKomp(props) {
    const date = new Date();

    return (
        <div>
            <p> Funkcionalna komponenta </p>
            {isDateEven() && "Date is even"(date)}
            {!isDateEven() && generateRandomNumber(1, 100)}
        </div>
    );
}

export default FunkKomp;
