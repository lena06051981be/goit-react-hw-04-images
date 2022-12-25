import styled from "styled-components";

export const GalleryItem = styled.li`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */
  transition: transform 250ms linear, box-shadow 250ms linear;
    &:hover{
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transform: scale(1.07);
            cursor: pointer;
            /* cursor: zoom-in; */
        }
`
export const GalleryImage = styled.img`
  width: 100%;
  height: 260px;
  /* overflow: hidden; */
  object-fit: cover;
  transition: transform 250ms linear;

    &:hover{
        transform: scale(1.01);
    }
`
export const GalleryInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4px 10px;
  font-size: 12px;
  border-bottom: 1px solid #212121;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  color: #fafafa;
  background-color: rgba(93, 93, 93, 0.618);
  /* z-index: 100; */ /* хм, интересно)) перебил портал и вылез вперед)) */  
`
export const GalleryInfoItem = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin: 0;
`


