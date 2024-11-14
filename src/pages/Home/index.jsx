import { Container, Publications } from "./styles";

import { Fixed } from "../../components/Fixed";
import { Publication } from "../../components/Publication";
import { Search } from "../../components/Search";

export function Home() {
    return (
        <Fixed title="Publicações" route="/">
            <Container>

                <Search />

                <Publications>
                    <Publication />
                    <Publication />
                    <Publication />
                    <Publication />
                    <Publication />
                </Publications>

            </Container>
        </Fixed>
    );
}