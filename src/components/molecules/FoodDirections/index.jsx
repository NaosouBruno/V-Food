import "./directions.scss";
import Woman from "/assets/woman.png";
import { ListIngredients } from "../../molecules";
function Directions() {
  return (
    <div className="directions">
      <h2 className="directions__typografy">Directions</h2>
      <ul>
        <ListIngredients
          className="listIng__ingredient directions__typografy directions__typografy--item"
          ingredient="1. Lorem ipsum dolor sit amet"
        />
        <p className="directions__typografy directions__typografy--explication">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
        <img src={Woman} />

        <p className="directions__typografy directions__typografy--explication">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
        <hr className="listIng-line" />
        <ListIngredients
          className="listIng__ingredient directions__typografy directions__typografy--item"
          ingredient="2. Lorem ipsum dolor sit amet"
        />
        <p className="directions__typografy directions__typografy--explication">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
        <hr className="listIng-line" />
        <ListIngredients
          className="listIng__ingredient directions__typografy directions__typografy--item"
          ingredient="3. Lorem ipsum dolor sit amet"
        />
        <p className="directions__typografy directions__typografy--explication">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
      </ul>
    </div>
  );
}

export default Directions;
