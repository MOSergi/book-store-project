import { useState } from "react";

export default function App() {

        const [count, setCount] = useState<number>(0);

        return (
            <div>
                <h2>Hola</h2>
                {count}
            </div>
        );
}