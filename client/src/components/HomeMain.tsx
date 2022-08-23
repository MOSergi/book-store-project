//img import
import imgIntro from "../resources/book-intro-image.svg";
import "../styles/HomeMain.css";

export default function HomeMain(){
    return (
        <main>
            <div id="Intro">
                <h2>Bienvenidos a MOSergi Books Store</h2>
                <h4>Si te gusta leer estas en el lugar ideal, miles de libros te esperan</h4>
                <img src={imgIntro} alt="book-image" />
            </div>
        </main>
    );
}