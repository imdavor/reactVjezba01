import { Component } from "react";
import FunkKomp from "./FunkKomp";

export default class KlasaKomp extends Component {
    render() {
        return (
            <p>
                Ovo je Klasna komponenta! Koja u sebi ima
                <FunkKomp />
            </p>
        );
    }
}
