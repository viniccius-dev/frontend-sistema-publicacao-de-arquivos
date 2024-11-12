import { useState } from "react";

import { Container, HiddenCheckbox, StyledCheckbox, Text } from "./styles";
import { IoCheckmarkOutline } from "react-icons/io5";

export function Checkbox({ children, ...props }) {
    const [checked, setChecked] = useState(false);

    function handleCheckboxChange() {
        setChecked(!checked);
    }

    return (
        <Container
            checked={checked}
            onClick={handleCheckboxChange}
        >
            <HiddenCheckbox 
                checked={checked}
                onChange={handleCheckboxChange}
                {...props}
            />
            <StyledCheckbox checked={checked}>
                <IoCheckmarkOutline size={20}/>
            </StyledCheckbox>
            <Text checked={checked} > {children} </Text>
        </Container>
    );
}