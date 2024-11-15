import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.form`
    grid-area: content;
    padding: 1.25rem 1.5rem;

    overflow-y: auto;
`;

export const InputWrapper = styled.div`
    width: 100%;

    > label {
        font-size: 1.1rem;
        font-weight: 600;
    }

    > div {
        margin-top: 5px;
    }

    .savedUploads {
        margin: 30px 0;
    }
`;

export const Archive = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;

    > svg {
        margin-bottom: 7px;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.RED_100};
    }
`;

export const NotFound = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    justify-content: center;
`;