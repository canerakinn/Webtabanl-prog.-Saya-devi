
import react, { useState } from "react";

const Button = () => {
    let sayac = 0;
    const [sayac2, arttıcı2] = useState(sayac);
    const arttıcı = () => {
        arttıcı2(sayac2 + 1);
    }
    return (
        <div>
            <h2>Butona tıklama sayısı: {sayac2}</h2>
            <button onClick={arttıcı}>Tıkla</button>
        </div>
    );
}
export default Button;