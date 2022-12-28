import styled from "styled-components";

export const LoaderStyle = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    /* margin-left = - width / 2 */
    margin-left: -50px;
    /* margin-top = - height / 2 */
    /* margin-top: -100px;    */
    /* margin: 0 auto; */
    scale: 1.5;
    padding: 10px;
    height: 200px;
    z-index: 1300;
`